import axios from 'axios';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import useServiceDetail from '../../../hooks/useServiceDetail';

const Checkout = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId);
    const [user] = useAuthState(auth);

    // const [user, setUser] = useState({
    //     name: 'Mehedy Hasan',
    //     email: 'mehedy@gmail.com',
    //     address: 'Durgapur,Rajshahi',
    //     phone: '01762125990'
    // });
    // const handleAddressChange = e => {
    //     const { address, ...rest } = user;
    //     const newAddress = e.target.value;
    //     const newUser = { address: newAddress, ...rest };
    //     setUser(newUser);
    // }

    const handlePlaceOrder = (event) => {
        event.preventDefault();
        const order = {
            email: user.email,
            service: service.name,
            serviceId: serviceId,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        axios.post('https://lit-temple-73036.herokuapp.com/order', order)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('Your Order Placed successfully')
                }
            })
    }

    return (
        <div className='w-50 mx-auto'>
            <h2>Please Order: {service.name}</h2>
            <form onSubmit={handlePlaceOrder}>
                <input className='form-control' value={user?.displayName} type="text" name='name' placeholder='Name' required readOnly disabled /><br />
                <input className='form-control' value={user?.email} type="email" name='email' placeholder='Email' required readOnly disabled /><br />
                <input className='form-control' value={service.name} type="text" name='service' placeholder='Service' required readOnly disabled /><br />
                <input className='form-control' type="text" name='address' placeholder='Address' required /><br />
                <input className='form-control' type="text" name='phone' placeholder='phone' required /><br />
                <input className='btn btn-primary' type="submit" value='Place order' />
            </form>
        </div>
    );
};

export default Checkout;