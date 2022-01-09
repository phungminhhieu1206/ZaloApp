import {
    SET_ACCEPT_REQUEST_FAIL,
    SET_ACCEPT_REQUEST_LOADING,
    SET_ACCEPT_REQUEST_SUCCESS
} from "../../../constants/actionTypes"
import axiosInstance from "../../../helpers/axiosInstance";

const setAcceptRequest = (_id) => (dispatch) => (onSuccess) => {

    const requestPayload = {
        user_id: _id,
        is_accept: "1",
    };

    dispatch({
        type: SET_ACCEPT_REQUEST_LOADING,
    });
    axiosInstance.post('/friends/set-accept', requestPayload).then((res) => {
        console.log('res --->', res);

        dispatch({
            type: SET_ACCEPT_REQUEST_SUCCESS,
            payload: res.data
        });

        onSuccess();
    }).catch((err) => {
        console.log('list user error -->', err.response);
        dispatch({
            type: SET_ACCEPT_REQUEST_FAIL,
            payload: err.response
                ? err.response.data
                : { error: 'No Internet, try again !' },
        });
    })
}

export default setAcceptRequest;