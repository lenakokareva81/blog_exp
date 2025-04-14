import styled from "styled-components";
import { Icon } from "../../../../../../components";

const CommentContainer = ({ className, id, author, content, publishedAt }) => {
  return (
    <div className={className}>
      <div className="comment">
        <div className="information-panel">
          <div className="autor">
            <Icon
              id="fa fa-user-circle-o"
              size="18px"
              margin="0 0px 0 10px"
              // disabled={isSaveButtonSelected}
            />
            {author}
          </div>
          <div className="publishedAt">
            {/* <div onClick={() => onNew(userId, selectedRoleId)}> */}
            <Icon
              id="fa-calendar-o"
              size="18px"
              margin="0 0px 0 0px"
              // disabled={isSaveButtonSelected}
            />
            {/* </div> */}
            {publishedAt}
          </div>
          {/* <div onClick={() => onNew(userId, selectedRoleId)}> */}

          {/* </div> */}
        </div>
        <div className="comment-text">{content}</div>
      </div>
      <Icon
        id="fa fa-trash-o"
        size="18px"
        margin="0px 0px 0 10px"
        // disabled={isSaveButtonSelected}
      />
    </div>
  );
};

export const Comment = styled(CommentContainer)`
  display: flex;
  justify-content: space-between;
  margin: 20px 0 0 0;
  & .comment {
    width: 550px;
    border: 1px solid;
    padding: 5px;
  }
  & .information-panel {
    display: flex;
    justify-content: space-between;
  }
  & .autor {
    display: flex;
  }
`;
