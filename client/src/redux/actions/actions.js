import axios from "axios";

import {
    GET_COUNTRIES,
    GET_ACTIVITIES,
    CREATE_ACTIVITY,
    ERROR,
    GET_ALL_COUNTRIES,
    SELECT_COUNTRY,
    DESELECT_COUNTRY,
    CLEANER_ALL,
    ACCESS,
    LOGOUT,
    GET_COUNTRY,
} from '../actions/actionsTypes'

export const getCountries = (
    name,
    atributo,
    continents,
    order,
    page,
    size,
    activity
) => {
    const endpoint = "http://localhost:3001/countries?";
    return async function (dispatch) {
        try {
            const { data } = await axios.get(
                `${endpoint}name=${name}&atributo=${atributo}&continents=${continents}&order=${order}&page=${page}&size=${size}&activity=${activity}`
            );
            return dispatch({
                type: GET_COUNTRIES,
                payload: data.rows,
                count: data.count,
            });
        } catch (error) {
            return dispatch({
                type: GET_COUNTRIES,
                payload: [],
                count: 0,
                
            });
        }
    };
};

export const getActivities = (name) => {
    const endpoint = "http://localhost:3001/activities?";
    return async function (dispatch) {
        try {
            const { data } = await axios.get(`${endpoint}name=${name}`);
            return dispatch({
                type: GET_ACTIVITIES,
                payload: data,
            });
        } catch (error) {
            return dispatch({
                type: ERROR,
                payload: error.message,
            });
        }
    };
};


export const postActivity = (activity) => {
    const endpoint = "http://localhost:3001/activities";
    return async function (dispatch) {
        try {
            const response = await axios.post(endpoint, activity);
            return dispatch({
                type: CREATE_ACTIVITY,
                payload: response,
            });
        } catch (error) {
            return dispatch({
                type: ERROR,
                pacyload: error.message,
            });
        }
    };
};

export const getAllCountries = (name) => {
    const endpoint = "http://localhost:3001/all?";
    return async function (dispatch) {
        try {
            const { data } = await axios.get(`${endpoint}name=${name}`);
            return dispatch({
                type: GET_ALL_COUNTRIES,
                payload: data.rows,
                countAll: data.count,
            });
        } catch (error) {
            return dispatch({
                type: GET_ALL_COUNTRIES,
                payload: [],
                countAll: 0,
            });
        }
    };
};

export const selectCountry = (country) => {
    return function (dispatch) {
        try {
            return dispatch({
                type: SELECT_COUNTRY,
                payload: country,
            });
        } catch (error) {
            return dispatch({
                type: ERROR,
                payload: error.message,
            });
        }
    };
};

export const deselectCountry = (country) => {
    return function (dispatch) {
        try {
            return dispatch({
                type: DESELECT_COUNTRY,
                payload: country,
            });
        } catch (error) {
            return dispatch({
                type: ERROR,
                payload: error.message,
            });
        }
    };
};

export const cleanerAll = () => {
    return function (dispatch) {
        try {
            return dispatch({
                type: CLEANER_ALL
            });
        } catch (error) {
            return dispatch({
                type: ERROR,
                payload: error.message,
            });
        }
    };
};

export const getAccess = () => {
    return function (dispatch) {
        try {
            return dispatch({
                type: ACCESS
            });
        } catch (error) {
            return dispatch({
                type: ERROR,
                payload: error.message,
            });
        }
    };
};

export const getLogout = () => {
    return function (dispatch) {
        try {
            return dispatch({
                type: LOGOUT
            });
        } catch (error) {
            return dispatch({
                type: ERROR,
                payload: error.message,
            });
        }
    };
};

export const getCountry = (idCountry) => {
    return async function (dispatch) {
        try {
            const { data } = await axios.get(`http://localhost:3001/${idCountry}`);
            return dispatch({
                type: GET_COUNTRY,
                payload: data,
            });
        } catch (error) {
            return dispatch({
                type: ERROR,
                payload: error.message,
            });
        }
    };
};