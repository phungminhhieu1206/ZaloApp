import {
    DELETE_POST_FAIL,
    DELETE_POST_LOADING,
    DELETE_POST_SUCCESS
} from '../../../constants/actionTypes';
import axiosInstance from '../../../helpers/axiosInstance';

const deletePost = (postId) => (dispatch) => (onSuccess) => {

    console.log("postId delete: >>>>", postId);
    dispatch({
        type: DELETE_POST_LOADING,
    });
    axiosInstance.get(`/posts/delete/${postId}`).then((res) => {
        console.log('res delete post ---> ', res.data);

        dispatch({
            type: DELETE_POST_SUCCESS,
            payload: postId,
        });

        onSuccess();
    }).catch((err) => {
        console.log('err --> ', err.response.data);
        dispatch({
            type: DELETE_POST_FAIL,
            payload: err.response
                ? err.response.data
                : { error: 'Something went wrong, try again' },
        });
    });
};

export default deletePost;