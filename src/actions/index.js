import * as actions from "../reducers/counterActionTypes";

export const increment = () => {
  return {
    type: actions.INCREMENT,
  };
};
