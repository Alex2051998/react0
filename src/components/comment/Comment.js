import React, {Component} from 'react';

class Comment extends Component {

    constructor(props) {
        super(props);
        this.comment = this.props.comment;
    }
    render() {
        return (
            <div>
                {this.comment.id} -- {this.comment.body}
            </div>
        );
    }
}

export default Comment;