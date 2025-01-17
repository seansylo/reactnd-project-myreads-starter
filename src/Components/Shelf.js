import React from 'react';

function Shelf(props) {
    const { current, title } = props;
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {current}
                </ol>
            </div>
        </div>
    )
}

export default Shelf;