export const initialPostsState = {};

export const postsReducer = (state = initialPostsState, { type, payload }) => {
  switch (type) {
    // case ACTION_TYPE.EDIT_TODO:
    //   return { ...state, title: payload };
    default:
      return state;
  }
};
