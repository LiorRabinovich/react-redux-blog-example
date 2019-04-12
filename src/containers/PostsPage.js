import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

import Title from '../components/Title';

class PostsPage extends Component {
    render() {
        return (
            <div className="posts-page">
                <Title title="Posts" link={{label: 'Create Post', to: '/posts/create'}} />

                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Title</th>
                                <th scope="col">Content</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.posts.map((post, postIndex) =>
                                <tr key={postIndex}>
                                    <th scope="row">{postIndex}</th>
                                    <td><Link to={`/post/${postIndex}`}>{post.title}</Link></td>
                                    <td>{post.content}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsPage);
