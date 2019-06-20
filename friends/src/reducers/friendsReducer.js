import * as types from "../actions";

const initialState = {
    friends: [],
    fetchingFriends: false,
    friendsFetched: false,
    addingFriend: false,
    friendsSaved: false,
    savingFriends: false,
    error: null,
}

export const friendsReducer = (state = initialState, action) => {
    switch(action.type) {
        case (types.FETCHING_FREINDS_START):
            return {...state, fetchingFriends: true }; 
        case (types.FETCHING_FREINDS_SUCCESS):
            return {...state, fetchingFriends: false, friends: action.payload };
        case (types.FETCHING_FRIENDS_FAILURE): 
            return {...state, fetchingFriends: false, error: action.payload};
        case (types.ADD_FRIEND_START):
            return {...state, addingFriend: true };
        case (types.ADD_FRIEND_SUCCESS):
            return {...state, addingFriend: false, friends: action.payload };
        case (types.ADD_FRIEND_FAILURE):
            return {...state, addingFriend: false, error: action.payload };
        default:
            return state;
    }
};