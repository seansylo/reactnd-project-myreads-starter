import React from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './../BooksAPI'
import SearchResults from '../Components/SearchResults';

class BookSearch extends React.Component {
    state = {
        query: '',
        bookList: [],
    }

    handleQuery = (evt) => {
        let query = evt.target.value;

        if(query.length > 0){
            BooksAPI.search(query).then(books => {
                if(!books.error) {
                    this.setState({ bookList: books });
                } else {
                    this.setState({ bookList: [] });
                }
            });
        } else {
            this.setState({bookList: []});
        }
    }

    handleSearchSelect = (evt, book) => {
        BooksAPI.update(book, evt.target.value);
    }

    render() {
        const { myBooks, handleSelect } = this.props;
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/"><button className="close-search">Close</button></Link>
                    <div className="search-books-input-wrapper">
                        <input 
                            type="text"
                            placeholder="Search by title or author"
                            onChange={evt => {this.handleQuery(evt)}}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        <SearchResults myBooks={myBooks} books={this.state.bookList} handleSelect={handleSelect} />
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookSearch;