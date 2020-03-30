import React from "react";

const BookSearchBar = (props) => {
    console.log("Component mounted")
    return (
        <div className="search-form">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-4">
                        <form className="forms" onSubmit={props.searchTitle} action="">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">Title</span>
                                </div>
                                <input onChange={props.handleSearch} type="text" className="form-control" aria-label="Title" aria-describedby="basic-addon1" />
                                <div className="input-group-append">
                                    <button className="btn btn-outline-none" type="submit" id="title-search-btn">Search</button>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <form className="forms" onSubmit={props.searchAuthor} action="">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">Author</span>
                                </div>
                                <input onChange={props.handleSearch} type="text" className="form-control" aria-label="Author" aria-describedby="basic-addon1" />
                                <div className="input-group-append">
                                    <button className="btn btn-outline-none" type="submit" id="author-search-btn">Search</button>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <form className="forms" onSubmit={props.searchISBN} action="">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">ISBN</span>
                                </div>
                                <input onChange={props.handleSearch} type="text" className="form-control" aria-label="ISBN" aria-describedby="basic-addon1" />
                                <div className="input-group-append">
                                    <button className="btn btn-outline-none" type="submit" id="isbn-search-btn">Search</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookSearchBar