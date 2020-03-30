import axios from "axios";

export default {

    login: (email, password) => {
        return axios.post("/api/auth/login", { email, password });
    },

    logout: () => {
        return axios.get("/api/auth/logout");
    },

    signup: (email, password) => {
        return axios.post("/api/auth/signup", { email, password });
    },

    listBook: (image, title, author, ISBN, condition, price, email) => {
        return axios.post("/api/listing/", { image, title, author, ISBN, condition, price, email })
    },

    display: () => {
        return axios.get("/api/listing")
    },

    deleteBook: (id) => {
        return axios.delete("/api/listing/" + id);
    }
};