import React from 'react';
import { Link } from 'react-router-dom';
import Book from './../Components/Book';
import Shelf from './../Components/Shelf';

class BookShelves extends React.Component {

    render() {
        const { books, handleSelect } = this.props;
        let bookShelf = {
            currentlyReading: [],
            wantToRead: [],
            read: [],
        }

        books.forEach(book => {
            bookShelf[book.shelf].push(
                <Book
                    key={book.id}
                    book={book}
                    handleSelect={handleSelect}
                />
            )
        });

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Shelf current={bookShelf.currentlyReading} title="Currently Reading" />
                        <Shelf current={bookShelf.wantToRead} title="Want to Read" />
                        <Shelf current={bookShelf.read} title="Read" />
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">
                        <button>Add a book</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default BookShelves;