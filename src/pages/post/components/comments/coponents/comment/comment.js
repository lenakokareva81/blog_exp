import PropTypes from "prop-types";
import styled from "styled-components";
import { Icon } from "../../../../../../components";
import { useDispatch, useSelector } from "react-redux";
import {
  removeCommentAsync,
  openModal,
  CLOSE_MODAL,
} from "../../../../../../actions";
import { useServerRequest } from "../../../../../../hooks";
import { selectUserRole } from "../../../../../../selectors";
import { checkAccess } from "../../../../../../utils";
import { ROLE } from "../../../../../../constans";

const CommentContainer = ({
  className,
  id,
  author,
  content,
  publishedAt,
  postId,
}) => {
  const dispatch = useDispatch();
  const requestserver = useServerRequest();
  const userRole = useSelector(selectUserRole);
  const isAdminorModerator = checkAccess(
    [ROLE.ADMIN, ROLE.MODERATOR],
    userRole
  );

  const onCommentRemove = (id, postId) => {
    dispatch(
      openModal({
        text: "Удалить комментарий?",
        onConfirm: () => {
          dispatch(removeCommentAsync(requestserver, id, postId, content));
          dispatch(CLOSE_MODAL);
        },

        onCancel: () => dispatch(CLOSE_MODAL),
      })
    );
  };

  return (
    <div className={className}>
      <div className="comment">
        <div className="information-panel">
          <div className="autor">
            <Icon
              inactive={true}
              id="fa fa-user-circle-o"
              size="18px"
              margin="0 10px 10px 10px"
              // disabled={isSaveButtonSelected}
            />
            {author}
          </div>
          <div className="publishedAt">
            {/* <div onClick={() => onNew(userId, selectedRoleId)}> */}
            {publishedAt}
            <Icon
              inactive={true}
              id="fa-calendar-o"
              size="18px"
              margin=" 0px  0 0px 10px"
              // disabled={isSaveButtonSelected}
            />
            {/* </div> */}
          </div>
          {/* <div onClick={() => onNew(userId, selectedRoleId)}> */}

          {/* </div> */}
        </div>
        <div className="comment-text">{content}</div>
      </div>
      {isAdminorModerator && (
        <div onClick={() => onCommentRemove(id, postId)}>
          <Icon
            id="fa fa-trash-o"
            size="18px"
            margin="0px 0px 0 10px"
            // disabled={isSaveButtonSelected}
          />
        </div>
      )}
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
  & .publishedAt {
    display: flex;
  }
`;
Comment.propTypes = {
  id: PropTypes.string,
  author: PropTypes.string,
  content: PropTypes.string,
  publishedAt: PropTypes.string,
  postId: PropTypes.string,
};
