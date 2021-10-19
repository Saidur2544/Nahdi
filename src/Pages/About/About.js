import React from 'react';
import Breadcrumb from '../Shared/Breadcrumb/Breadcrumb';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const About = () => {
    return (
        <div>
            <Header></Header>
            <Breadcrumb
                pageName="About Us" 
                title="About"
            ></Breadcrumb>
            <Footer></Footer>
        </div>
    );
};

export default About;