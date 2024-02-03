import axios from 'axios';
import {
    GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_ERROR,
    CREATE_USER_REQUEST, CREATE_USER_SUCCESS, CREATE_USER_ERROR,
    // EDIT_USER_REQUEST, EDIT_USER_SUCCESS, EDIT_USER_ERROR,
    DELETE_USER_REQUEST, DELETE_USER_SUCCESS, DELETE_USER_ERROR
} from "./types";


// Get user
export const fetchAllUsers = () => {
    return async (dispatch, getState) => {
        dispatch(getUserRequest());
        try {
            const { data } = await axios.get("http://localhost:8080/user/all");
            dispatch(getUserSuccess(data));
        } catch (error) {
            console.log(error);
            dispatch(getUserError(error.message || 'An error occurred while fetching users.'));
        }
    }
};


export const getUserRequest = () => {
    return {
        type: GET_USER_REQUEST,
    };
};

export const getUserSuccess = (data) => {
    return {
        type: GET_USER_SUCCESS,
        payload: data
    };
};

export const getUserError = (error) => {
    return {
        type: GET_USER_ERROR,
        error: error
    };
};

// Create user
export const createUser = (user) => {
    return async (dispatch, getState) => {
        dispatch(createUserRequest());
        try {
            const { data } = await axios.post("http://localhost:8080/user/create-user", user);
            dispatch(createUserSuccess(data));
            dispatch(fetchAllUsers());
        } catch (error) {
            console.log(error);
            dispatch(createUserError(error.message || 'An error occurred while fetching users.'));
        }
    }
};


export const createUserRequest = () => {
    return {
        type: CREATE_USER_REQUEST,
    };
};

export const createUserSuccess = () => {
    return {
        type: CREATE_USER_SUCCESS
    };
}

export const createUserError = (error) => {
    return {
        type: CREATE_USER_ERROR,
        error: error
    };
};

// Delete user
export const deleteUser = (id) => {
    return async (dispatch, getState) => {
        dispatch(deleteUserRequest());
        try {
            await axios.get(`http://localhost:8080/user/delete-user/${id}`);
            dispatch(deleteUserSuccess());
            dispatch(fetchAllUsers());
        } catch (error) {
            console.log(error);
            dispatch(deleteUserError(error.message || 'An error occurred while fetching users.'));
        }
    }
};


export const deleteUserRequest = () => {
    return {
        type: DELETE_USER_REQUEST,
    };
};

export const deleteUserSuccess = () => {
    return {
        type: DELETE_USER_SUCCESS
    };
}

export const deleteUserError = (error) => {
    return {
        type: DELETE_USER_ERROR,
        error: error
    };
};