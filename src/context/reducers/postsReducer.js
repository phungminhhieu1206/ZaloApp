import {
    GET_LIST_POSTS_FAIL,
    GET_LIST_POSTS_LOADING,
    GET_LIST_POSTS_SUCCESS
} from '../../constants/actionTypes';

const postsReducer = (state, { type, payload }) => {
    switch (type) {
        case GET_LIST_POSTS_LOADING:
            return {
                ...state,
                getListPosts: {
                    ...state.getListPosts,
                    loading: true,
                    error: null,
                },
            };

        case GET_LIST_POSTS_SUCCESS:
            return {
                ...state,
                getListPosts: {
                    ...state.getListPosts,
                    loading: false,
                    data: payload,
                    error: null,
                },
            };

        case GET_LIST_POSTS_FAIL:
            return {
                ...state,
                getListPosts: {
                    ...state.getListPosts,
                    loading: false,
                    error: payload,
                },
            };    

        default:
            return state;
    }
};

export default postsReducer;