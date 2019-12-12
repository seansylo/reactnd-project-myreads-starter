import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelves from './Pages/BookShelves';
import BookSearch from './Pages/BookSearch';

class BooksApp extends React.Component {
    state = {
        myBooks: [],
        booksLoaded: false,
    }

    componentDidMount() {
        BooksAPI.getAll().then(books => {
            this.setState({myBooks:books,booksLoaded:true});
        });
    }

    handleBookSelect = (evt, book) => {
        BooksAPI.update(book, evt.target.value).then(() => {
            BooksAPI.getAll().then(books => {
                this.setState({myBooks:books});
            });
        });
    }

    render() {
        if(this.state.booksLoaded){
            return (
                <div className='app'>
                    <Route exact path="/" render={()=><BookShelves books={this.state.myBooks} handleSelect={this.handleBookSelect}/>} />
                    <Route path="/search" render={()=><BookSearch myBooks={this.state.myBooks} handleSelect={this.handleBookSelect}/>} />
                </div>
            )
        } else {
            return <p>Loading...</p>
        }
    }
}

export default BooksApp
