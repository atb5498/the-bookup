import React, { Component } from "react";
import BookDisplayList from "../components/BookDisplayList";
import API from "../utils/API";
import NavBar from "../components/navBar";

import BookSearchBar from "../components/BookSearchBar";

class Display extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            searchField: ""
        }
    }

    componentDidMount() {
        API.display()
            .then(
                response => {
                    const books = [];
                    for (var i = 0; i < response.data.length; i++) {
                        let bookObj = {
                            id: response.data[i]._id,
                            title: response.data[i].title,
                            author: response.data[i].author,
                            image: response.data[i].image,
                            publishedDate: response.data[i].publishedDate,
                            ISBN: response.data[i].ISBN,
                            email: response.data[i].email,
                            price: response.data[i].price,
                            condition: response.data[i].condition
                        }
                        books.push(bookObj);
                    }
                    this.setState({ books: books });
                }
            )
    }

    searchAuthor = (event) => {
        event.preventDefault();
        this.setState({ books: [] })
        API.display()
            .then(response => {
                const books = [];
                for (var i = 0; i < response.data.length; i++) {
                    if ((response.data[i].author).toLowerCase().trim() === (this.state.searchField).toLowerCase().trim()) {
                        let bookObj = {
                            id: response.data[i]._id,
                            title: response.data[i].title,
                            author: response.data[i].author,
                            image: response.data[i].image,
                            publishedDate: response.data[i].publishedDate,
                            ISBN: response.data[i].ISBN,
                            email: response.data[i].email,
                            price: response.data[i].price,
                            condition: response.data[i].condition
                        }
                        books.push(bookObj);
                    } else {
                        console.log("Nothing found");
                    }
                }
                this.setState({ books: books });
            })
    }

    searchTitle = (event) => {
        event.preventDefault();
        this.setState({ books: [] })
        API.display()
            .then(response => {
                const books = [];
                for (var i = 0; i < response.data.length; i++) {
                    if ((response.data[i].title).toLowerCase().trim() === (this.state.searchField).toLowerCase().trim()) {
                        let bookObj = {
                            id: response.data[i]._id,
                            title: response.data[i].title,
                            author: response.data[i].author,
                            image: response.data[i].image,
                            publishedDate: response.data[i].publishedDate,
                            ISBN: response.data[i].ISBN,
                            email: response.data[i].email,
                            price: response.data[i].price,
                            condition: response.data[i].condition
                        }
                        books.push(bookObj);
                    } else {
                        console.log("Nothing found");
                    }
                }
                this.setState({ books: books });
            })
    }

    searchISBN = (event) => {
        event.preventDefault();
        this.setState({ books: [] })
        console.log(this.state.books);
        API.display()
            .then(response => {
                const books = [];
                for (var i = 0; i < response.data.length; i++) {
                    console.log(response.data[i].ISBN);
                    if (response.data[i].ISBN == this.state.searchField) {
                        let bookObj = {
                            id: response.data[i]._id,
                            title: response.data[i].title,
                            author: response.data[i].author,
                            image: response.data[i].image,
                            publishedDate: response.data[i].publishedDate,
                            ISBN: response.data[i].ISBN,
                            email: response.data[i].email,
                            price: response.data[i].price,
                            condition: response.data[i].condition
                        }
                        console.log("ISBN found");
                        books.push(bookObj);
                    } else {
                        console.log(response.data[i].ISBN)
                        console.log("No ISBN found");
                    }

                }
                this.setState({ books: books });
            })
    }

    handleSearch = (event) => {
        this.setState({ searchField: event.target.value })
    }


    render() {
        return (
            <div>
                <div id="post-jumbotron" className="jumbotron jumbotron-fluid">
                    <NavBar />
                    <div className="container">
                        <h1 className="display-4">Books For Sale</h1>
                        <p className="lead">Search for books by title, author, or ISBN.</p>
                    </div>
                </div>

                <BookSearchBar
                    searchISBN={this.searchISBN}
                    searchAuthor={this.searchAuthor}
                    searchTitle={this.searchTitle}
                    handleSearch={this.handleSearch}
                />
                <div className="book-fill">
                    <BookDisplayList books={this.state.books} />
                </div>
            </div>
        );
    }
}

export default Display;
