import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `https://lit-temple-73036.herokuapp.com/service`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    }

    return (
        <div>
            <h2 className='text-center'>Add a service</h2>
            <form className='w-50 mx-auto d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>

                <input className='mb-2' placeholder='Name' {...register("name")} />
                <textarea className='mb-2' placeholder='Description' {...register("description", { required: true })} />
                <input className='mb-2' placeholder='Price' type='number' {...register("price", { required: true })} />
                <input className='mb-2' placeholder='Photo URl'  {...register("img", { required: true })} />


                <input type='submit' value="Add Service" />
            </form>
        </div>
    );
};

export default AddService;