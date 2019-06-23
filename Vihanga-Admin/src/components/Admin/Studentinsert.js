import React, { Component } from 'react'
import { studentInsert } from '../functions/StudentFunctions'
import  { studentinsert} from "../functions/UserFunctions";

class Studentinsert extends Component {
  constructor() {
    super()
    this.state = {
      userId: '',
      firstName: '',
      lastName: '',
      nameInFull: '',
      nic: '',
      contactNo: '',
      faculty: '',
      email: '',
      password: '',
      role:'student'

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
      userId: this.state.userId,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      nameInFull: this.state.nameInFull,
      nic: this.state.nic,
      contactNo: this.state.contactNo,
      faculty: this.state.faculty,
      email: this.state.email,
      password: this.state.password,
      role:this.state.role

    }

    studentinsert(user).then(res => {
    })
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
                <h2  className="h2 mb-1 font-weight-bold">Please Insert Student Details</h2>
                <div className="form-group">
                  <label htmlFor="userId">User ID</label>
                  <input type="text"
                         className="form-control"
                         name="userId"
                         placeholder="Enter User ID"
                         value={this.state.userId}
                         onChange={this.onChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input type="text"
                         className="form-control"
                         name="firstName"
                         placeholder="Enter First Name"
                         value={this.state.firstName}
                         onChange={this.onChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text"
                         className="form-control"
                         name="lastName"
                         placeholder="Enter Last Name"
                         value={this.state.lastName}
                         onChange={this.onChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="nameInFull">Full Name</label>
                  <input type="text"
                         className="form-control"
                         name="nameInFull"
                         placeholder="Enter Full Name"
                         value={this.state.nameInFull}
                         onChange={this.onChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="nic">NIC</label>
                  <input type="text"
                         className="form-control"
                         name="nic"
                         placeholder="Enter NIC"
                         value={this.state.nic}
                         onChange={this.onChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="contactNo">Contact No</label>
                  <input type="text"
                         className="form-control"
                         name="contactNo"
                         placeholder="Enter Contact NO"
                         value={this.state.contactNo}
                         onChange={this.onChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="faculty">Faculty</label>
                  <input type="text"
                         className="form-control"
                         name="faculty"
                         placeholder="Enter Faculty"
                         value={this.state.faculty}
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
                    <option value="student">student</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-lg btn-primary btn-block">
                  Studentinsert
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Studentinsert

