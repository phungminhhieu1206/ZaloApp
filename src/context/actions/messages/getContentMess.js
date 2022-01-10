import {
    GET_CONTENT_MESS_LOADING,
    GET_CONTENT_MESS_SUCCESS,
    GET_CONTENT_MESS_FAIL
} from "../../../constants/actionTypes"

import axiosInstance from "../../../helpers/axiosInstance";

const getContentMess = (idChat) => (dispatch) => {
    dispatch({
        type: GET_CONTENT_MESS_LOADING,
    });
    axiosInstance.get(`/chats/getMessages/${idChat}`).then((res) => {
        // console.log(`/chats/getMessages/${idChat}`);
        // http://localhost:8000/api/v1/chats/getMessages/61c80c87ca53644cbcdbeafc


        let temp = JSON.parse(res.request._response)["data"];
        // let resData = res.json();  JSON.stringify(res.data.data) 
        // let data = resData.data;
        // const array = Object.keys(temp);
        // console.log( "Mess type >>>>>>" + temp[0].content);
        // console.log( "Mess type111111111111 >>>>>>" + typeof(temp));
        // console.log( "Mess >>>>>>" + typeof(temp) );
        dispatch({
            type: GET_CONTENT_MESS_SUCCESS,
            payload: res.data.data 
        });
    }).catch((err) => {
        console.log('content messages error -->', err.response);
        dispatch({
            type: GET_CONTENT_MESS_FAIL,
            payload: err.response
                ? err.response.data
                : { error: 'No Internet, try again !' },
        });
    })
}

export default getContentMess;