import React, {Component} from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';


import Home from './Home';
import AddBook from './AddBook';
import AddAuthor from './AddAuthor';



export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        }
    }

    componentDidMount() {
        
    }

    render() {
        return <div>
            <Router>

            <div>
                <div className="row">

                    <div className="col-sm">
                        <Link to="/">Home</Link>
                    </div>
                    <div className="col-sm">
                        <Link to="/addAuthor">Add Author</Link>
                    </div>
                    <div className="col-sm">
                        <Link to="/addBook">Add Book</Link>
                    </div>
                    

                </div>

                
                <Route exact path="/" component={Home}/>
                <Route exact path="/addAuthor" component={AddAuthor}/>
                <Route exact path="/addBook" component={AddBook}/>


            </div>
            </Router>
        </div>;
    }
}
