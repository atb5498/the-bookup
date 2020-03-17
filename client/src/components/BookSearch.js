import React from "react";
import NavBar from "../components/navBar";

const BookSearch = (props) => {
    return (
        <div>
            <div id="post-jumbotron" className="jumbotron jumbotron-fluid">
                <NavBar />
                <div className="container">
                    <h1 className="display-4">Sell Your Book</h1>
                    <p className="lead">Begin by entering your book's ISBN.</p>
                </div>
            </div>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="book-search">
                            <form onSubmit={props.searchBook} action="">
                                <div className="input-group mb-3">
                                    <input onChange={props.handleSearch} id="isbn-input" type="text" className="form-control" aria-label="Your ISBN" aria-describedby="button-addon2" />
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-none" type="submit" id="search-button">Search</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookSearch;
