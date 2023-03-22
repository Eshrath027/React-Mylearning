import React, { Component } from "react";

class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="page-footer font-small unique-color-dark">
                    <div className="container text-center text-md-left mt-5">
                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 className="text-uppercase font-weight-bold">
                                    traWell
                                </h6>
                                <hr
                                    className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ width: "60px"}}
                                />
                                <p>
                                    TraWell assist you to u to come out of ur shell and enjoy any kind 
                                    of vactions safely.
                                </p>
                            </div>

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase font-weight-bold">
                                    Features
                                </h6>
                                <hr
                                    className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                                    style={{width: "60px"}}
                                />
                                <p>
                                    Music Assistance and Fun games
                                </p>
                                <p>
                                    Residance suggesion
                                </p>
                                <p>
                                    Explore
                                </p>
                                <p>
                                    plan a vacation
                                </p>
                            </div>

                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase font-weight-bold">
                                    Useful links
                                </h6>
                                <hr
                                    className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                                    style={{width: "60px"}}
                                />
                                <p>
                                    <a href="#!">Register with us</a>
                                </p>
                                <p>
                                    <a href="#!">Become an Affiliate</a>
                                </p>
                                <p>
                                    <a href="#!">Privacy Policy</a>
                                </p>
                                <p>
                                    <a href="#!">Help</a>
                                </p>
                            </div>

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase font-weight-bold">
                                    Contact
                                </h6>
                                <hr
                                    className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                                    style={{width: "60px"}}
                                />
                                <p>
                                    <i className="fas fa-home mr-3"></i> India
                                </p>
                                <p>
                                    <i className="fas fa-envelope mr-3"></i>{" "}
                                    traWell@gmail.com
                                </p>
                                <p>
                                    <i className="fab fa-youtube mr-3"></i> UCcJxx0oeS2epUlU4n0IzIBQ
                                </p>
                                <p>
                                    <i className="fab fa-instagram-square mr-3"></i> @traWell
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="footer-copyright text-center py-3">
                    Copyright © 2023:
                        <a href="https://mdbootstrap.com/">{" "} traWell</a>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;