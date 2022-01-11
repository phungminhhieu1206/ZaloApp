import {
    CREATE_COMMENT_FAIL,
    CREATE_COMMENT_LOADING,
    CREATE_COMMENT_SUCCESS,
} from "../../../constants/actionTypes"
import axiosInstance from "../../../helpers/axiosInstance";

const createComment = ({ postId: postId, contentComment: content }) => (dispatch) => (onSuccess) => {
    console.log('postIdddddddddddddddd of action:>>>', postId);

    const requestPayload = {
        content: content,
    };

    dispatch({
        type: CREATE_COMMENT_LOADING,
    });
    axiosInstance.post(`/postComment/create/${postId}`, requestPayload).then((res) => {

        console.log('create comment res: >>>', res);

        // dispatch({
        //     type: CREATE_COMMENT_SUCCESS,
        //     payload: res.data.data
        // });

        onSuccess();
    }).catch((err) => {
        console.log('create comments error -->', err.response);
        // dispatch({
        //     type: CREATE_COMMENT_FAIL,
        //     payload: err.response
        //         ? err.response.data
        //         : { error: 'No Internet, try again !' },
        // });
    })
}

export default createComment;