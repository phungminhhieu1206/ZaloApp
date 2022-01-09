import {
    GET_LIST_POST_FAIL,
    GET_LIST_POST_LOADING,
    GET_LIST_POST_SUCCESS
} from "../../../constants/actionTypes"
import axiosInstance from "../../../helpers/axiosInstance";

const getListPosts = () => (dispatch) => {
    dispatch({
        type: GET_LIST_POST_LOADING,
    });
    axiosInstance.get('/posts/list').then((res) => {
        let temp = JSON.parse(res.request._response).data;
        // console.log('res list aaaa: >>>', JSON.parse(res.request._response).data);
        
        dispatch({
            type: GET_LIST_POST_SUCCESS,
            payload: temp
        });
    }).catch((err) => {
        console.log('list posts error -->', err.response);
        dispatch({
            type: GET_LIST_POST_FAIL,
            payload: err.response
                ? err.response.data
                : { error: 'No Internet, try again !' },
        });
    })
}

export default getListPosts;