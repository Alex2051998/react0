import React, {Component} from 'react';

import {PostsApiService} from "../../services/posts.service";
import Post from "../post/Post";

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {posts: []};
    }
    componentDidMount() {
        this.postsApiService = new PostsApiService();
        this.postsApiService.getPosts().then(value => this.setState({posts:value}));
        console.log(this.state)
    }


    render() {
        return (
            <div>
                {this.state.posts.map(post => <Post key={post.id} post={post}/>)}
            </div>
        );
    }
}

export default Posts;