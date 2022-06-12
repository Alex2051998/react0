import Users from "./components/users/users";
import {postService} from "./services/postService";
import React, {useState} from "react";
import Posts from "./components/posts/posts";
// import Posts from "./components/posts/posts";

function App() {
    const [post, setPost] = useState(null);

    const getPostId = async (id) => {
        const {data} = await postService.getPostById(id);
        setPost(data);
    }
    return (
        <div>
            <Users getPostId={getPostId}/>
            <div>
                {post && <Posts key={post.id} post={post}/>}
            </div>
        </div>
    );
}

export default App;
