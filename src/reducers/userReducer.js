import {
    GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_ERROR,
    CREATE_USER_REQUEST, CREATE_USER_SUCCESS, CREATE_USER_ERROR,
    // EDIT_USER_REQUEST, EDIT_USER_SUCCESS, EDIT_USER_ERROR,
    // DELETE_USER_REQUEST, DELETE_USER_SUCCESS, DELETE_USER_ERROR
} from "../action/types";

const INITIAL_STATE = {
    users: [],
    loading: false,
    error: false,
    errorMessage: "",
    creating: false
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_USER_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
                errorMessage: ""
            };

        case GET_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                users: action.payload
            };

        case GET_USER_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
                errorMessage: action.error
            };

        case CREATE_USER_REQUEST:
            return {
                ...state,
                creating: true
            };

        case CREATE_USER_SUCCESS:
            return {
                ...state,
                creating: false
            };

        case CREATE_USER_ERROR:
            return {
                ...state,
                creating: false,
                error: true,
                errorMessage: action.error
            };

        default:
            return state;
    }
};

export default userReducer;
