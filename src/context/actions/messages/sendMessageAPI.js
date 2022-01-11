import {
    SEND_MESS_SUCCESS,
    SEND_MESS_FAIL
} from "../../../constants/actionTypes"

import axiosInstance from "../../../helpers/axiosInstance";

const sendMessageAPI = (data) => (dispatch) => {

    let requestPayload;
    if(data.chatId){
        requestPayload = {
            receivedId: data.receivedId,
            content: data.content,
            chatId: data.chatId,
            type: 'PRIVATE_CHAT'
        };
    } else {
        requestPayload = {
            receivedId: data.receivedId,
            content: data.content,
            type: 'PRIVATE_CHAT'
        };
    }
    // console.log("data send" + JSON.stringify(data));
    // console.log("data send 1" + JSON.stringify(requestPayload));
    var test;
    axiosInstance.post('/chats/send',requestPayload ).then((res) => {
        // let temp = JSON.parse(res.request._response).userIdList
        // let resData = res.json();
        // let data = resData.data;
        console.log( "datasend >>>>>>" + JSON.stringify(res.data.data));
        // console.log("id api về>>>>>>>>" + res.data.data.chat._id );
        test =  res.data.data.chat._id;
        
        
        dispatch({
            type: SEND_MESS_SUCCESS,
            payload: res.data.data 
            
        });
        return res.data.data.chat._id;
    }).catch((err) => {
        console.log('send chats error -->', err.response);
        dispatch({
            type: SEND_MESS_FAIL,
            payload: err.response
                ? err.response.data
                : { error: 'No Internet, try again !' },
        });
    })
    // console.log("ID api>>>>>>>>>>" + test);
    return test;
}

export default sendMessageAPI;