import React, {Component} from 'react';

class Post extends Component {

    constructor(props) {
        super(props);
        this.post = this.props.post
    }
    render() {
        return (
            <div>
                {this.post.id} -- {this.post.title}
            </div>
        );
    }
}

export default Post;