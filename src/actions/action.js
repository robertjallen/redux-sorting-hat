import axios from 'axios'
export const FETCH_SUCCESS = "FETCH_SUCCESS"
export const POST_SUCCESS = "POST_SUCCESS"

// fetch legos

export const fetch = () => {
    return dispatch => {
        axios
        .get('https://harry-potter-legos.herokuapp.com/api/legos')
        
        // .get('https://www.potterapi.com/v1/sortingHat')
        .then( res => {
            console.log(res.data)
            dispatch({type: FETCH_SUCCESS, payload: res.data})
        })
    }
}

export function post(lego) {

    // this is our "thunk" function. redux-thunk middleware
    // automatically gives us access to the dispatcher as a parameter
    return dispatch => {
      // we can kick off as many actions as we want,
      // whenever we want. allows our action creator to be asyncronous.
    //   dispatch({ type: POST_START });
      axios
        .post(
          `https://harry-potter-legos.herokuapp.com/api/legos`
        , lego)
        .then(res => {
          // Code for handling API response
          console.log("LEGOS", res.data);
          dispatch({ type: POST_SUCCESS, payload: res.data });
        })
        .catch(function() {
          // Code for handling errors
        });
    };
  }