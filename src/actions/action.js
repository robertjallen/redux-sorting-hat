import axios from 'axios'
export const SUCCESS = "SUCCESS"


export const fetch = () => {
    return dispatch => {
        axios
        .get('https://www.potterapi.com/v1/sortingHat')
        .then( res => {
            console.log(res.data)
            dispatch({type: SUCCESS, payload: res.data})
        })
    }
}