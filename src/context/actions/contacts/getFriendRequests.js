import { 
    GET_FRIEND_REQUESTS_FAIL, 
    GET_FRIEND_REQUESTS_LOADING, 
    GET_FRIEND_REQUESTS_SUCCESS 
} from "../../../constants/actionTypes"
import axiosInstance from "../../../helpers/axiosInstance";

const getFriendRequests = () => (dispatch) => {
    dispatch({
        type: GET_FRIEND_REQUESTS_LOADING,
    });
    axiosInstance.post('/friends/get-requested-friend', {}).then((res) => {
        let temp = JSON.parse(res.request._response).data.friends
        // console.log('list user --->', temp);
        
        dispatch({
            type: GET_FRIEND_REQUESTS_SUCCESS,
            payload: temp 
            /**
             * Để ý dữ liệu payload ở đây truyền vào reducer phải giống với định dạng của data initialState
             */
        });
    }).catch((err) => {
        console.log("list friend requests error: >>>", err.response);
        dispatch({
            type: GET_FRIEND_REQUESTS_FAIL,
            payload: err.response
                ? err.response.data
                : { error: 'No Internet, try again !' },
        });
    })
}

export default getFriendRequests;