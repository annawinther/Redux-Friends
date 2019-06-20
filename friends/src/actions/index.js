import axios from 'axios';

export const FRIENDS = "FRIENDS"



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