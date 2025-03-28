export const initialUsersState = {};

export const usersReducer = (state = initialUsersState, { type, payload }) => {
  switch (type) {
    // case ACTION_TYPE.EDIT_TODO:
    //   return { ...state, title: payload };
    default:
      return state;
  }
};
