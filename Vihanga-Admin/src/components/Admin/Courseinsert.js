import React, { Component } from 'react'
import { courseinsert } from '../functions/UserFunctions'


class Courseinsert extends Component {
    constructor() {
        super()
        this.state = {
            courseid:'1',
            course_name: 'AF',
            discription: '',
            status: 'available',


        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onclick(type){
        this.setState(prevState => {
            return {courseid: type === 'add' ? prevState.courseid + 1: prevState.courseid - 1}
        });
    }

    handleClick = () => {
        this.setState(prevState => {
            return {courseid: prevState.courseid + 1}
        })
    }

    onChange (e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit (e) {
        e.preventDefault()

        const course = {
            courseid:this.state.courseid,
            course_name: this.state.course_name,
            discription: this.state.discription,
            status: this.state.status

        }

        courseinsert(course).then(res => {
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
                                <h2  className="h2 mb-1 font-weight-bold">Please Insert Course Details</h2>
                                <div className="form-group">
                                    <label htmlFor="courseid">Course id</label>
                                    <select  type="text" disabled={true}
                                             className="form-control"
                                             name="courseid"
                                             placeholder="Enter courseid"
                                             value={this.state.courseid}
                                             onChange={this.onChange}  onClick={this.onclick.bind(this, 'add')}  >
                                        <option value="add">add</option>
                                    </select>

                                </div>
                                <div className="form-group">
                                    <label htmlFor="course_name">Course Name</label>
                                    <select  type="text"
                                            className="form-control"
                                            name="course_name"
                                            placeholder="Enter course_name"
                                            value={this.state.course_name}
                                            onChange={this.onChange}  >
                                        <option value="AF">AF</option>
                                        <option value="DS">DS</option>
                                        <option value="SA">SA</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="discription">Discription</label>
                                    <input type="text"
                                           className="form-control"
                                           name="discription"
                                           placeholder="Enter discription"
                                           value={this.state.discription}
                                           onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="status">Status</label>
                                    <select  type="text"
                                             className="form-control"
                                             name="status"
                                             placeholder="Enter status"
                                             value={this.state.status}
                                             onChange={this.onChange}  >
                                        <option value="available">available</option>
                                        <option value="unavailable">unavailable</option>
                                    </select>
                                </div>


                                <button type="submit" className="btn btn-lg btn-primary btn-block">
                                    Courseinsert
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}

export default Courseinsert
