import React from 'react';

const User = ({user, getPosts}) => {
    const {id, name, username, email} = user;
    return (
        <div>
            <div>
                Id: {id}
            </div>
            <div>
                Name: {name}
            </div>
            <div>
                Username: {username}
            </div>
            <div>
                Email: {email}
            </div>
            <button onClick={() => getPosts(id)}>Posts details</button>
            <hr/>

        </div>
    );
};

export default User;