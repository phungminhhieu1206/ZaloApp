import {
    ADD_FRIEND_BY_ID_FAIL,
    ADD_FRIEND_BY_ID_LOADING,
    ADD_FRIEND_BY_ID_SUCCESS,
    CLEAR_ADD_FRIEND_BY_ID_STATE
} from "../../../constants/actionTypes"
import axiosInstance from "../../../helpers/axiosInstance";

export const clearAddFriendByIdState = () => (dispatch) => {
    dispatch({
        type: CLEAR_ADD_FRIEND_BY_ID_STATE,
    });
};

const addFriendById = (_id) => (dispatch) => {

    const requestPayload = {
        user_id: _id
    };

    dispatch({
        type: ADD_FRIEND_BY_ID_LOADING,
    });
    axiosInstance.post('/friends/set-request-friend', requestPayload).then((res) => {
        console.log('res --->', res);

        dispatch({
            type: ADD_FRIEND_BY_ID_SUCCESS,
            payload: res.data
        });
    }).catch((err) => {
        console.log('list user error -->', err.response);

        dispatch({
            type: ADD_FRIEND_BY_ID_FAIL,
            payload: err.response
                ? err.response.data
                : { error: 'No Internet, try again !' },
        });
    })
}

export default addFriendById;