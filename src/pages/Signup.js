import React from "react";
import SignUpForm from "../components/signupForm";

function SignUp() {
    return (
        <div>
            <div id="signup-jumbotron" className="jumbotron jumbotron-fluid">
                <nav className="navbar navbar-dark">
                    <a href="/" className="navbar-brand" id="nameTag">
                        the BookUp
                    </a>
                </nav>
                <div className="container">
                    <h1 className="display-4">Sign Up</h1>
                    <p className="lead">Create an account to use the BookUp.</p>
                </div>
            </div>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <SignUpForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp;