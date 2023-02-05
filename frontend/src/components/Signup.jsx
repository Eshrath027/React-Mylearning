import React, { Component } from "react";
import "./Signup.css";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Home from "./Home";
import img from './images/img4.jpg';
class Signup extends Component {
    render() {
        return (
            <>
                <div class="loginbox">
                <img src={img} alt="img" class="avatar" width="80" height="80" style={{ opacity: 1}} />

                    
                    <h1>Sign up</h1>
                    <form>
                        <p>Username</p>
                        <input type="text" name="" placeholder="Enter your Username" />
                        <p>Email id</p>
                        <input type="text" name="" placeholder="Enter your Email" />
                        <p>password</p>
                        <input type="password" name="" placeholder="Enter your Password" /><br />
                        <input type="checkbox" id="box" name=""/><label for="box"> Remember the password</label><br></br>
                        <input type="submit" name="" value="Sign up" /><br />







                    </form>

                </div>



            </>
        )
    }
}
export default Signup;
