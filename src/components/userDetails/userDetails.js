import React from 'react';

const UserDetails = ({user, getPostId}) => {
    const {id, name, username, email, phone, website} = user;
    return (
        <div>
            <div>
                {id}
            </div>
            <div>
                {name}
            </div>
            <div>
                {username}
            </div>
            <div>
                {email}
            </div>
            <div>
                {phone}
            </div>
            <div>
                {website}
            </div>
            <button onClick={() => getPostId(id)}>get Post</button>

        </div>
    );
};

export default UserDetails;