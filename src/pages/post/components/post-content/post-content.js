import styled from "styled-components";
import { Icon } from "../../../../components";
import { SpecialPanel } from "../special-panel/special-panel";
import { useNavigate } from "react-router-dom";
import { PROP_TYPE } from "../../../../constans";

const PostContentContainer = ({
  className,
  post: { id, title, imageUrl, content, registeredAt },
}) => {
  const navigate = useNavigate();
  return (
    <div className={className}>
      <img src={imageUrl} alt={title} />
      <h2>{title}</h2>
      <SpecialPanel
        registeredAt={registeredAt}
        margin="-10px 0 20px 0"
        id={id}
        editButton={
          <Icon
            id="fa-pencil-square-o"
            size="20px"
            margin="0 px 0 0px"
            onClick={() => navigate(`/post/${id}/edit`)}
          />
        }
      />

      <div>{content}</div>
    </div>
  );
};

export const PostContent = styled(PostContentContainer)`
  padding: 40px 0px;
  margin: 0 80px;

    & img {
    float: left;
    width:278px;
    height:150px;
    margin: 0 20px 20px 0;}

    & .special-panel {
      margin: -10px 0 20px 0;
      font-size:20px;
       display: flex;
       justify-content: space-between;
    }

    & .published-at {
        display: flex;
}
        & .buttons-panel{
        display: flex;
        }
  }
`;
PostContent.propTypes = {
  post: PROP_TYPE.POST.isRequired,
};
