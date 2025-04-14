import styled from "styled-components";
import { Icon } from "../../../../components";

const PostContentContainer = ({
  className,
  post: { id, title, imageUrl, content, registeredAt },
}) => {
  return (
    <div className={className}>
      <img src={imageUrl} alt={title} />
      <h2>{title}</h2>
      <div className="special-panel">
        <div className="published-at">
          {/* <div onClick={() => onRoleSave(userId, selectedRoleId)}> */}
          <Icon
            id="fa fa-calendar-o"
            size="18px"
            margin="0 10px 0 10px"
            // disabled={isSaveButtonSelected}
          />
          {/* </div> */}
          {registeredAt}
        </div>

        <div className="buttons-panel">
          <Icon
            id="fa fa-trash-o"
            size="18px"
            margin="0 5px 0 0px"

            // disabled={isSaveButtonSelected}
          />
          <Icon
            id="fa fa-pencil-square-o"
            size="20px"
            margin="0 px 0 0px"

            // disabled={isSaveButtonSelected}
          />
        </div>
      </div>
      <div>{content}</div>
    </div>
  );
};

export const PostContent = styled(PostContentContainer)`
  padding: 40px 0px;
  margin: 0 80px;

    & img {
    float: left;
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
