import React from 'react';
import useServices from '../../../hooks/useServices';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {

    const [services] = useServices();


    return (
        <div id='services' className='mb-4 container'>
            <h1 className='services-title'>Our Services: {services.length}</h1>
            <div className='services-container'>
                {
                    services.map((service) => <Service
                        key={service._id}
                        service={service}

                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;