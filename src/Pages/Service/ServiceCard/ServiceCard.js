import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "./ServiceCard.css";

const ServiceCard = ({serviceItem}) => {

    
    return (
        <div className="col-lg-4 my-3">
            <CardGroup className="serviceItem">
                <Card.Img className="service_img" variant="top" src={serviceItem?.img_url} />
                <Card.Body>
                    <Card.Title className="service_name">{serviceItem?.name}</Card.Title>
                    <Card.Text className="service_short_desp">
                        { serviceItem?.short_description.slice(0 , 100)}
                    </Card.Text>

                    <NavLink className="service_details_button" to={`/serviceMore/${serviceItem?.id}`}>Read More</NavLink>
                </Card.Body>
            </CardGroup>
        </div>
    );
};

export default ServiceCard;