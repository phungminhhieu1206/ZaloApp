import {
    GET_LIST_CONTACTS_FAIL,
    GET_LIST_CONTACTS_LOADING,
    GET_LIST_CONTACTS_SUCCESS
} from "../../../constants/actionTypes"
import axiosInstance from "../../../helpers/axiosInstance";

const getListContacts = () => (dispatch) => {
    dispatch({
        type: GET_LIST_CONTACTS_LOADING,
    });
    axiosInstance.post('/friends/list', {}).then((res) => {
        let temp = JSON.parse(res.request._response).data.friends
        // console.log('list user --->', temp);
        
        dispatch({
            type: GET_LIST_CONTACTS_SUCCESS,
            payload: temp 
            /**
             * Để ý dữ liệu payload ở đây truyền vào reducer phải giống với định dạng của data initialState
             */
        });
    }).catch((err) => {
        console.log('list user error -->', err.response);
        dispatch({
            type: GET_LIST_CONTACTS_FAIL,
            payload: err.response
                ? err.response.data
                : { error: 'No Internet, try again !' },
        });
    })
}

export default getListContacts;