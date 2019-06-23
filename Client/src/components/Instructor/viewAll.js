import React, { Component } from 'react'
import axios from "axios";

class viewAll extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            isLoading: true,
            errors: null
        };
    }

    componentDidMount() {
        axios
            .get("http://localhost:3000/api/instructors")
            .then(response =>
                response.data.data.map(user => ({
                    _id: `${user._id}`,
                    nameInFull: `${user.nameInFull}`,
                    faculty: `${user.faculty}`
                }))
            )
            .then(users => {
                this.setState({
                    users,
                    isLoading: false
                });
            })
            .catch(error => this.setState({ error, isLoading: false }));
    }

    render () {
        const { isLoading, users } = this.state;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mt-5 mx-auto">
                        <div className="jumbotron mt-15">
                            <table className="table table-striped">
                                <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Faculty</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                        {!isLoading ? (
                                            users.map(user => {
                                                const { _id, nameInFull, faculty } = user;
                                                return (
                                                    <tr>
                                                        <th scope="row">{_id}</th>
                                                        <td>{nameInFull}</td>
                                                        <td>{faculty}</td>
                                                        <td>@mdo</td>
                                                        <td>@twitter</td>
                                                    </tr>
                                                );
                                            })
                                        ) : (
                                            <p>Loading...</p>
                                        )}
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default viewAll
