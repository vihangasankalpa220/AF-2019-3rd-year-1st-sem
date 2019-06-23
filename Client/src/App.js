import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/UI/Navbar'
import Landing from './components/UI/Landing'
import Login from './components/Login'
import Profile from './components/UI/Profile'
import StudentProfile from './components/Admin/Profile'
import InstructorProfile from './components/Student/Profile'
import AdminProfile from './components/Admin/Profile'
import Admininsert from './components/Admin/Admininsert'
import Studentinsert from './components/Student/Studentinsert'
import addInstructor from './components/Instructor/addInstructor'
import viewAllInstructors from './components/Instructor/viewAll'

class App extends Component {
  render () {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Admininsert} />
            <Route exact path="/profile" component={Profile} />
              <Route exact path="/studentprofile" component={StudentProfile} />
              <Route exact path="/instructorprofile" component={InstructorProfile} />
              <Route exact path="/adminprofile" component={AdminProfile} />
            <Route exact path="/admininsert" component={Admininsert} />
            <Route exact path="/studentinsert" component={Studentinsert} />
            <Route exact path="/addinstructor" component={addInstructor} />
            <Route exact path="/instructors/viewall" component={viewAllInstructors} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
