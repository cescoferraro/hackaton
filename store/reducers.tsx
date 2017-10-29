import { NOT_FOUND } from 'redux-first-router'
export const challengeReducer = (state = null, action: { type: string; payload: { id: string } }) => {
    switch (action.type) {
        case 'CHALLENGE':
            return action.payload.id
        default:
            return state
    }
}

export const sideBarReducer = (state = false, action: { type: string }) => {
    switch (action.type) {
        case "TOOGLE_SIDEBAR":
            return !state
        default:
            return state
    }
}
