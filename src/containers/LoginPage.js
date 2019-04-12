import React, { Component } from 'react';
import { connect } from 'react-redux';

import { handlerLogin } from '../actions/users';

import LoginForm from '../components/LoginForm'

class LoginPage extends Component {
    constructor(props) {
        super();

        if (props.isLogged === true) {
            props.history.push('/');
        }
    }

    handlerLogin = (user) => {
        this.props.handlerLogin(user);
        
        const isPathnameExist = this.props.location.state && this.props.location.state.from.pathname;
        let path = isPathnameExist ? this.props.location.state.from.pathname : '/';
        this.props.history.push(path);
    }

    render() {
        return (
            <LoginForm handlerLogin={this.handlerLogin} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLogged: state.users.isLogged
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handlerLogin: (user) => {
            dispatch(handlerLogin(user));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);

