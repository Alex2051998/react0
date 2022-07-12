import React, {useEffect, useState} from 'react';

import {commentsService} from "../../services/comments.service";
import Comments from "../../components/comments/Comments";
import {Outlet} from "react-router-dom";

const CommentsPage = () => {
    const [comments, setComments] = useState([]);

    useEffect(()=> {
        commentsService.getAll().then(({data}) => setComments(data))
    }, [])
    return (
        <div>
            <Outlet/>
            {comments.map(comment => <Comments key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default CommentsPage;