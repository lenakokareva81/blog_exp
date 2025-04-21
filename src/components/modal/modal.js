import styled from "styled-components";
import { Button } from "../button/button";
import { useSelector } from "react-redux";
import {
  selectModalText,
  selectModalonCancel,
  selectModalonConfirm,
  selectModalIsOpen,
} from "../../selectors";

const ModalContainer = ({ className }) => {
  const text = useSelector(selectModalText);
  const isOpen = useSelector(selectModalIsOpen);
  const onConfirm = useSelector(selectModalonConfirm);
  const onCancel = useSelector(selectModalonCancel);

  if (!isOpen) {
    return null;
  }

  return (
    <div className={className}>
      <div className="overlay"></div>
      <div className="box">
        <h3>{text}</h3>
        <div className="buttons">
          <Button width="120px" onClick={onConfirm}>
            да
          </Button>
          <Button width="120px" onClick={onCancel}>
            нет
          </Button>
        </div>
      </div>
    </div>
  );
};

export const Modal = styled(ModalContainer)`
  z-index: 20;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  & .overlay {
    background-color: rgba(0, 0, 0, 70.9%);
    width: 100%;
    height: 100%;
    position: absolute;
  }
  & .box {
    text-align: center;
    width: 400px;
    z-index: 30;
    background-color: white;
    position: relative;
    margin: 0 auto;
    top: 50%;
    transform: translate(0, -50%);
    border: 1px solid #000;
    padding: 20px;
  }
  & .buttons {
    display: flex;
    justify-content: center;
  }
`;
