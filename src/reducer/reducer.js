import {FETCH_SUCCESS, POST_SUCCESS} from '../actions/action'

const initialState = {
    legos: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SUCCESS:
            return{
                ...state,
                legos: [...action.payload]
            }

        case POST_SUCCESS:
            return {
                ...state,
                legos: [...action.payload]
            }

        default:
            return{
                ...state
            }
    }
}