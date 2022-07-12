import React from 'react';
import {Link} from "react-router-dom";

const Comments = ({comment}) => {
    const {postId, id, name, email, body} = comment;
    return (
        <div>
            <div>PostId: {postId}</div>
            <div>Id: {id}</div>
            <div>Name: {name}</div>
            <div>Email: {email}</div>
            <div>Body: {body}</div>
            <Link to={postId.toString()}>GetPost</Link>
            <hr/>
        </div>
    );
};

export default Comments;