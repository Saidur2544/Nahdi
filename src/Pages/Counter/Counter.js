import React from 'react';
import "./Counter.css";

const Counter = () => {
    return (
        <div id="counter_section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="counter-item">
                            <h2>100%</h2>
                            <h4>Quality</h4>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="counter-item">
                            <h2>2680</h2>
                            <h4>Patients a year</h4>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="counter-item">
                            <h2>39</h2>
                            <h4>People working</h4>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="counter-item">
                            <h2>24</h2>
                            <h4>Years of experience</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;