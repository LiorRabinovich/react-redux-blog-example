import React, { Component } from 'react';

class LoginForm extends Component {
    constructor() {
        super();

        this.state = {
            user: {
                email: '',
                password: ''
            }
        }
    }

    handlerChangeUser(property, value) {
        let user = {...this.state.user};
        user[property] = value;

        this.setState({
            user
        })
    }

    handlerSubmit = (e) => {
        e.preventDefault();
        this.props.handlerLogin(this.state.user);
    }

    render() {
        return (
            <form className="login-page" onSubmit={this.handlerSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" value={this.state.user.email} onChange={(e) => this.handlerChangeUser('email',e.target.value)} className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" autoComplete="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" value={this.state.user.password} onChange={(e) => this.handlerChangeUser('password',e.target.value)} className="form-control" id="password" placeholder="Password" autoComplete="password" required />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

export default LoginForm;

