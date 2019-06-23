import React, {Component} from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import axios from 'axios';


const Book = props=>(

    <tr>
        <td>{props.book._id}</td>
        <td>{props.book.name}</td>
        <td>{props.book.isbn}</td>
        <td>{props.book.author.firstName}{" "}{props.book.author.firstName}</td>
        <td>{props.book.price}</td>
        <td>{props.book.year}</td>
        <td>{props.book.publisher}</td>
    </tr>
);

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: []
        }
    }

    componentDidMount() {

        axios.get('http://localhost:4000/api/book/all')
        .then(response=>{
            console.log(response);
            console.log(response.data.books);
            this.setState({books:response.data.books});
        }).catch(err=>{
            console.log(err);
        });
        
    }


    booksList(){
        console.log(this.state.books);
        return this.state.books.map(function(currentBook,i){
            return <Book book={currentBook} key={i}/>;
        });


    }



    render() {
        return <div>
            <h3 className="text-primary">Book List</h3>
            <table className="table table-striped">

                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>ISBN</td>
                        <td>Author</td>
                        <td>Price</td>
                        <td>Year</td>
                        <td>Publisher</td>
                    </tr>

                </thead>

                <tbody>

                    {this.booksList()}

                </tbody>
            </table>
        </div>;
    }
}
