import {
    CREATE_NEW_POST_FAIL,
    CREATE_NEW_POST_LOADING,
    CREATE_NEW_POST_SUCCESS,
    DELETE_POST_FAIL,
    DELETE_POST_LOADING,
    DELETE_POST_SUCCESS,
    GET_LIST_COMMENTS_FAIL,
    GET_LIST_COMMENTS_LOADING,
    GET_LIST_COMMENTS_SUCCESS,
    GET_LIST_POSTS_FAIL,
    GET_LIST_POSTS_LOADING,
    GET_LIST_POSTS_SUCCESS,
    GET_MY_POSTS_FAIL,
    GET_MY_POSTS_LOADING,
    GET_MY_POSTS_SUCCESS
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
         * GET_LIST_COMMENTS
         */
        case GET_LIST_COMMENTS_LOADING:
            return {
                ...state,
                getListComments: {
                    ...state.getListComments,
                    loading: true,
                    error: null,
                },
            };

        case GET_LIST_COMMENTS_SUCCESS:
            return {
                ...state,
                getListComments: {
                    ...state.getListComments,
                    loading: false,
                    data: payload,
                    error: null,
                },
            };

        case GET_LIST_COMMENTS_FAIL:
            return {
                ...state,
                getListComments: {
                    ...state.getListComments,
                    loading: false,
                    error: payload,
                },
            };


        /**
         * GET_MY_POSTS
         */
        case GET_MY_POSTS_LOADING:
            return {
                ...state,
                getMyPosts: {
                    ...state.getMyPosts,
                    loading: true,
                    error: null,
                },
            };

        case GET_MY_POSTS_SUCCESS:
            return {
                ...state,
                getMyPosts: {
                    ...state.getMyPosts,
                    loading: false,
                    data: payload,
                    error: null,
                },
            };

        case GET_MY_POSTS_FAIL:
            return {
                ...state,
                getMyPosts: {
                    ...state.getMyPosts,
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

        /**
         * DELETE_POST
         */
        case DELETE_POST_LOADING: {
            return {
                ...state,
                deletePost: {
                    ...state.deletePost,
                    loading: true,
                    error: null,
                },
            };
        }

        case DELETE_POST_SUCCESS: {
            return {
                ...state,
                deletePost: {
                    ...state.deletePost,
                    loading: false,
                    error: null,
                    data: payload
                },
            };
        }

        case DELETE_POST_FAIL: {
            return {
                ...state,
                deletePost: {
                    ...state.deletePost,
                    loading: false,
                    error: payload,
                },
            };
        }

        default:
            return state;
    }
};

export default postsReducer;