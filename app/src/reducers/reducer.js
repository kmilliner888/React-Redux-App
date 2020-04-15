import { GET_ACTIVITY_START, GET_ACTIVITY_SUCCESS, GET_ACTIVITY_FAILURE} from '../actions/actions';

const initialState = {
    activity: [],
    error: " ", 
    isFetching: false
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ACTIVITY_START:
            return {
                ...state,
                error: " ",
                isFetching: true,
            };

        case GET_ACTIVITY_SUCCESS:
            return {
                ...state,
                error: "",
                isFetching: false,
                activity: action.payload
            }

        case GET_ACTIVITY_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false
            }
        
        default:
            return state;
    }
};

