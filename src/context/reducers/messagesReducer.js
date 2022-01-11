import {
    GET_CHAT_LIST_LOADING,
    GET_CHAT_LIST_SUCCESS,
    GET_CHAT_LIST_FAIL,
    GET_CONTENT_MESS_LOADING,
    GET_CONTENT_MESS_SUCCESS,
    GET_CONTENT_MESS_FAIL,
    SEND_MESS_SUCCESS,
    DELETE_CACHE_MESS
} from '../../constants/actionTypes';

const messagesReducer = (state, { type, payload }) => {
    switch (type) {
        case GET_CHAT_LIST_LOADING:
            return {
                ...state,
                getListUserChats: {
                    ...state.getListUserChats,
                    loading: true,
                    error: null,
                },
            };

        case GET_CHAT_LIST_SUCCESS:
            return {
                ...state,
                getListUserChats: {
                    ...state.getListUserChats,
                    loading: false,
                    data: payload,
                    error: null,
                },
            };

        case GET_CHAT_LIST_FAIL:
            return {
                ...state,
                getListUserChats: {
                    ...state.getListUserChats,
                    loading: false,
                    error: payload,
                },
            };    

        case GET_CONTENT_MESS_LOADING:
            return {
                ...state,
                getContentMess: {
                    ...state.getContentMess,
                    loading: true,
                    error: null,
                },
            };
    
        case GET_CONTENT_MESS_SUCCESS:
            return {
                ...state,
                getContentMess: {
                    ...state.getContentMess,
                    loading: false,
                    data: payload,
                    error: null,
                },
            };

        case GET_CONTENT_MESS_FAIL:
        return {
            ...state,
            getContentMess: {
                ...state.getContentMess,
                loading: false,
                error: payload,
            },
        };  

        case SEND_MESS_SUCCESS:
            let updatedAllChats = [...state.getContentMess.data];
            updatedAllChats = updatedAllChats.concat(payload)
            return {
                ...state,
                getContentMess: {
                    ...state.getContentMess,
                    loading: false,
                    data: updatedAllChats,
                    error: null,
                },
            };
        default:
            return state;
    }
};

export default messagesReducer;