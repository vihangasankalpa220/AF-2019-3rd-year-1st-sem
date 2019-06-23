import React, { Component } from 'react'
import { instructor } from '../functions/UserFunctions'
class addInstructor extends Component {
    constructor() {
        super()
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            role:'instructer',

        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange (e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit (e) {
        e.preventDefault()

        const user = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password,
            role:this.state.role


        }

        instructor(user).then(res => {
            this.props.history.push(`/`)
        })
    }

    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <div className="jumbotron mt-15">
                            <form noValidate onSubmit={this.onSubmit}>
                                <h2  className="h2 mb-1 font-weight-bold">Please Insert Instructor Details</h2>
                                <div className="form-group">
                                    <label htmlFor="first_name">First Name</label>
                                    <input type="text"
                                           className="form-control"
                                           name="first_name"
                                           placeholder="Enter First Name"
                                           value={this.state.first_name}
                                           onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="last_name">Last Name</label>
                                    <input type="text"
                                           className="form-control"
                                           name="last_name"
                                           placeholder="Enter Last Name"
                                           value={this.state.last_name}
                                           onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input type="email"
                                           className="form-control"
                                           name="email"
                                           placeholder="Enter Email"
                                           value={this.state.email}
                                           onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password"
                                           className="form-control"
                                           name="password"
                                           placeholder="Enter Password"
                                           value={this.state.password}
                                           onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="role">Role</label>
                                    <select disabled={true} type="text"
                                            className="form-control"
                                            name="role"
                                            placeholder="Enter Role"
                                            value={this.state.role}
                                            onChange={this.onChange}  >
                                        <option value="instructer">instructer</option>
                                    </select>
                                </div>
                                <button type="submit" className="btn btn-lg btn-primary btn-block">
                                    Add New Instructor
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default addInstructor
