import React from 'react';
import Breadcrumb from '../Shared/Breadcrumb/Breadcrumb';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const Contact = () => {
    return (
        <div>
            <Header></Header>
            <Breadcrumb
                pageName="Contact With US"
                title="contact"
            ></Breadcrumb>
            <Footer></Footer>
        </div>
    );
};

export default Contact;