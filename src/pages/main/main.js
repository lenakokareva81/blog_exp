import { useEffect, useState } from "react";
import styled from "styled-components";
import { useServerRequest } from "../../hooks";
import { PostCard } from "./componenets";

const MainContainer = ({ className }) => {
  const [posts, setPosts] = useState([]);
  const requestServer = useServerRequest();

  useEffect(() => {
    Promise.all([requestServer(`fetchPosts`)]).then(([posts]) => {
      setPosts(posts.res);
    });
  }, [requestServer]);

  return (
    <div className={className}>
      <div className="post-list">
        {posts.map(({ id, title, registeredAt, imageUrl, commentsCount }) => (
          <PostCard
            key={id}
            id={id}
            title={title}
            imageUrl={imageUrl}
            publishedAt={registeredAt}
            commentsCount={commentsCount}
          />
        ))}
      </div>
    </div>
  );
};

export const Main = styled(MainContainer)`
  padding: 20px;

  & .post-list {
    display: flex;
    flex-wrap: wrap;

    justify-content: space-evenly;
  }
`;
