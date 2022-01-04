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
const registerAction = ({
    phoneNumber: phonenumber,
    password,
    userName: username,
}) => (dispatch) => {
    dispatch({
        type: REGISTER_LOADING,
    });
    axiosInstance // đã chứa url base, axios ~ http request
        .post('users/register', {
            phonenumber,
            password,
            username,
        })
        .then((res) => { // response trả về từ server sau lệnh post của axios
            console.log("register success ----> ", res.data);
            // dispatch({
            //     type: REGISTER_SUCCESS,
            //     payload: res.data,
            // });

            // onSuccess(res.data);
        })
        .catch((err) => { 
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