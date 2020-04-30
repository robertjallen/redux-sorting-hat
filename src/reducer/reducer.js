import {SUCCESS} from '../actions/action'

const initialState = {
    house: null
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SUCCESS:
            return{
                ...state,
                house: action.payload
            }
        default:
            return{
                ...state
            }
    }
}