import React from 'react';

const Todos = ({todo}) => {
    const {userId, id, title, completed} = todo;
    return (
        <div>
            <div>UserId: {userId}</div>
            <div>Id: {id}</div>
            <div>Title: {title}</div>
            <div>Completed: {completed}</div>
            <hr/>
        </div>
    );
};

export default Todos;