import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Breadcrumb extends Component {
    render() {
        const data = this.props.data.map((value, index) => {
            const activeClass = (index === (value.length-1) ? 'active' : '');
            let link = value.label;
            if (value.to) {
                link = (<Link to={value.to}>{value.label}</Link>);
            }
            
            return <li key={index} className={`breadcrumb-item ${activeClass}`}>{link}</li>;
        })
        
        return (
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    {data}
                </ol>
            </nav>
        );
    }
}

export default Breadcrumb;
