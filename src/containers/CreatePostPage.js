import React, { Component } from 'react';
import { connect } from 'react-redux';

import { savePost } from '../actions/posts';

import SavePost from '../components/SavePost';

class CreatePostPage extends Component {
    render() {
        return (
            <div className="home-page">
                <SavePost handlerSavePost={this.handlerSavePost} />
            </div>
        );
    }

    handlerSavePost = (post) => {
        this.props.savePost(post);
        this.props.history.push('/posts');
    }
}

const mapStateToProps = (state) => {
    return {

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        savePost: (post) => {
            dispatch(savePost(post));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePostPage);

