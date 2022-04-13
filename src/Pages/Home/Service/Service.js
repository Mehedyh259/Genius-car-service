import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { name, description, img, price, id } = service;

    const navigate = useNavigate();

    const navigateToServiceDetail = (id) => {
        navigate(`/service/${id}`);
    }
    return (
        <div className='service'>
            <img src={img} alt="" />
            <div className="p-3">
                <h2>{name}</h2>
                <h4>Price: ${price}</h4>
                <p><small>{description}</small></p>
                <button onClick={() => navigateToServiceDetail(id)} className='btn btn-sm btn-primary'> book this service</button>
            </div>
        </div>
    );
};

export default Service;