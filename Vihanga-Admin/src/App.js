import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/UI/Navbar'
import Landing from './components/UI/Landing'
import Login from './components/Admin/Login'
import Profile from './components/UI/Profile'
import Admininsert from  './components/Admin/Admininsert'
import Studentinsert from './components/Admin/Studentinsert'
import Register from "./components/Admin/Register";
import Courseinsert from "./components/Admin/Courseinsert";
import addInstructor from "./components/Instructor/addInstructor";
import viewAllInstructors from "./components/Instructor/viewAll";
import StudentProfile from "./components/Admin/Profile";
import InstructorProfile from "./components/Student/Profile";
import Chart from "./components/Admin/Chart";
import StudentUpdate from "./components/Student/StudentUpdate";
import MyAssignments from "./components/Student/MyAssignments";
class App extends Component {
  render () {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
      <Route exact path="/admininsert" component={Admininsert} />
            <Route exact path="/studentinsert" component={Studentinsert} />
              <Route exact path="/register" component={Register} />
            <Route exact path="/courseinsert" component={Courseinsert} />
              <Route exact path="/instructerinsert" component={addInstructor} />
              <Route exact path="/instructors/viewall" component={viewAllInstructors} />
              <Route exact path="/studentprofile" component={StudentProfile} />
              <Route exact path="/instructorprofile" component={InstructorProfile} />
            <Route exact path="/Chart" component={Chart} />
            <Route exact path="/studentUpdate" component={StudentUpdate} />
            <Route exact path="/myAssignments" component={MyAssignments} />

          </div>
        </div>
      </Router>
    );
  }
}

export default App;
