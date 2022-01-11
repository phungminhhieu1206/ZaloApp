import {
    ADD_FRIEND_BY_ID_FAIL,
    ADD_FRIEND_BY_ID_LOADING,
    ADD_FRIEND_BY_ID_SUCCESS,
    CLEAR_ADD_FRIEND_BY_ID_STATE,
    CLEAR_GET_CONTACT_BY_PHONE_STATE,
    GET_CONTACT_BY_PHONE_FAIL,
    GET_CONTACT_BY_PHONE_LOADING,
    GET_CONTACT_BY_PHONE_SUCCESS,
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

        /**
         * GET_LIST_CONTACTS
         */
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

        /**
         * GET_FRIEND_REQUESTS
         */
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

        /**
         * SET_ACCEPT_REQUEST
         */
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

        /**
         * ADD_FRIEND_BY_ID
         */
        case ADD_FRIEND_BY_ID_LOADING:
            return {
                ...state,
                addFriendById: {
                    ...state.addFriendById,
                    loading: true,
                    error: null,
                },
            };

        case ADD_FRIEND_BY_ID_SUCCESS:
            return {
                ...state,
                addFriendById: {
                    ...state.addFriendById,
                    loading: false,
                    dataAdd: payload,
                    error: null,
                    isSuccess: true
                },
            };

        case ADD_FRIEND_BY_ID_FAIL:
            return {
                ...state,
                addFriendById: {
                    ...state.addFriendById,
                    loading: false,
                    error: payload,
                },
            };

            case CLEAR_ADD_FRIEND_BY_ID_STATE:
                return {
                    ...state,
                    addFriendById: {
                        ...state.addFriendById,
                        loading: false,
                        error: null,
                        dataAdd: null
                    },
                };

        /**
         * GET_CONTACT_BY_PHONE
         */
        case GET_CONTACT_BY_PHONE_LOADING:
            return {
                ...state,
                getContactByPhone: {
                    ...state.getContactByPhone,
                    loading: true,
                    error: null,
                },
            };

        case GET_CONTACT_BY_PHONE_SUCCESS:
            return {
                ...state,
                getContactByPhone: {
                    ...state.getContactByPhone,
                    loading: false,
                    data: payload,
                    error: null,
                },
            };

        case GET_CONTACT_BY_PHONE_FAIL:
            return {
                ...state,
                getContactByPhone: {
                    ...state.getContactByPhone,
                    loading: false,
                    error: payload,
                },
            };

            /**
             * CLEAR_GET_CONTACT_BY_PHONE_STATE
             */
        case CLEAR_GET_CONTACT_BY_PHONE_STATE:
            return {
                ...state,
                getContactByPhone: {
                    ...state.getContactByPhone,
                    loading: false,
                    error: null,
                    data: null
                },
            };

        default:
            return state;
    }
};

export default contactsReducer;