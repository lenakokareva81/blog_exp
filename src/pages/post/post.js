import styled from "styled-components";
import { useEffect, useLayoutEffect } from "react";
import { useParams, useMatch } from "react-router-dom";
import { Comments, PostContent, PostForm } from "./components";
import { useDispatch, useSelector } from "react-redux";
import { useServerRequest } from "../../hooks";
import { loadPostAsync, RESET_POST_DATA } from "../../actions";
import { selectPost } from "../../selectors";
import { initialPostState } from "../../redusers/post-reducer";

const PostContainer = ({ className }) => {
  const post = useSelector(selectPost);
  const dispatch = useDispatch();
  const isCreating = useMatch("/post");
  const isEditing = useMatch("/post/:id/edit");
  const params = useParams();
  const requestserver = useServerRequest();

  useLayoutEffect(() => {
    dispatch(RESET_POST_DATA);
  }, [dispatch, isCreating]);

  useEffect(() => {
    if (isCreating) {
      return;
    }
    dispatch(loadPostAsync(requestserver, params.id));
  }, [requestserver, params.id, dispatch]);

  return (
    <div className={className}>
      {isEditing || isCreating ? (
        <PostForm post={post} />
      ) : (
        <>
          <PostContent post={post} />
          <Comments comments={post.comments} postId={post.id} />
        </>
      )}
    </div>
  );
};

export const Post = styled(PostContainer)``;
