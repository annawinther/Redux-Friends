import axios from 'axios';
import axiosImproved from '../axios';


//ACTION TYPES
export const FRIENDS = "FRIENDS"
export const ADD_FRIEND = "ADD_FRIEND"


//ACTION CREATORS

export function addFriend(friends) {
    return {
        type: ADD_FRIEND,
        payload: friends,
    }
}

export const fetchFriends = () => dispatch => {
    axiosImproved().get('http://localhost:5000/api/friends')
        .then(res => {
            dispatch({ type: ADD_FRIEND, payload: res.data });
        })
        .catch(err => {
            console.log(err.message);
        })
}



export const login = (username, password) => (dispatch) => {
    const credentials = { username, password };

    axios.post('http://localhost:5000/api/login', credentials)
        .then(res => {
            localStorage.getItem('token', res.data.token)
        })
        .catch(err => {
            console.log("Auth failed")
        })
};