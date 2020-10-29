import UserActionsEnum from "./userActionsEnum"

export const setCurrentUser = (user) => ({
    type: UserActionsEnum.setCurrentUser,
    payload: user
})