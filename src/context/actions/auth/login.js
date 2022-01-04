import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    LOGIN_FAIL,
    LOGIN_LOADING,
    LOGIN_SUCCESS
} from '../../../constants/actionTypes';
import axiosInstance from '../../../helpers/axiosInstance';

const login = (form) => (dispatch) => {
    const requestPayload = {
        phonenumber: form.phoneNumber,
        password: form.password,
    };

    dispatch({
        type: LOGIN_LOADING,
    });
    axiosInstance.post('/users/login', requestPayload).then((res) => {
        console.log('res login from server ----->', res.data);
        AsyncStorage.setItem('token', res.data.token);
        AsyncStorage.setItem('user', JSON.stringify(res.data.data));
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data,
        });
    }).catch((err) => {
        console.log('err login --> ', err.response.data);
        dispatch({
            type: LOGIN_FAIL,
            payload: (err.response && err.response.data.message === 'Username or password incorrect')
                ? err.response.data
                : { error: 'No Internet, try again !' },
        });
    });
};

export default login;