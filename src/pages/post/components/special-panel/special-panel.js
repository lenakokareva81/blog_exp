import styled from "styled-components";
import { Icon } from "../../../../components";

const SpecialPanelContainer = ({ className, registeredAt,editButton }) => {
  return (
    <div className={className}>
      <div className="published-at">
        {/* <div onClick={() => onRoleSave(userId, selectedRoleId)}> */}
        <Icon
          id="fa fa-calendar-o"
          size="18px"
          margin="0 10px 0 10px"
          // disabled={isSaveButtonSelected}
        />
        {/* </div> */}
        {registeredAt}
      </div>

      <div className="buttons-panel">
        <Icon
          id="fa fa-trash-o"
          size="20px"
          margin="0 5px 0 0px"

          // disabled={isSaveButtonSelected}
        />
        {editButton}
        
      </div>
    </div>
  );
};

export const SpecialPanel = styled(SpecialPanelContainer)`
  margin: ${(margin = "0 0 0 0 ") => margin};
  font-size: 20px;
  display: flex;
  justify-content: space-between;

  & .published-at {
    display: flex;
  }
  & .buttons-panel {
    display: flex;
  }
`;
