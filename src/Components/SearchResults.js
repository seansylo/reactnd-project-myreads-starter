import React from 'react';
import Book from './../Components/Book';

class SearchResults extends React.Component {

    render() {
        const { myBooks, books, handleSelect } = this.props;

        let updatedBooklist = books.map(book => {
            myBooks.map(mBook => {
                if(mBook.id === book.id) {
                    book.shelf = mBook.shelf;
                }
                return mBook;
            });
            return book;
        });

        return (
            <>
                {
                    updatedBooklist.map(book => (
                        <Book
                            key={book.id}
                            book={book}
                            handleSelect={handleSelect}
                        />
                    ))
                }
            </>
        )
    }
}

export default SearchResults;