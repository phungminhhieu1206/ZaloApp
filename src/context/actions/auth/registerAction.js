import {
    CLEAR_AUTH_STATE,
    REGISTER_FAIL,
    REGISTER_LOADING,
    REGISTER_SUCCESS
} from "../../../constants/actionTypes";
import axiosInstance from '../../../helpers/axiosInstance';

// export const clearAuthState = () => (dispatch) => {
//     dispatch({
//         type: CLEAR_AUTH_STATE,
//     });
// };

// action register
const registerAction = (form) => (dispatch) => {

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
    axiosInstance.post('users/register', requestPayload).then((res) => {
        console.log("register success ----> ", res.data);
        // dispatch({
        //     type: REGISTER_SUCCESS,
        //     payload: res.data,
        // });

        // onSuccess(res.data);
    }).catch((err) => {
        console.log("register error ----> ", err);
        // dispatch({
        //     type: REGISTER_FAIL,
        //     payload: err.response
        //         ? err.response.data // error của request post gửi từ server về
        //         : { error: 'Something went wrong, try again !' }, // server xảy ra sự cố, thử tắt internet xem kqua
        // });
    });
};

export default registerAction;