import React from 'react';
import { connect }from 'react-redux';

import { getFriends } from "../actions";
import FriendList from '../components/FriendsList';

export class FriendListView extends React.Component{

    componentDidMount() {
        console.log('PROPS', this.props);
        if (this.props.FriendList.lenght === 0){
            this.props.getFriends();
        }
    };

    render() {
        if (this.props.getFriends){
            return (
                <div>
                    <h3>Fetching your firends, please wait...</h3>
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
                <FriendList {...this.props} />
            </div>
        );
    }
};

const mapStateToProps = state => {
    console.log(state)
    return {
        friends: state.friendsReducer.friends,
        getFriends: state.friendsReducer.getFriends,
        error: state.friendsReducer.error,
    }
}

export default connect(
    mapStateToProps,
    { getFriends }
)(FriendListView);