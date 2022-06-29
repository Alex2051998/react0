import React from 'react';

const User = ({user, userDetails}) => {
    const {id, name} = user;
    return (
        <div>
            {id} -- {name} -- <button onClick={()=> userDetails(user)}>DETAILS</button>
        </div>
    );
};

export default User;