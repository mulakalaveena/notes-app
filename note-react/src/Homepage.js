import React, { Component } from 'react';
import Register from './Register.js'
import Login from './Login.js';

class Homepage extends Component {
    constructor(props) {
        super(props)
        this.state={
            register: false,
            login: false,

        }
        this.handleLogin = this.handleLogin.bind(this)
        this.handleRegister = this.handleRegister.bind(this)

    }

    render() {
        return (
            <div>
            <form>
                <button type='button'onClick={this.handleLogin} >login </button>
                <p>If not registered,please register first</p>
                <button type='button' onClick={this.handleRegister} >register</button>
                <br/>
            </form>
                {this.state.register ? <Register/> : null}
                {this.state.login ? <Login/> : null}
            </div>

        )
    }
    handleLogin() {
        this.setState ({
            register: this.state.register,
            login: !this.state.login
        }) 

    }
    handleRegister() {
        this.setState ({
            register: !this.state.register,
            login: this.state.login,

        })
    }
}
export default Homepage;