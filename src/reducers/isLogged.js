import * as actions from "./isLoggedActionTypes";

const loggedReducer = (state = false, action) => {
  switch (action.type) {
    case actions.SIGN_IN:
      return !state;

    default:
      return state;
  }
};

export default loggedReducer;
