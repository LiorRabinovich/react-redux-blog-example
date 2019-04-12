import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setActivePost } from '../actions/posts';

import Title from '../components/Title';
import Breadcrumb from '../components/Breadcrumb';

class PostPage extends Component {
    constructor(props) {
        super();

        props.setActivePost(props.match.params.postID);

        this.state = {
            breadcrumbData: [
                {to: '/posts/', label: 'Posts'},
                {label: props.activePost.title}
            ]
        }
    }
    render() {
        return (
            <div className="post-page">
                <Breadcrumb data={this.state.breadcrumbData} />

                <Title title={this.props.activePost.title} />
                <p>{this.props.activePost.content}</p>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        activePost: state.posts.active
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setActivePost: (postID) => {
            dispatch(setActivePost(postID));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
