import styled from "styled-components";
import { Icon, Input } from "../../../../components";

const SearchContainer = ({ className, searchPhrase, onChange }) => {
  return (
    <div className={className}>
      <Input
        value={searchPhrase}
        placeholder="поиск по заголовкам..."
        onChange={onChange}
      />
      <Icon id="fa-search" size="18px" margin="0 10px 0 10px" inactive={true} />
    </div>
  );
};

export const Search = styled(SearchContainer)`
  display: flex;
  margin: 0 auto;
  width: 340px;
  height: 40px;
  position: relative;
  justify-content: flex-end;
  align-items: center;

  & > input {
    padding: 10px 39px 10px 10px;
  }
  & > div {
    position: absolute;
  }
`;
