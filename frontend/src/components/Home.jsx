import React, { Component } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import img from './images/img2.jpg';
import "./background.css";




class Home extends Component {
    render() {
        return (
            <>
                <Navbar />

                <div class="container">
                    <img src={img} alt="img" class="travel" width="1560" height="680" style={{ opacity: 1}} />


                    <div class="centered">traWell</div>
                </div>
                <Footer />
            </>
        )
    }
}
export default Home;