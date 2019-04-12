import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Title extends Component {
    render() {
        let link = '';
        if(this.props.link) {
            link = <Link className="btn btn-primary" to={this.props.link.to}>{this.props.link.label}</Link>;
        }

        return (
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h1>{this.props.title}</h1>
                {link}
            </div>
        );
    }
}

export default Title;
