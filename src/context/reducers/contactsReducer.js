import {
    GET_FRIEND_REQUESTS_FAIL,
    GET_FRIEND_REQUESTS_LOADING,
    GET_FRIEND_REQUESTS_SUCCESS,
    GET_LIST_CONTACTS_FAIL,
    GET_LIST_CONTACTS_LOADING,
    GET_LIST_CONTACTS_SUCCESS,
    SET_ACCEPT_REQUEST_FAIL,
    SET_ACCEPT_REQUEST_LOADING,
    SET_ACCEPT_REQUEST_SUCCESS
} from '../../constants/actionTypes';

const contactsReducer = (state, { type, payload }) => {
    switch (type) {
        case GET_LIST_CONTACTS_LOADING:
            return {
                ...state,
                getListContacts: {
                    ...state.getListContacts,
                    loading: true,
                    error: null,
                },
            };

        case GET_LIST_CONTACTS_SUCCESS:
            return {
                ...state,
                getListContacts: {
                    ...state.getListContacts,
                    loading: false,
                    data: payload,
                    error: null,
                },
            };

        case GET_LIST_CONTACTS_FAIL:
            return {
                ...state,
                getListContacts: {
                    ...state.getListContacts,
                    loading: false,
                    error: payload,
                },
            };

        case GET_FRIEND_REQUESTS_LOADING:
            return {
                ...state,
                getFriendRequests: {
                    ...state.getFriendRequests,
                    loading: true,
                    error: null,
                },
            };

        case GET_FRIEND_REQUESTS_SUCCESS:
            return {
                ...state,
                getFriendRequests: {
                    ...state.getFriendRequests,
                    loading: false,
                    data: payload,
                    error: null,
                },
            };

        case GET_FRIEND_REQUESTS_FAIL:
            return {
                ...state,
                getFriendRequests: {
                    ...state.getFriendRequests,
                    loading: false,
                    error: payload,
                },
            };

        case SET_ACCEPT_REQUEST_LOADING:
            return {
                ...state,
                setAcceptRequest: {
                    ...state.setAcceptRequest,
                    loading: true,
                    error: null,
                },
            };

        case SET_ACCEPT_REQUEST_SUCCESS:
            return {
                ...state,
                setAcceptRequest: {
                    ...state.setAcceptRequest,
                    loading: false,
                    data: payload,
                    error: null,
                    isSuccess: true
                },
            };

        case SET_ACCEPT_REQUEST_FAIL:
            return {
                ...state,
                setAcceptRequest: {
                    ...state.setAcceptRequest,
                    loading: false,
                    error: payload,
                },
            };

        default:
            return state;
    }
};

export default contactsReducer;