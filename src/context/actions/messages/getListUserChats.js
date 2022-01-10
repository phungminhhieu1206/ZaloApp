import {
    GET_CHAT_LIST_LOADING,
    GET_CHAT_LIST_SUCCESS,
    GET_CHAT_LIST_FAIL
} from "../../../constants/actionTypes"

import axiosInstance from "../../../helpers/axiosInstance";

const getListUserChats = () => (dispatch) => {
    dispatch({
        type: GET_CHAT_LIST_LOADING,
    });
    axiosInstance.get('/chats/listUser').then((res) => {
        let temp = JSON.parse(res.request._response).userIdList
        // let resData = res.json();
        // let data = resData.data;
        // console.log( "list >>>>>>" + temp);
        
        dispatch({
            type: GET_CHAT_LIST_SUCCESS,
            payload: temp 
            /**
             * Để ý dữ liệu payload ở đây truyền vào reducer phải giống với định dạng của data initialState
             */
        });
    }).catch((err) => {
        console.log('list chats error -->', err.response);
        dispatch({
            type: GET_CHAT_LIST_FAIL,
            payload: err.response
                ? err.response.data
                : { error: 'No Internet, try again !' },
        });
    })
}

export default getListUserChats;