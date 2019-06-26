import axios from 'axios';
import axiosImproved from '../axios';


//ACTION TYPES
export const FETCHING_FREINDS_START = "FETCHING_FREINDS";
export const FETCHING_FREINDS_SUCCESS = "FETCHING_FREINDS_SUCCESS";
export const FETCHING_FRIENDS_FAILURE = "FETCHING_FRIENDS_FAILURE";

export const ADD_FRIEND_START = "ADD_FRIEND_START";
export const ADD_FRIEND_SUCCESS = "ADD_FRIEND_SUCCESS";
export const ADD_FRIEND_FAILURE = "ADD_FRIEND_FAILURE";


//ACTION CREATORS

export const getFriends = () => dispatch => {
    dispatch({ type: FETCHING_FREINDS_START });
    axiosImproved().get('http://localhost:5000/api/friends')
        .then(res => {
            dispatch({ type: FETCHING_FREINDS_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: FETCHING_FRIENDS_FAILURE, paylod: err });
        })
}

export const addFriend = (friend) => dispatch => {
    dispatch({ type: ADD_FRIEND_START });
    axios.post('http://localhost:5000/api/friends', friend)
        .then(res => {
            dispatch({ type: ADD_FRIEND_SUCCESS, payload: res.data});
        })
        .catch(err => {
            dispatch({ type: ADD_FRIEND_FAILURE, payload: err });
        })
}

export const login = (username, password) => (dispatch) => {
    const credentials = { username, password };

    axios.post('http://localhost:5000/api/login', credentials)
        .then(res => {
            localStorage.setItem('token', res.data.payload)
        })
        .catch(err => {
            console.log("Auth failed")
        })
};