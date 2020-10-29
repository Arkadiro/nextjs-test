import UserActionsEnum from "./userActionsEnum";

const initialState = {}

interface Action {
  type: string,
  payload: {}
};

const userReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case UserActionsEnum.setCurrentUser:
      return {
        ...state,
        currentUser: action.payload
      };
    default:
      return state;
  }
}

export default userReducer;