import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class Header extends Component {
    render() {
        let navLinkRight = <NavLink className="nav-link" to="/login">Login</NavLink>;
        if(this.props.isLogged === true) {
            navLinkRight = <NavLink className="nav-link" onClick={this.props.handlerLogout} to="/">Logout</NavLink>;
        }

        return (
            <header className="mb-5">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <NavLink className="navbar-brand" to="/">React Blog</NavLink>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <NavLink exact className="nav-link" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/posts">Posts</NavLink>
                                </li>
                            </ul>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    {navLinkRight}
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;
