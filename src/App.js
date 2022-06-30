import './App.css';

import Users from "./components/users/Users";
import {useState} from "react";
import Posts from "./components/posts/Posts";
import {postsService} from "./services/Posts.service";

function App() {
    const [posts, setPosts] = useState([]);

    const getPosts = (id) => {
      postsService.getById(id).then(({data}) => setPosts(data));
      console.log(posts);
    }
    return (
        <div className={'block'}>
            <Users getPosts={getPosts}/>
            <Posts posts={posts}/>
        </div>
    );
}

export default App;
