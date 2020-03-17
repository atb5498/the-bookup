import React from "react";

const BookCard = (props) => {
    return (
        <div>
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
                                <li className="list-group-item">ISBN {props.ISBN}</li>
                                <li className="user-input list-group-item">
                                    <select onChange={props.handleConditionChange} className="custom-select" id="inputGroupSelect01">
                                        <option value="">Select Condition</option>
                                        <option value="Good">Good</option>
                                        <option value="Like New">Like New</option>
                                        <option value="Poor">Poor</option>
                                    </select>
                                </li>
                                <li className="user-input list-group-item">
                                    <input id="price-input" onChange={props.handlePriceChange} placeholder="Enter Price" type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
                                </li>
                                <li className="user-input list-group-item">
                                    <input id="contact-input" onChange={props.handleEmailChange} type="text" className="form-control" placeholder="Enter Email" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                </li>
                            </ul>
                        </div>
                        <button onClick={props.handleListingSubmit} className="btn btn-outline-none" type="button" id="submit-button">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookCard;
