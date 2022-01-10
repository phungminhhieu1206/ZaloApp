import {
    SEND_MESS_SUCCESS
} from "../../../constants/actionTypes"

import axiosInstance from "../../../helpers/axiosInstance";

const sendMessageAPI = (data) => (dispatch) => {

    const requestPayload = {
        receivedId: data.receivedId,
        content: data.content,
        chatId: data.chatId,
        type: 'PRIVATE_CHAT'
    };
    // console.log("data send" + JSON.stringify(data));
    // console.log("data send 1" + JSON.stringify(requestPayload));
    axiosInstance.post('/chats/send',requestPayload ).then((res) => {
        // let temp = JSON.parse(res.request._response).userIdList
        // let resData = res.json();
        // let data = resData.data;
        console.log( "datasend >>>>>>" + JSON.stringify(res.data.data));
        
        dispatch({
            type: SEND_MESS_SUCCESS,
            payload: res.data.data 
            
        });
    }).catch((err) => {
        console.log('send chats error -->', err.response);
        dispatch({
            type: GET_CHAT_LIST_FAIL,
            payload: err.response
                ? err.response.data
                : { error: 'No Internet, try again !' },
        });
    })
}

export default sendMessageAPI;