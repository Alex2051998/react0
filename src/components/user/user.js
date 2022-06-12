import React from 'react';

const User = ({user, getDetails}) => {
    const {id, name, username, email} = user;
    return (
        <div>
            {id} {name} {username} {email}
            <button onClick={() => getDetails(id)}>details</button>
        </div>
    );
};

export default User;