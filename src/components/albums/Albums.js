import React from 'react';

const Albums = ({album}) => {
    const {userId, id, title} = album;
    return (
        <div>
            <div>UserId: {userId}</div>
            <div>Id: {id}</div>
            <div>Title: {title}</div>
            <hr/>
        </div>
    );
};

export default Albums;