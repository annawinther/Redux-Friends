import React from 'react';

const Friend = props => {
    return (
        <div>
            <h3>{props.friends.name}</h3>
            <h3>{props.friends.age}</h3>
            <h3>{props.friends.email}</h3>
        </div>
    )
}

export default Friend;