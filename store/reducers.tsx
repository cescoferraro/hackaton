import { NOT_FOUND } from 'redux-first-router'

export const userIdReducer = (state = null, action: { type: string; payload: { id: string } }) => {
    switch (action.type) {
        case 'HOME':
        case NOT_FOUND:
            return null
        case 'USER':
            return action.payload.id
        default:
            return state
    }
}
