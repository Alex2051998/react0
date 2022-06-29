import React from 'react';

const UserDetails = ({user}) => {
    const {id, name, username, email} = user;
    return (
        <div>
            <div>{id}</div>
            <div>{name}</div>
            <div>{username}</div>
            <div>{email}</div>
        </div>
    );
};

export default UserDetails;