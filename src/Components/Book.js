import React from 'react';

class Book extends React.Component {
    render() {
        const { id, book, handleSelect } = this.props;
        return (
            <li>
                <div key={id} className="book">
                    <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks && book.imageLinks.smallThumbnail})` }}></div>
                    <div className="book-shelf-changer">
                        <select 
                            defaultValue={book.shelf ? book.shelf : 'none'}
                            onChange={
                                evt => {
                                    handleSelect(evt,book);
                                }
                            }>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors && book.authors.join(', ')}</div>
                </div>
            </li>
        )
    }
}

export default Book;