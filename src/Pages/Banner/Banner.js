import React from 'react';
import { Link } from 'react-router-dom';
import "./Banner.css";

const Banner = () => {
    return (
        <div id="banner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <h1 className="head-title"><span>Medical</span> Service</h1>
                        <h1 className="head-title">That you can <span>trust</span></h1>
                        <p className="head-para">Need Professional Help? Our Support staff will answer your Question. <br />
                        Visit us now or Make an appointment
                        </p>
                            <div className="button-about">
                                <Link to="/about">About More...</Link>
                            </div>
                    </div>
                    <div className="col-lg-5"></div>
                </div>
            </div>
        </div>
    );
};

export default Banner;