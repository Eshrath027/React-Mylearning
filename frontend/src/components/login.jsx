import React, { Component } from "react";
import Navbar from "./Navbar";
import './login.css';
import img from "./images/img2.jpg";

class Login extends Component {

    render() {
        return (
            <>
            <Navbar/>
            <div class="loginbox">
            <img src={img} alt="img" class="avatar" width="80" height="80" style={{ opacity: 1}} />
                <h1>Login Here</h1>
                <form>
                    <p>Username</p>
                    <input type="text" name="" placeholder="Enter your Username" />
                    <p>password</p>
                    <input type="password" name="" placeholder="Enter your Password" /><br />
                    <input type="submit" name="" value="login" /><br />
                    <a href="google.com">lost your password</a><br />
                    <a href="http://localhost:3000/signup">dont have an account?</a>


                    



                </form>
     
            </div>
            </>

        )
    }
}
export default Login