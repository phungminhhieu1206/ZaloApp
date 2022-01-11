import {
    GET_MY_POSTS_FAIL,
    GET_MY_POSTS_LOADING,
    GET_MY_POSTS_SUCCESS
} from "../../../constants/actionTypes"
import axiosInstance from "../../../helpers/axiosInstance";

const getMyPosts = (_id) => (dispatch) => {
    console.log('iiiiiiiiiiiiiiiiii, ', _id);
    dispatch({
        type: GET_MY_POSTS_LOADING,
    });
    axiosInstance.get('/posts/list?userId=' + _id).then((res) => {

        // console.log('res bbbbbbbbbbbbb: >>>', res);
        let temp = JSON.parse(res.request._response).data;
        // console.log('aaaaaaaaaaaaaaaaa: >>>', JSON.parse(res.request._response).data);
        
        dispatch({
            type: GET_MY_POSTS_SUCCESS,
            payload: temp
        });
    }).catch((err) => {
        console.log('list my posts error -->', err.response);
        dispatch({
            type: GET_MY_POSTS_FAIL,
            payload: err.response
                ? err.response.data
                : { error: 'No Internet, try again !' },
        });
    })
}

export default getMyPosts;