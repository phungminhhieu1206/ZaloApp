import {
    CLEAR_LIST_COMMENTS_STATE,
    GET_LIST_COMMENTS_FAIL,
    GET_LIST_COMMENTS_LOADING,
    GET_LIST_COMMENTS_SUCCESS,
} from "../../../constants/actionTypes"
import axiosInstance from "../../../helpers/axiosInstance";

export const clearListCommentsState = () => (dispatch) => {
    dispatch({
        type: CLEAR_LIST_COMMENTS_STATE,
    });
};

const getListComments = (postId) => (dispatch) => {
    console.log('postIdddddddddddddddd of action:>>>', postId);
    dispatch({
        type: GET_LIST_COMMENTS_LOADING,
    });
    axiosInstance.get(`/postComment/list/${postId}`).then((res) => {

        console.log('res bbbbbbbbbbbbb: >>>', res.data.data);
        
        dispatch({
            type: GET_LIST_COMMENTS_SUCCESS,
            payload: res.data.data
        });
    }).catch((err) => {
        console.log('list comments error -->', err.response);
        dispatch({
            type: GET_LIST_COMMENTS_FAIL,
            payload: err.response
                ? err.response.data
                : { error: 'No Internet, try again !' },
        });
    })
}

export default getListComments;