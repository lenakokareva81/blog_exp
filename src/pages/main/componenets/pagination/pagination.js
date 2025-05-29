import PropTypes from "prop-types";
import styled from "styled-components";
import { Button } from "../../../../components";

const PaginationContainer = ({ className, setPage, page, lastPage }) => {
  return (
    <div className={className}>
      <Button disabled={page === 1} onClick={() => setPage(1)}>
        в начало
      </Button>
      <Button disabled={page === 1} onClick={() => setPage(page - 1)}>
        предыдущая
      </Button>
      <div className="current-page">страница:{page}</div>
      <Button disabled={page === lastPage} onClick={() => setPage(page + 1)}>
        следующая
      </Button>
      <Button disabled={page === lastPage} onClick={() => setPage(1)}>
        в конец
      </Button>
    </div>
  );
};

export const Pagination = styled(PaginationContainer)`
  display: flex;
  margin: 10px 0;
  padding: 0 20px;
  justify-content: space-between;
  & button {
    margin: 0 20px;
    width: 120px;
  }
  & .current-page {
    width: 120px;
    text-align: center;
    border: solid black 1px;
  }
`;
Pagination.propTypes = {
  setPage: PropTypes.funct,
  page: PropTypes.number,
  lastPage: PropTypes.number,
};
