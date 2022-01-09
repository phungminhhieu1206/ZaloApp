import {
    CREATE_NEW_POST_FAIL,
    CREATE_NEW_POST_LOADING,
    CREATE_NEW_POST_SUCCESS
} from '../../../constants/actionTypes';
import axiosInstance from '../../../helpers/axiosInstance';

const createNewPost = ({ described: described, listImagesUpload: listImagesUpload }) => (dispatch) => (onSuccess) => {

    // console.log("listImagesUpload action: >>>>", listImagesUpload);
    const requestPayload = {
        described: described || '',
        images: listImagesUpload,
    };
    console.log("requestPayload action: >>>>", requestPayload);

    // dispatch({
    //     type: CREATE_NEW_POST_LOADING,
    // });
    // axiosInstance.post('/posts/create', requestPayload).then((res) => {
    //     console.log('res create contact ---> ', res.data);

    //     dispatch({
    //         type: CREATE_NEW_POST_SUCCESS,
    //         payload: res.data,
    //     });

    //     onSuccess();
    // }).catch((err) => {
    //     console.log('err hieu --> ', err.response.data);
    //     dispatch({
    //         type: CREATE_NEW_POST_FAIL,
    //         payload: err.response
    //             ? err.response.data
    //             : { error: 'Something went wrong, try again' },
    //     });
    // });
};

export default createNewPost;