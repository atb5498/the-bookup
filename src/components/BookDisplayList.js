import React from "react";
import BookDisplayCard from "./BookDisplayCard";

const BookDisplayList = (props) => {
    return (
        <div className="list">
            {
                props.books.map((book, i) => {
                    return <BookDisplayCard
                        key={i}
                        id={book.id}
                        image={book.image}
                        title={book.title}
                        author={book.author}
                        ISBN={book.ISBN}
                        publishedDate={book.publishedDate}
                        email={book.email}
                        price={book.price}
                        condition={book.condition}
                    />
                })
            }
        </div>
    );
}


export default BookDisplayList;
