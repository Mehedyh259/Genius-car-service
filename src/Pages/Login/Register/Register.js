import React, { useRef } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        console.log(name, email, password);


    }

    return (
        <div>
            <Container>
                <div className='w-50 mx-auto my-5'>
                    <h2 className='text-primary text-center'>Please Register</h2>
                    <Form onSubmit={handleSubmit} className='p-3 mb-3 rounded shadow'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control name="name" type="text" placeholder="Enter Name" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name="email" type="email" placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password" type="password" placeholder="Password" required />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Register
                        </Button>
                    </Form>
                    <p>Already have an account? <span style={{ cursor: 'pointer' }} onClick={() => navigate('/login')} className='text-danger'>Please Login</span></p>
                </div>
            </Container>
        </div>
    );
};

export default Register;