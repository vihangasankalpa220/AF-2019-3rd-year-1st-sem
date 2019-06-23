import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import Select from 'react-select';


export default class AddBook extends Component {

    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeISBN = this.onChangeISBN.bind(this);
        this.onChangeAuthor = this.onChangeAuthor.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangePublisher = this.onChangePublisher.bind(this);

        // this.showDrop = this.showDrop.bind(this);
        // this.hideDrop = this.hideDrop(this);

        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            name: '',
            isbn: '',
            author: '',
            price: '',
            year: '',
            publisher: '',
            authors: [],
            authorId: ''
        }

    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeISBN(e) {
        this.setState({
            isbn: e.target.value
        });
    }

    onChangeAuthor(optionSelected) {

        const name = this.name;
        const value = optionSelected.value;
        const label = optionSelected.label;

        console.log(name);
        console.log(value);
        console.log(label);

        this.setState({
            author: label,
            authorId: value
        });

        console.log(this.state.author);

    }

    onChangePrice(e) {
        this.setState({
            price: e.target.value
        });
    }

    onChangeYear(e) {
        this.setState({
            year: e.target.value
        });
    }

    onChangePublisher(e) {
        this.setState({
            publisher: e.target.value
        });
    }



    componentDidMount() {

        axios.get('http://localhost:4000/api/author/all')
            .then(response => {
                console.log(response);

                const authorList = [];

                for (var i = 0; i < response.data.authors.length; i++) {
                    const obj = {
                        label: response.data.authors[i].firstName + " " + response.data.authors[i].lastName,
                        value: response.data.authors[i]._id
                    }

                    authorList.push(obj);
                }


                this.setState({
                    authors: authorList
                });



            }).catch(err => {
                console.log(err);
            });


    }



    onSubmit(e) {
        e.preventDefault();


        console.log(this.state.author);


        const book = {
            name: this.state.name,
            isbn: this.state.isbn,
            author: this.state.authorId,
            price: this.state.price,
            year: this.state.year,
            publisher: this.state.publisher

        }


        axios.post('http://localhost:3000/api/book/add', book)
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

                <h3>Add Book</h3>

                <form onSubmit={this.onSubmit}>

                    <div className="form-group">

                        <label>Book Name:</label>
                        <input type="text" className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeName}
                        />
                    </div>


                    <div className="form-group">

                        <label>ISBN:</label>
                        <input type="text" className="form-control"
                            value={this.state.isbn}
                            onChange={this.onChangeISBN}
                        />
                    </div>


                    <div className="form-group">

                        <label>Author:</label>

                        <Select options={this.state.authors} onChange={this.onChangeAuthor} />
                    </div>



                    <div className="form-group">

                        <label>Price:</label>
                        <input type="text" className="form-control"
                            value={this.state.price}
                            onChange={this.onChangePrice}
                        />
                    </div>

                    <div className="form-group">

                        <label>Year:</label>
                        <input type="text" className="form-control"
                            value={this.state.year}
                            onChange={this.onChangeYear}
                        />
                    </div>


                    <div className="form-group">

                        <label>Publisher:</label>
                        <input type="text" className="form-control"
                            value={this.state.publisher}
                            onChange={this.onChangePublisher}
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Add Book" className="btn btn-primary" />
                    </div>




                </form>

            </div>



        );
    }





}