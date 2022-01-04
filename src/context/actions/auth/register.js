import {
    CLEAR_AUTH_STATE,
    REGISTER_FAIL,
    REGISTER_LOADING,
    REGISTER_SUCCESS
} from "../../../constants/actionTypes";
import axiosInstance from '../../../helpers/axiosInstance';

export const clearAuthState = () => (dispatch) => {
    dispatch({
        type: CLEAR_AUTH_STATE,
    });
};

// action register
const register = (form) => (dispatch) => (onSuccess) => {

    console.log('form --->', form);
    const requestPayload = {
        phonenumber: form.phoneNumber,
        password: form.password,
        username: form.userName,
    };
    console.log('requestPayload --->', requestPayload);

    dispatch({
        type: REGISTER_LOADING,
    });
    axiosInstance.post('/users/register', requestPayload).then((res) => {
        console.log("register feedback success ----> ", res.data.data);
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data.data,
        });

        onSuccess(res.data.data);
    }).catch((err) => {
        console.log("register feedback error ----> ", err.response.data.message);
        dispatch({
            type: REGISTER_FAIL,
            payload: (err.response && err.response.data.message === 'Phone number already exists')
                ? err.response.data // error của request post gửi từ server về
                : { error: 'No Internet, try again !' }, // server xảy ra sự cố, thử tắt internet xem kqua
        });
    });
};

export default register;