import styled from "styled-components";
import { Icon, Input } from "../../../../components";
import { SpecialPanel } from "../special-panel/special-panel";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { sanitizeContent } from "./utils";
import { useDispatch } from "react-redux";
import { savePostAsync } from "../../../../actions";
import { useServerRequest } from "../../../../hooks";

const PostFormContainer = ({
  className,
  post: { id, title, imageUrl, content, registeredAt },
}) => {
  const dispatch = useDispatch();
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const navigate = useNavigate();
  const requestServer = useServerRequest();

  const onSave = () => {
    const newImageUrl = imageRef.current.value;
    const newTitle = titleRef.current.value;
    const newContent = sanitizeContent(contentRef.current.innerHTML);

    dispatch(
      savePostAsync(requestServer, {
        id: id,
        imageUrl: newImageUrl,
        title: newTitle,
        content: newContent,
      })
    ).then(() => navigate(`/post/${id}`));
  };

  return (
    <div className={className}>
      <Input
        ref={imageRef}
        defaultValue={imageUrl}
        placeholder="..изображение"
      />
      <Input ref={titleRef} defaultValue={title} placeholder="...заголовок" />
      <SpecialPanel
        registeredAt={registeredAt}
        margin="20px 0 20px 0"
        editButton={
          <div onClick={onSave}>
            <Icon
              id="fa fa-floppy-o"
              size="20px"
              margin="0 px 0 0px"

              // disabled={isSaveButtonSelected}
            />
          </div>
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
        }
`;
