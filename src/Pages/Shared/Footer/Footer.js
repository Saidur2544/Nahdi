import React from 'react';
import "./Footer.css";
const Footer = () => {
    return (
        <div id="footer-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <h2 className="footer-heading">About <span>Nahdi</span></h2>
                        <p className="footer-para">Our Clinic has grown to provide a world class facility for the clinic advanced restorative dentistry.</p>
                        <p className="footer-para">We are among the most qualified implant providers in the AUS with over 30 years of quality training and experience.</p>
                    </div>
                    <div className="col-lg-4">
                         <h2 className="footer-heading">Our Services</h2>

                        <p className="footer_item">  Nephrologist Care</p>
                        <p className="footer_item">  Eye Care</p>
                        <p className="footer_item">  Prenatal Care</p>
                        <p className="footer_item">  Rehabilitation Center</p>
                        <p className="footer_item">  Eldery Care</p>
                        <p className="footer_item">  Medical Counseling</p>

                    </div>
                    <div className="col-lg-4">

                        <h2 className="footer-heading">Contact With Us</h2>
                        <p className="footer-para">Email : abc@gmail.com</p>
                        <p className="footer-para">Phone : +25641</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;