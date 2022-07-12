import React from 'react';

const Posts = ({posts}) => {
    const {userId, id, title, body} = posts;
    return (
        <div>
            <br/>
            <hr/>
            <div>UserId: {userId}</div>
            <div>Id: {id}</div>
            <div>Title: {title}</div>
            <div>Body: {body}</div>
            <hr/>
            <br/>
        </div>
    );
};

export default Posts;