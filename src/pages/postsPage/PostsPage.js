import React, {useEffect, useState} from 'react';
import {postsService} from "../../services/posts.service";
import Posts from "../../components/posts/Posts";
import {useParams} from "react-router-dom";

const PostsPage = () => {
    const [posts, setPosts] = useState(null);

    const {postId} = useParams();
    console.log(postId);

    useEffect(()=>{
        postsService.getById(postId).then(({data}) => setPosts(data))
    },[postId])
    return (
        <div>
            {posts && <Posts key={posts.id} posts={posts}/>}
        </div>
    );
};

export default PostsPage;