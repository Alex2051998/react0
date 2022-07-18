import React, {Component} from 'react';

import {CommentsApiService} from "../../services/comment.service";
import Comment from "../comment/Comment";

class Comments extends Component {

    constructor(props) {
        super(props);
        this.state = {comments:[]}
    }

    componentDidMount() {
        this.commentsApiService = new CommentsApiService();
        this.commentsApiService.getComments().then(value => this.setState({comments:value}));
    }

    render() {
        return (
            <div>
                {this.state.comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
            </div>
        );
    }
}

export default Comments;