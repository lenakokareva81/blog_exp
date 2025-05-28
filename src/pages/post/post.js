import styled from "styled-components";
import { useEffect, useLayoutEffect, useState } from "react";
import { useParams, useMatch } from "react-router-dom";
import { Comments, PostContent, PostForm } from "./components";
import { Error, PrivetContent } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { useServerRequest } from "../../hooks";
import { loadPostAsync, RESET_POST_DATA } from "../../actions";
import { selectPost } from "../../selectors";
import { initialPostState } from "../../redusers/post-reducer";
import { ROLE } from "../../constans";

const PostContainer = ({ className }) => {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const post = useSelector(selectPost);
  const dispatch = useDispatch();
  const isCreating = !!useMatch("/post");
  const isEditing = !!useMatch("/post/:id/edit");
  const params = useParams();
  const requestserver = useServerRequest();

  useLayoutEffect(() => {
    dispatch(RESET_POST_DATA);
  }, [dispatch, isCreating]);

  useEffect(() => {
    if (isCreating) {
      setIsLoading(false);
      return;
    }

    const disp = dispatch(loadPostAsync(requestserver, params.id));

    disp &&
      disp.then((postData) => {
        setError(postData.error);
        setIsLoading(false);
      });
  }, [requestserver, params.id, dispatch, isCreating]);

  if (isLoading) {
    return null;
  }

  const SpecificPostPage =
    isEditing || isCreating ? (
      <PrivetContent access={[ROLE.ADMIN]}>
        <div className={className}>
          <PostForm post={post} />
        </div>
      </PrivetContent>
    ) : (
      <div className={className}>
        {" "}
        <PostContent post={post} />
        <Comments comments={post.comments} postId={post.id} />
      </div>
    );

  return error ? (
    <div>
      <Error error={error} />
    </div>
  ) : (
    SpecificPostPage
  );
};

export const Post = styled(PostContainer)``;
