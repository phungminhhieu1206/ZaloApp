import {
    CLEAR_GET_CONTACT_BY_PHONE_STATE,
    GET_CONTACT_BY_PHONE_FAIL,
    GET_CONTACT_BY_PHONE_LOADING,
    GET_CONTACT_BY_PHONE_SUCCESS
} from "../../../constants/actionTypes"
import axiosInstance from "../../../helpers/axiosInstance";

export const clearGetContactByPhoneState = () => (dispatch) => {
    dispatch({
        type: CLEAR_GET_CONTACT_BY_PHONE_STATE,
    });
};

const getContactByPhone = (phone) => (dispatch) => {

    const requestPayload = {
        phoneNumber: phone
    };

    dispatch({
        type: GET_CONTACT_BY_PHONE_LOADING,
    });
    axiosInstance.post('/users/get-by-phoneNumber', requestPayload).then((res) => {
        // console.log('getContactByPhone --->', res);

        dispatch({
            type: GET_CONTACT_BY_PHONE_SUCCESS,
            payload: res.data.username
        });
    }).catch((err) => {
        console.log('getContactByPhone error -->', err.response);
        dispatch({
            type: GET_CONTACT_BY_PHONE_FAIL,
            payload: err.response
                ? err.response.data
                : { error: 'No Internet, try again !' },
        });
    })
}

export default getContactByPhone;