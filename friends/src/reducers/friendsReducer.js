import { FRIENDS } from "../actions";

const initialState = {
    friends: [],
}

export const friendsReducer = (state = initialState, action) => {
    switch(action.type) {
        case (FRIENDS):
            return action.payload;  
        default:
            return state;
    }
};