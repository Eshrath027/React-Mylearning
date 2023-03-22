import React, { Component } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import img from './images/img2.jpg';
import "./background.css";
import immg from './images/img4.jpg'
import ptt from './images/pt.png'
import c from './images/compass.jpg'
import puu from './images/pu.png'
import vac from './images/vaccation.jpg'







class Home extends Component {
    render() {
        return (
            <>
                <Navbar />

                <div>
                    <img src={puu} alt="img" class="travel" width="1560" height="680" style={{ opacity: 1 }} />
                </div>
                <div className="row g-3">
                    <div className=" row d-flex justify-content-center align-items-center">
                        <div className="col">
                            <h1 className="heading">traWell</h1>
                            <h3 className="tagline" style={{ paddingTop: "40px",paddingLeft:"100px" }} >
                                come out of your shell and have a safe and smooth vacation
                            </h3>
                        </div>

                        <div className="col">
                            <img
                                style={{ height: "700px", width: "700px", paddingTop: "40px" }}
                                src={ptt}
                                alt="abc"
                            />
                        </div>
                    </div>
                </div>
                <div
                    className="row d-flex justify-content-center align-items-center"
                    style={{ background: "#FFFFFF" }}
                >
                    <div className="col">
                        <h3 className="title" style={{ color: "000000" ,paddingLeft:"30px"}}>
                            has various options
                        </h3>
                        <p className="description" style={{ color: "000000",paddingLeft:"30px" }}>
                            can customise what kind of places need
                            to be there around the place u visit 
                            and easy inferface so that u can just drag 
                            and drop your choices of places
                        </p>
                    </div>
                    <div className="col">
                        <img
                            style={{ height: "300px" ,width:"300"}}
                            src={vac}
                            alt="img2"
                        />
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}
export default Home;