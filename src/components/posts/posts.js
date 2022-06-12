import React, {useEffect, useState} from 'react';
import {postService} from "../../services/postService";
import Post from "../post/post";

const Posts = ({post}) => {
    return (
        <div>
            {post.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export default Posts;