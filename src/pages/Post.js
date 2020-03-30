import React, { Component } from "react";
import BookSearch from "../components/BookSearch";
import request from "superagent";
import BookList from "../components/BookList";
import API from "../utils/API";
import "../App.css";

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            searchField: "",
            condition: "",
            price: "",
            email: ""
        }
    }

    searchBook = (event) => {
        event.preventDefault();

        const isbnInput = document.querySelector("#isbn-input");

        if (isbnInput.value === "") {
            return;
        } else {
            request
                .get("https://www.googleapis.com/books/v1/volumes?q=isbn:" + this.state.searchField)
                .then((data) => {
                    this.setState({ books: [...data.body.items] })
                })
        }
    }

    handleSearch = (event) => {
        this.setState({ searchField: event.target.value })
    }

    handleConditionChange = (event) => {
        this.setState({
            condition: event.target.value
        })
    }

    handlePriceChange = (event) => {
        this.setState({
            price: event.target.value
        })
    }

    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    handleListingSubmit = (event) => {
        event.preventDefault();

        const image = this.state.books[0].volumeInfo.imageLinks.thumbnail;
        const title = this.state.books[0].volumeInfo.title;
        const author = this.state.books[0].volumeInfo.authors[0];
        const ISBN = this.state.books[0].volumeInfo.industryIdentifiers[0].identifier;
        const condition = this.state.condition;
        const price = this.state.price;
        const email = this.state.email;

        const priceInput = document.querySelector("#price-input");
        const emailInput = document.querySelector("#contact-input");
        const conditionInput = document.querySelector("#inputGroupSelect01");

        if (priceInput.value === "" || emailInput.value === "" || conditionInput.value === "") {
            alert("Please provide the book condition, price, and a valid email address.")
        } else {
            API.listBook(image, title, author, ISBN, condition, price, email).then(response => console.log(response.data));
            this.setState({ books: [] })
            document.querySelector("#isbn-input").value = "";
        }
    }

    render() {
        return (
            <div>
                <BookSearch
                    searchBook={this.searchBook}
                    handleSearch={this.handleSearch}
                />
                <BookList
                    books={this.state.books}
                    handleSearch={this.handleSearch}
                    handleConditionChange={this.handleConditionChange}
                    handlePriceChange={this.handlePriceChange}
                    handleEmailChange={this.handleEmailChange}
                    handleListingSubmit={this.handleListingSubmit}
                />
            </div>
        );
    }
}

export default Post;
