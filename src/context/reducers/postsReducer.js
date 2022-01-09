import {
    CREATE_NEW_POST_FAIL,
    CREATE_NEW_POST_LOADING,
    CREATE_NEW_POST_SUCCESS,
    GET_LIST_POSTS_FAIL,
    GET_LIST_POSTS_LOADING,
    GET_LIST_POSTS_SUCCESS
} from '../../constants/actionTypes';

const postsReducer = (state, { type, payload }) => {
    switch (type) {
        /**
         * GET_LIST_POSTS
         */
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


        /**
         * CREATE_NEW_POST
         */
        case CREATE_NEW_POST_LOADING:
            return {
                ...state,
                createNewPost: {
                    ...state.createNewPost,
                    loading: true,
                    error: null,
                },
            };

        case CREATE_NEW_POST_SUCCESS:
            return {
                ...state,
                createNewPost: {
                    ...state.createNewPost,
                    loading: false,
                    error: null,
                    data: payload,
                },

                // getContacts: {
                //     ...state.getContacts,
                //     loading: false,
                //     data: [payload, ...state.getContacts.data],
                //     error: null,
                // },
            };

        case CREATE_NEW_POST_FAIL:
            return {
                ...state,
                createNewPost: {
                    ...state.createNewPost,
                    loading: false,
                    error: payload,
                },
            };

        default:
            return state;
    }
};

export default postsReducer;