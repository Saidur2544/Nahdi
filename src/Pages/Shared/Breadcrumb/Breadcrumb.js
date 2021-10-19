import React from 'react';
import "./Breadcrumb.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight, faArrowRight, faArrowRightToFile, faCoffee, faLongArrowAltLeft, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
const Breadcrumb = ({ pageName, title }) => {
    return (
        <div id="breadcrumb">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mx-auto">
                        <h1 className="breadcrumb-heading"> {pageName} </h1>
                        
                        <p className="breadcrumb-para"> Home   <FontAwesomeIcon className="icon-arrow" icon={faArrowRight} />   {title}</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Breadcrumb;