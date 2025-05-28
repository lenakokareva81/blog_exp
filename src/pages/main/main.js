import { useMemo, useEffect, useState } from "react";
import styled from "styled-components";
import { useServerRequest } from "../../hooks";
import { Pagination, PostCard, Search } from "./componenets";
import { PAGINATION_LIMIT } from "../../constans";
import { debounce } from "./utils";

const MainContainer = ({ className }) => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [shoudSearch, setShoudSearch] = useState(false);
  const [searchPhrase, setSearchPhrase] = useState("");
  const requestServer = useServerRequest();
  const limit = PAGINATION_LIMIT;

  useEffect(() => {
    Promise.all([requestServer(`fetchPosts`, searchPhrase, page, limit)]).then(
      ([
        {
          res: { posts, last },
        },
      ]) => {
        setPosts(posts);

        setLastPage(last);
      }
    );
  }, [requestServer, page, shoudSearch]);

  const startDelaySerch = useMemo(() => debounce(setShoudSearch, 2000), []);

  const onSearch = ({ target }) => {
    setSearchPhrase(target.value);
    startDelaySerch(!shoudSearch);
  };

  return (
    <div className={className}>
      <Search onChange={onSearch} searchPhrase={searchPhrase} />
      {posts.length ? (
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
      ) : (
        <div className="no-post-found">статьи не найдены</div>
      )}
      {lastPage > 1 && (
        <Pagination setPage={setPage} page={page} lastPage={lastPage} />
      )}
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
  & .no-post-found {
    font-size: 18px;
  }
`;
