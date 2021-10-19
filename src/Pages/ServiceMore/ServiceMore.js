import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Breadcrumb from '../Shared/Breadcrumb/Breadcrumb';
import Header from '../Shared/Header/Header';

const ServiceMore = () => {
    const { serviceId } = useParams();

    const [serviceall , setServiceal] = useState([]);
    const [singleService, setSingleService] = useState([]);

    useEffect(()=>{
        fetch('/medicalservice.json')
        .then(res => res.json())
            .then(data => setServiceal(data))
    }, [])

    useEffect(() => {
        const serviceFount = serviceall.find(e => e.id == serviceId);
        setSingleService(serviceFount);
    }, [serviceall]);

    console.log(singleService?.name)
    return (
        <div>
            <Header></Header>
            <Breadcrumb
                pageName="Services"
                title="Service Details"
            ></Breadcrumb>
            <div id="service_more">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <img src={singleService?.img_url} alt="" />
                        </div>
                        <div className="col-lg-6">
                            <h1>Our Service Overview</h1>

                            <h3>{singleService?.name}</h3>
                            <p>{singleService?.short_description}</p>
                            <p>{singleService?.long_description}</p>\
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceMore;