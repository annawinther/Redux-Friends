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
        return (
            <div>
                <FriendList {...this.props} />
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        friends: state.friendsReducer.friends,
    }
}

export default connect(
    mapStateToProps,
    { getFriends }
)(FriendListView);