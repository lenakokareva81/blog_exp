import styled from "styled-components";
import { Icon } from "../../../../components";
import { useDispatch } from "react-redux";
import { CLOSE_MODAL, openModal, removePostAsync } from "../../../../actions";
import { useServerRequest } from "../../../../hooks";
import { useNavigate } from "react-router-dom";

const SpecialPanelContainer = ({ className, id, registeredAt, editButton }) => {
  const dispatch = useDispatch();
  const requestServer = useServerRequest();
  const navigate = useNavigate();

  const onPostRemove = (id) => {
    dispatch(
      openModal({
        text: "Удалить статью?",
        onConfirm: () => {
          dispatch(removePostAsync(requestServer, id)).then(() => {
            navigate("/");
          });
          dispatch(CLOSE_MODAL);
        },

        onCancel: () => dispatch(CLOSE_MODAL),
      })
    );
  };
  return (
    <div className={className}>
      <div className="published-at">
        {registeredAt && (
          <Icon
            id="fa fa-calendar-o"
            size="18px"
            margin="0 10px 0 10px"
            inactive={true}
          />
        )}

        {registeredAt}
      </div>

      <div className="buttons-panel">
        {registeredAt && (
          <Icon
            id="fa fa-trash-o"
            size="20px"
            margin="0 5px 0 0px"
            onClick={() => onPostRemove(id)}
          />
        )}

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
