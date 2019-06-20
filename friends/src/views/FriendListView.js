import React from 'react';
import { connect }from 'react-redux';

import { getFriends } from "../actions";
import FriendList from '../components/FriendsList';

export class FriendListView extends React.Component{

    componentDidMount() {
        console.log('PROPS', this.props);
            this.props.getFriends();
    };

    render() {
        if (this.props.fetchingFriends){
            return (
                <div>
                    <h3>Fetching your friends, please wait...</h3>
                </div>
            )
        }
        if (this.props.error){
            return (
                <div>
                    <h1>{this.props.error}</h1>
                </div>
            )
        }

        return (
            <div>
                <FriendList 
                friends={this.props.friends}
                fetchingFriends={this.props.fetchingFriends}

                getFriends={this.props.getFriends}
                />
            </div>
        );
    }
};

const mapStateToProps = state => {
    console.log('state')
    console.log(state)
    return {
        friends: state.friendsReducer.friends,
        fetchingFriends: state.friendsReducer.fetchingFriends,
        // friendsFetched: state.friendsReducer.friendsFetched,
        // addingFriend: state.friendsReducer.addingFriend,
        // friendsSaved: state.friendsReducer.friendsSaved,
        // savingFriends: state.friendsReducer.savingFriends,
        error: state.friendsReducer.error,
    }
}

export default connect(
    mapStateToProps,
    { getFriends }
)(FriendListView);