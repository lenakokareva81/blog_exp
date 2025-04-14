import { useState } from "react";
import styled from "styled-components";
import { Icon } from "../../../../components";
import { useDispatch, useSelector } from "react-redux";
import { Comment } from "./coponents/comment/comment";
import { selectUserId } from "../../../../selectors";
import { addCommentAsync } from "../../../../actions";
import { useServerRequest } from "../../../../hooks";

const CommentsContainer = ({ className, comments, postId }) => {
  const [newComment, setNewComment] = useState("");
  const dispatch = useDispatch();
  const userId = useSelector(selectUserId);
  const requestserver = useServerRequest();

  const onNewCommentAdd = (userId, postId, content) => {
    dispatch(addCommentAsync(requestserver, userId, postId, content));
    setNewComment("");
  };

  return (
    <div className={className}>
      <div className="new-comment">
        <textarea
          value={newComment}
          placeholder="комментарий ..."
          onChange={({ target }) => setNewComment(target.value)}
        ></textarea>
        <div onClick={() => onNewCommentAdd(userId, postId, newComment)}>
          <Icon
            id="fa fa-paper-plane-o"
            size="18px"
            margin="0 0px 0 10px"
            // disabled={isSaveButtonSelected}
          />
        </div>
      </div>

      <div className="comments">
        {comments.map(({ id, author, content, publishedAt }) => (
          <Comment
            key={id}
            id={id}
            author={author}
            content={content}
            publishedAt={publishedAt}
          />
        ))}
      </div>
    </div>
  );
};

export const Comments = styled(CommentsContainer)`
  width: 580px;

  margin: 20px auto;
  & .new-comment {
    display: flex;
    width: 100%;
    margin: 20px 0 0 0;
  }
  & .new-comment textarea {
    resize: none;
    width: 550px;
    height: 120px;
    font-size: 18px;
  }
`;
