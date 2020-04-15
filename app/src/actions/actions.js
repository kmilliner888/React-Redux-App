import axios from 'axios';

export const GET_ACTIVITY_START = "GET_ACTIVITY_START";
export const GET_ACTIVITY_SUCCESS = "GET_ACTIVITY_SUCCESS";
export const GET_ACTIVITY_FAILURE = "GET_ACTIVITY_FAILURE";

export const getActivity = () => dispatch => {
    dispatch({ type: GET_ACTIVITY_START });
    axios.get('https://www.boredapi.com/api/activity/')
        .then(response => {
            console.log("response", response);
            dispatch({ type: GET_ACTIVITY_SUCCESS, payload: response.data})
        })
        .catch(error => {
            // console.log("error", error.response.data);
            dispatch({ type: GET_ACTIVITY_FAILURE, payload: `${error.response}`})
        })
};
