import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            role:'admin'
        }
    }

    componentDidMount () {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            first_name: decoded.first_name,
            last_name: decoded.last_name,
            email: decoded.email,
            role:decoded.role,
        })
    }

    render () {
        return (
            <div className="container">
                <div className="jumbotron mt-5">

                        <h1 className="text-center">INSTRUCTOR PROFILE</h1>
                </div>
                <div className="jumbotron mt-20">
                    <table className="table col-md-20 mx-auto">
                        <tbody>
                            <tr>
                                <td>First Name</td>
                                <td>{this.state.first_name}</td>
                            </tr>
                            <tr>
                                <td>Last Name</td>
                                <td>{this.state.last_name}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{this.state.email}</td>
                            </tr>
                            <tr>
                                <td>Role</td>
                                <td>{this.state.role}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                </div>

        )
    }
}

export default Profile
