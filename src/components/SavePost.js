import React, { Component } from 'react';

class SavePost extends Component {
    constructor() {
        super();

        this.state = {
            post: {
                title: '',
                content: ''
            }
        }
    }

    isPostValid() {
        const isTitleNotEmpty = this.state.post.title !== '';
        const isContentNotEmpty = this.state.post.content !== '';

        return isTitleNotEmpty && isContentNotEmpty;
    }

    handlerSubmit = (e) => {
        e.preventDefault();

        if( this.isPostValid() ) {
            this.props.handlerSavePost(this.state.post);
        } else {
            alert('Post Not Valid');
        }
    }

    handlerChangePost(property, value) {
        let post = {...this.state.post};
        post[property] = value;

        this.setState({
            post
        })
    }

    render() {
        return (
            <form onSubmit={this.handlerSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" value={this.state.post.title} onChange={(e) => this.handlerChangePost('title', e.target.value)} className="form-control" id="title" placeholder="Enter title" />
                </div>
                <div className="form-group">
                    <label htmlFor="content">Content</label>
                    <textarea id="content" value={this.state.post.content} onChange={(e) => this.handlerChangePost('content', e.target.value)} className="form-control" placeholder="Enter content"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Create Post</button>
            </form>
        );
    }
}

export default SavePost;
