import React from 'react';
import Service from '../Service/ServicePart/Service';
import Breadcrumb from '../Shared/Breadcrumb/Breadcrumb';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const ServiceMain = () => {
    return (
        <div>
            <Header></Header>
            <Breadcrumb
                pageName="Our Services"
                title="Service"
            ></Breadcrumb>
            <Service></Service>

            <Footer></Footer>
        </div>
    );
};

export default ServiceMain;