export const initialPostState = {};

export const postReducer = (state = initialPostState, { type, payload }) => {
  switch (type) {
    // case ACTION_TYPE.EDIT_TODO:
    //   return { ...state, title: payload };
    default:
      return state;
  }
};
