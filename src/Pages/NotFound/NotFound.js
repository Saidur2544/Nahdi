import React from 'react';
import { NavLink } from 'react-router-dom';
import "./NotFound.css";
const NotFound = () => {
    return (
        <div id="notfound">
                <div className="go-back">
                    <NavLink className="go-back-button" to="/home">Go Home</NavLink>
                </div>
        </div>
    );
};

export default NotFound;