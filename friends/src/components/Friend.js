import React from 'react';

const Friend = props => {
    return (
        <div>
            <h3>Name: {props.friend.name}</h3>
            <h3>Age: {props.friend.age}</h3>
            <h3>Email: {props.friend.email}</h3>
        </div>
    )
}

export default Friend;