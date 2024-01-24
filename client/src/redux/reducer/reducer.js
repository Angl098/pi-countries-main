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

const initialState = {
    allCountries: [],
    allActivities: [],
    activities: [],
    count: 0,
    error: null,
    deselectCountries: [],
    countAll: 0,
    selectCountries: [],
    access: false,
    countryDetail: {},
};
const rooReducer = (state = initialState, { type, payload, count, countAll }) => {
    switch (type) {
        case GET_COUNTRIES:
            return {
                ...state,
                allCountries: payload,
                count: count
            };
        case GET_ACTIVITIES:
            return {
                ...state,
                allActivities: payload,
                activities: payload,
            };
        case CREATE_ACTIVITY:
            return {
                ...state,
                allActivities: [...state.allActivities, payload]
            };
        case ERROR:
            return {
                ...state,
                error: payload,
            };
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                deselectCountries: payload,
                countAll: countAll
            };
        case SELECT_COUNTRY:
            return {
                ...state,
                deselectCountries: [
                    ...state.deselectCountries.filter((country) => country.id !== payload.id),
                ],
                selectCountries: [...state.selectCountries, payload].sort((a, b) => {
                    if (a.name > b.name) {
                        return 1;
                    }
                    if (a.name < b.name) {
                        return -1;
                    } return 0;
                }),
            };
        case DESELECT_COUNTRY:
            return {
                ...state,
                selectCountries: [
                    ...state.selectCountries.filter((country) => country.id !== payload.id),
                ],
                deselectCountries: [...state.deselectCountries].some(
                    (country) => country.id === payload.id
                )
                    ? [...state.deselectCountries]
                    : [...state.deselectCountries, payload].sort((a, b) => {
                        if (a.nameCommon > b.nameCommon) {
                            return 1;
                        }
                        if (a.nameCommon < b.nameCommon) {
                            return -1;
                        }
                        return 0;
                    }),
            };
        case CLEANER_ALL:
            return {
                ...state,
                allCountries: [],
                allActivities: [],
                count: 0,
                error: null,
                deselectCountries: [],
                countAll: 0,
                selectCountries: [],
                countryDetail: {},
            };
        case ACCESS:
            return {
                ...state,
                access: true,
            };
        case LOGOUT:
            return {    
                ...state,
                access: false,
            };
        case GET_COUNTRY:
            return {
                ...state,
                countryDetail: payload,
            };
        default:
            return { ...state };
    }
};

export default rooReducer;
