import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import "./Service.css";
const Service = () => {
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('./medicalservice.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, []);
    return (
        <div id="service-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <h1 className="service-heading">Special High-quality Service</h1>
                        <p className="service-para">Since its founding Brivona has been providing its patients with the full medical care, encompassing outpatients services, is neurology, laboratory, imaging diagnostics and more.</p>
                    </div>
                </div>
                <div className="row mt-2">
                    {
                        service.map(serviceItem => <ServiceCard
                            key={serviceItem.id}
                            serviceItem={serviceItem}
                        ></ServiceCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Service;