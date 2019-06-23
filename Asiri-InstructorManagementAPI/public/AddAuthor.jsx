import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';


export default class AddAuthor extends Component {

    constructor(props) {
        super(props);

        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeNationality = this.onChangeNationality.bind(this);


        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            firstName: '',
            lastName: '',
            nationality: ''
        }

    }

    onChangeFirstName(e) {
        this.setState({
            firstName: e.target.value
        });
    }

    onChangeLastName(e) {
        this.setState({
            lastName: e.target.value
        });
    }

    

    onChangeNationality(e) {
        this.setState({
            nationality: e.target.value
        });
    }



   



    onSubmit(e) {
        e.preventDefault();


        const author = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            nationality: this.state.nationality

        }


        axios.post('http://localhost:4000/api/author/add', author)
            .then(response => {

                console.log(response);
                this.props.history.push('/');
            }).catch(err => {
                console.log(err);
            });
    }





    render() {
        return (

            <div>

                <h3>Add Author</h3>

                <form onSubmit={this.onSubmit}>

                    <div className="form-group">

                        <label>First Name:</label>
                        <input type="text" className="form-control"
                            value={this.state.firstName}
                            onChange={this.onChangeFirstName}
                        />
                    </div>


                    <div className="form-group">

                        <label>Last Name:</label>
                        <input type="text" className="form-control"
                            value={this.state.lastName}
                            onChange={this.onChangeLastName}
                        />
                    </div>


                   

                    <div className="form-group">

                        <label>Nationality:</label>
                        <input type="text" className="form-control"
                            value={this.state.nationality}
                            onChange={this.onChangeNationality}
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Add Author" className="btn btn-primary" />
                    </div>




                </form>

            </div>



        );
    }





}