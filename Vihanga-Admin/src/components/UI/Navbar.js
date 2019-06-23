import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import jwt_decode from "jwt-decode";

const crypto = require('crypto');

class Navbar extends Component {
    logOut (e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push(`/`)
    }

    render () {
        if(localStorage.usertoken){
            const token2 = localStorage.usertoken;
            const decoded2 = jwt_decode(token2)
            this.fn = decoded2.first_name
            this.gravatar = 'https://www.gravatar.com/avatar/vihangasankalpa220@gmail.com'+crypto.createHash('md5').update(decoded2.email).digest("hex");
            this.role = decoded2.role
        }else{
            this.fn = 'no name';
            this.role = '';
        }

        const loginRegLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/login" className="nav-link">
                        Login
                    </Link>
                </li>
            </ul>
        )

        const accountInfoLink = (
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="" role="button"
                   aria-haspopup="true" aria-expanded="false"><img src={this.gravatar} width="30" height="30" alt=""/></a>
                <div className="dropdown-menu">
                    <Link to="/profile" className="dropdown-item">
                        My Account
                    </Link>
                    <li className="dropdown-item">
                        <a href="" onClick={this.logOut.bind(this)} className="dropdown-item">
                            Logout {this.fn}
                        </a>
                    </li>
                </div>
            </li>
        )

        const adminMenu = (
            <ul className="navbar-nav">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="" role="button"
                       aria-haspopup="true" aria-expanded="false">Admin Console</a>
                    <div className="dropdown-menu">
                        <Link to="/admininsert" className="dropdown-item">
                            New Admin
                        </Link>
                        <Link to="" className="dropdown-item">
                            Update Profile
                        </Link>
                        <Link to="" className="dropdown-item">
                            Delete Account
                        </Link>
                        <Link to="/courseinsert" className="dropdown-item">
                            New Course
                        </Link>
                        <div className="dropdown-divider"></div>
                        <Link to="/Chart" className="dropdown-item">
                            Database Stats
                        </Link>
                        <Link to="/dbstats" className="dropdown-item">
                            System Stats
                        </Link>
                        <Link to="/dbstats" className="dropdown-item">
                            Heartbeats
                        </Link>
                        <Link to="/dbstats" className="dropdown-item">
                            Logs
                        </Link>
                    </div>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="" role="button"
                       aria-haspopup="true" aria-expanded="false">Assignment Services</a>
                    <div className="dropdown-menu">
                        <Link to="" className="dropdown-item">
                            Add Assignment
                        </Link>
                        <Link to="" className="dropdown-item">
                            Update Assignment
                        </Link>
                        <Link to="" className="dropdown-item">
                            Delete Assignment
                        </Link>
                        <div className="dropdown-divider"></div>
                        <Link to="" className="dropdown-item">
                            View All Assignments
                        </Link>
                    </div>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="" role="button"
                       aria-haspopup="true" aria-expanded="false">Student Services</a>
                    <div className="dropdown-menu">
                        <Link to="/studentinsert" className="dropdown-item">
                            Add Student
                        </Link>
                        <Link to="#" className="dropdown-item">
                            Update Student
                        </Link>
                        <Link to="" className="dropdown-item">
                            Delete Student
                        </Link>
                        <div className="dropdown-divider"></div>
                        <Link to="" className="dropdown-item">
                            View All Students
                        </Link>
                    </div>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="" role="button"
                       aria-haspopup="true" aria-expanded="false">Instructor Services</a>
                    <div className="dropdown-menu">
                        <Link to="/instructerinsert" className="dropdown-item">
                            Add Instructor
                        </Link>
                        <Link to="" className="dropdown-item">
                            Update Instructor
                        </Link>
                        <Link to="#" className="dropdown-item">
                            Delete Instructor
                        </Link>
                        <div className="dropdown-divider"></div>
                        <Link to="#" className="dropdown-item">
                            Assignment Duties
                        </Link>
                        <div className="dropdown-divider"></div>
                        <Link to="/instructors/viewall" className="dropdown-item">
                            View All
                        </Link>
                    </div>
                </li>
            </ul>
        )

        const studentMenu = (
            <ul className="navbar-nav">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="" role="button"
                       aria-haspopup="true" aria-expanded="false">Student Services</a>
                    <div className="dropdown-menu">
                        <Link to="/studentUpdate" className="dropdown-item">
                            Update Details
                        </Link>
                        <div className="dropdown-divider"></div>
                        <Link to="/myAssignments" className="dropdown-item">
                            My Assignments
                        </Link>
                    </div>
                </li>
            </ul>

        )

        const instructorMenu = (
            <ul className="navbar-nav">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="" role="button"
                       aria-haspopup="true" aria-expanded="false">Instructor Services</a>
                    <div className="dropdown-menu">
                        <Link to="" className="dropdown-item">
                            Update Profile
                        </Link>
                        <div className="dropdown-divider"></div>
                        <Link to="" className="dropdown-item">
                            Create Assignment
                        </Link>
                        <div className="dropdown-divider"></div>
                        <Link to="" className="dropdown-item">
                            View Assignments
                        </Link>
                    </div>
                </li>
            </ul>
        )

        return<nav className="navbar navbar-expand-lg navbar-dark bg-primary rounded">
            <button className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbar1"
                    aria-controls="navbar1"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand page-scroll sticky-logo" href="index.html">
                <h1><span>SIMS</span><small> SLIIT</small></h1>
            </a>
            <div className="collapse navbar-collapse justify-content-between" id="navbar1">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                            Home
                        </Link>
                    </li>
                    {this.role==='admin' ? adminMenu :
                        this.role==='student' ? studentMenu :
                            this.role==='instructer' ? instructorMenu :
                                ''}
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
                </form>
                    {localStorage.usertoken ? accountInfoLink : loginRegLink}
            </ul>
            </div>
        </nav>
    }

}

export default withRouter(Navbar)
