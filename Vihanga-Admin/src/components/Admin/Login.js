import React, { Component } from 'react'
import { LoginErrors } from './LoginError';
import { login } from '../functions/UserFunctions'

class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            formErrors: {email: '', password: ''},
            ValidEmail: false,
            ValidPassword: false,
            ValidForm: false

        }

        this.onSubmit = this.onSubmit.bind(this)
    }





    onSubmit (e) {
        e.preventDefault()

        const user = {
            email: this.state.email,
            password: this.state.password

        }

        login(user).then(res => {
            if (res) {
                this.props.history.push(`/`)
            }
        })
    }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
            () => { this.validateField(name, value) });
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let ValidEmail = this.state.ValidEmail;
        let ValidPassword = this.state.ValidPassword;

        switch(fieldName) {
            case 'email':
                ValidEmail = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = ValidEmail ? '' : ' is invalid';
                break;
            case 'password':
                ValidPassword = value.length >= 6;
                fieldValidationErrors.password = ValidPassword ? '': 'password is too short';
                break;
            default:
                break;
        }
        this.setState({formErrors: fieldValidationErrors,
            ValidEmail: ValidEmail,
            ValidPassword: ValidPassword
        }, this.validateForm);
    }

    validateForm() {
        this.setState({ValidForm: this.state.ValidEmail && this.state.ValidPassword});
    }

    errorClass(error) {
        return(error.length === 0 ? '' : 'has-error');
    }



    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                            <div className="panel panel-default">
                                <LoginErrors formErrors={this.state.formErrors} />
                            </div>

                            <div className="form-group">
                                <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}/>
                                <label htmlFor="email">Email Address</label>
                                <input type="email"
                                    className="form-control"
                                    name="email"
                                    placeholder="Enter Email"
                                    value={this.state.email}
                                    onChange={this.handleUserInput} required  />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password"
                                    className="form-control"
                                    name="password"
                                    placeholder="Enter Password"
                                    value={this.state.password}
                                    onChange={this.handleUserInput} required  />
                            </div>


                            <button type="submit" className="btn btn-lg btn-primary btn-block">
                                Sign in
                            </button>

                        </form>


                    </div>
                </div>
            </div>
        )
    }
}

export default Login
