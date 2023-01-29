import React, { Component } from "react";

class Login extends Component {

    render() {
        return (
            <div class="loginbox">
                <img src="logav.png" alt="" class="avatar" width="80" height="80" />
                <h1>Login Here</h1>
                <form>
                    <p>Username</p>
                    <input type="text" name="" placeholder="Enter your Username" />
                    <p>password</p>
                    <input type="password" name="" placeholder="Enter your Password" /><br />
                    <input type="submit" name="" value="login" /><br />
                    <a href="google.com">lost your password</a><br />
                    <a href="google.com">dont have an account?</a>


                    



                </form>
     
            </div>

        )
    }
}
export default Login