import {
    GET_CHAT_LIST_LOADING,
    GET_CHAT_LIST_SUCCESS,
    GET_CHAT_LIST_FAIL
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

        default:
            return state;
    }
};

export default messagesReducer;