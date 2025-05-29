import styled from "styled-components";

import { Icon, Input } from "../../../../components";
import { SpecialPanel } from "../special-panel/special-panel";
import { useNavigate } from "react-router-dom";
import { useLayoutEffect, useRef, useState } from "react";
import { sanitizeContent } from "./utils";
import { useDispatch } from "react-redux";
import { savePostAsync } from "../../../../actions";
import { useServerRequest } from "../../../../hooks";
import { PROP_TYPE } from "../../../../constans";

const PostFormContainer = ({
  className,
  post: { id, title, imageUrl, content, registeredAt },
}) => {
  const dispatch = useDispatch();

  const contentRef = useRef(null);
  const navigate = useNavigate();
  const requestServer = useServerRequest();

  const [imageUrlValue, setimageUrlValue] = useState(imageUrl);
  const [titleValue, setTilelValue] = useState(title);

  const onImageChange = ({ target }) => setimageUrlValue(target.value);
  const onTitleChange = ({ target }) => setTilelValue(target.value);

  useLayoutEffect(() => {
    setimageUrlValue(imageUrl);
    setTilelValue(title);
  }, [title, imageUrl]);

  const onSave = () => {
    const newContent = sanitizeContent(contentRef.current.innerHTML);

    dispatch(
      savePostAsync(requestServer, {
        id: id,
        imageUrl: imageUrlValue,
        title: titleValue,
        content: newContent,
      })
    ).then(({ id }) => navigate(`/post/${id}`));
  };

  return (
    <div className={className}>
      <Input
        value={imageUrlValue}
        placeholder="..изображение"
        onChange={onImageChange}
      />
      <Input
        value={titleValue}
        placeholder="...заголовок"
        onChange={onTitleChange}
      />
      <SpecialPanel
        registeredAt={registeredAt}
        margin="20px 0 20px 0"
        id={id}
        editButton={
          <Icon
            id="fa fa-floppy-o"
            size="20px"
            margin="0 px 0 0px"
            onClick={onSave}

            // disabled={isSaveButtonSelected}
          />
        }
      />
      <div
        ref={contentRef}
        contentEditable={true}
        suppressContentEditableWarning={true}
        className="post-text"
        placeholder="...статья"
      >
        {content}
      </div>
    </div>
  );
};

export const PostForm = styled(PostFormContainer)`
  padding: 40px 0px;
  margin: 0 80px;

    & img {
    float: left;
    margin: 0 20px 20px 0;}

   
  }
        & .post-text{
        padding:20px;
        min-height: 80px;
    border: 1px solid black;
        }
`;
PostForm.propTypes = {
  post: PROP_TYPE.POST.isRequired,
};
