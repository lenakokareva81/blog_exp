import { ACTION_TYPE } from "../actions";

export const initialAppState = {
  waslogout: false,
};

export const appReducer = (state = initialAppState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPE.LOGOUT:
      return { ...state, waslogout: !state.waslogout };
    default:
      return state;
  }
};
