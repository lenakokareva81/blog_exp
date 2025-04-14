import styled from "styled-components";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Comments, PostContent } from "./components";
import { useDispatch, useSelector } from "react-redux";
import { useServerRequest } from "../../hooks";
import { loadPostAsync } from "../../actions";
import { selectPost } from "../../selectors";

const PostContainer = ({ className }) => {
  const post = useSelector(selectPost);
  const dispatch = useDispatch();
  const params = useParams();
  const requestserver = useServerRequest();

  useEffect(() => {
    dispatch(loadPostAsync(requestserver, params.id));
  }, [requestserver, params.id, dispatch]);

  return (
    <div className={className}>
      <PostContent post={post} />
      <Comments comments={post.comments} postId={post.id} />
    </div>
  );
};

export const Post = styled(PostContainer)``;
