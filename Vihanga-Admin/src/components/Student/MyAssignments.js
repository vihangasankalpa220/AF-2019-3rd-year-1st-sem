import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'

class MyAssignments extends Component {

    constructor() {
        super()
        this.state = {
            subject: '',
            assignmentDesc: '',
            dueDate: '',
            status: ''
        }
    }

    componentDidMount () {
        // const token = localStorage.usertoken
        // const decoded = jwt_decode(token)
        // this.setState({
        //     subject: decoded.subject,
        //     assignmentDesc: decoded.assignmentDesc,
        //     dueDate: decoded.dueDate,
        //     status: decoded.status
        // })
    }

    render () {
        return (
            <div className="container">
                <div className="jumbotron mt-5">

                    <h1 className="text-center">My Assignments</h1>
                </div>
                <div className="jumbotron mt-20">
                    <table className="table col-md-20 mx-auto">
                        <tbody>
                        <tr>
                            <th>Subject</th>
                            <th>Description</th>
                            <th>Due Date</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                        <tr>
                            <td>{this.state.subject}</td>
                            <td>{this.state.description}</td>
                            <td>{this.state.dueDate}</td>
                            <td>{this.state.status}</td>
                            <td><button type="submit" className="btn btn-lg btn-primary btn-block">
                                Upload
                            </button></td>
                        </tr>

                        </tbody>
                    </table>
                </div>
            </div>

        )
    }

}

export default MyAssignments