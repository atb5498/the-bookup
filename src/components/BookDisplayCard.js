import React from "react";
import API from "../utils/API";

function deleteBook(id) {
    API.deleteBook(id)
        .catch(err => console.log(err))
    window.location.reload();
}

const BookDisplayCard = (props) => {
    return (
        <div className="card mb-3 mx-auto" style={{ maxWidth: 540 }}>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={props.image} className="card-img d-block mx-auto" alt="book" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <ul className="list-group list-group-flush">
                            <li id="card-title" className="list-group-item">{props.title}</li>
                            <li className="list-group-item">{props.author}</li>
                            {/* <li className="list-group-item">Published {props.publishedDate}</li> */}
                            <li className="list-group-item">ISBN {props.ISBN}</li>
                            <li className="list-group-item">{props.condition} Condition</li>
                            <li className="list-group-item">${props.price}.00</li>
                            <li className="list-group-item"><i className="far fa-envelope fa-lg"></i> {props.email}</li>
                        </ul>
                    </div>
                    <button onClick={() => deleteBook(props.id)} id="delete-button" className="btn btn-outline-none" type="button">Delete</button>
                </div>
            </div>
        </div>
    );
}

export default BookDisplayCard;
