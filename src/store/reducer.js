import * as actions from './actions'

const initialState = {
    restos: [],
    errors: []
}

export default (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case actions.SET_RESTOS:
            return { ...state, restos: payload }
        case actions.SET_ERRORS:
            return { ...state, errors: payload }
        default:
            return state
    }
}