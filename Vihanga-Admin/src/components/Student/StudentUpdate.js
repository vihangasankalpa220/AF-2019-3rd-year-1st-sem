import React, { Component } from 'react'
import {studentInsert} from "../functions/StudentFunctions";
import jwt_decode from "jwt-decode";

class StudentUpdate extends Component {
    constructor() {
        super()
        this.state = {
            userId: '',
            firstName: '',
            lastName: '',
            nameInFull: '',
            nic: '',
            contactNo: '',
            currentYear: '',
            currentSemester: '',
            faculty: '',
            subjects: '',
            gpa: '',
            email: '',
            password: '',
            role:'student'

        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount () {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            firstName: decoded.firstName,
            lastName: decoded.lastName,
            nameInFull: decoded.nameInFull,
            nic: decoded.nic,
            contactNo: decoded.contactNo,
            currentYear: decoded.currentYear,
            currentSemester: decoded.currentSemester,
            faculty: decoded.faculty,
            gpa: decoded.gpa,
            email: decoded.email,
            role:decoded.role,
        })
    }



    onChange (e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit (e) {
        e.preventDefault()

        const user = {
            userId: this.state.userId,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            nameInFull: this.state.nameInFull,
            nic: this.state.nic,
            contactNo: this.state.contactNo,
            currentYear: this.state.currentYear,
            currentSemester: this.state.currentSemester,
            faculty: this.state.faculty,
            subjects: this.state.subjects,
            gpa: this.state.gpa,
            email: this.state.email,
            password: this.state.password,
            role:this.state.role

        }

        studentInsert(user).then(res => {
            this.props.history.push(`/login`)
        })
    }

    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <div className="jumbotron mt-15">
                            <form noValidate onSubmit={this.onSubmit}>
                                <h2  className="h2 mb-1 font-weight-bold">Update Profile</h2><br/>


                                <div className="form-group">
                                    <label htmlFor="firstName">First Name</label>
                                    <input type="text"
                                           className="form-control"
                                           name="firstName"
                                           placeholder={this.state.firstName}
                                           value={this.state.firstName}
                                           onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input type="text"
                                           className="form-control"
                                           name="lastName"
                                           placeholder={this.state.lastName}
                                           value={this.state.lastName}
                                           onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="nameInFull">Full Name</label>
                                    <input type="text"
                                           className="form-control"
                                           name="nameInFull"
                                           placeholder={this.state.nameInFull}
                                           value={this.state.nameInFull}
                                           onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="nic">NIC</label>
                                    <input type="text"
                                           className="form-control"
                                           name="nic"
                                           placeholder={this.state.nic}
                                           value={this.state.nic}
                                           onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="contactNo">Contact No</label>
                                    <input type="text"
                                           className="form-control"
                                           name="contactNo"
                                           placeholder={this.state.contactNo}
                                           value={this.state.contactNo}
                                           onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="currentYear">Current Year</label>
                                    <input type="text"
                                           className="form-control"
                                           name="currentYear"
                                           placeholder={this.state.currentYear}
                                           value={this.state.currentYear}
                                           onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="currentSemester">Current Semester</label>
                                    <input type="text"
                                           className="form-control"
                                           name="currentSemester"
                                           placeholder={this.state.currentSemester}
                                           value={this.state.currentSemester}
                                           onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="faculty">Faculty</label>
                                    <input type="text"
                                           className="form-control"
                                           name="faculty"
                                           placeholder={this.state.faculty}
                                           value={this.state.faculty}
                                           onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="subjects">Subjects</label>
                                    <input type="text"
                                           className="form-control"
                                           name="subjects"
                                           placeholder={this.state.subjects}
                                           value={this.state.subjects}
                                           onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="gpa">GPA</label>
                                    <input type="text"
                                           className="form-control"
                                           name="gpa"
                                           placeholder={this.state.gpa}
                                           value={this.state.gpa}
                                           onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input type="email"
                                           className="form-control"
                                           name="email"
                                           placeholder={this.state.email}
                                           value={this.state.email}
                                           onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password"
                                           className="form-control"
                                           name="password"
                                           placeholder={this.state.password}
                                           value={this.state.password}
                                           onChange={this.onChange} />
                                </div>
                                <button type="submit" className="btn btn-lg btn-primary btn-block">
                                    Update
                                </button>
                                <button type="submit" className="btn btn-lg btn-primary btn-block">
                                    Delete
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default StudentUpdate
