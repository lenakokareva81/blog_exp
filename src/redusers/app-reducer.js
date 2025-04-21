import { ACTION_TYPE } from "../actions";

export const initialAppState = {
  waslogout: false,
  modal: { isOpen: false, text: "", onConfirm: () => {}, onCancel: () => {} },
};

export const appReducer = (state = initialAppState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPE.LOGOUT:
      return { ...state, waslogout: !state.waslogout };

    case ACTION_TYPE.OPEN_MODAL:
      return {
        ...state,
        modal: {
          ...state.modal,
          ...payload,
          isOpen: true,
        },
      };

    case ACTION_TYPE.CLOSE_MODAL:
      return {
        ...state,
        modal: {
          ...initialAppState.modal,
        },
      };
    default:
      return state;
  }
};
