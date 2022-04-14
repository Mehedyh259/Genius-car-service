import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [agree, setAgree] = useState(false);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);


    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        // const agree = event.target.terms.checked;
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        if (agree) {
            createUserWithEmailAndPassword(email, password);
        }
    }

    if (user) {
        navigate('/home');
    }

    return (
        <div>
            <Container>
                <div className='w-50 mx-auto my-5 p-3 mb-3 rounded shadow'>
                    <h2 className='text-primary text-center'>Please Register</h2>
                    <Form onSubmit={handleSubmit} className=''>
                        <Form.Group className="mb-3" controlId="formBasicName">
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
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            {/* <Form.Check variant='text-danger' type="checkbox" name='terms' id='terms' label="Accept Genius Car Terms and Conditions" /> */}
                            <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                            <label
                                className={`ps-2 ${agree ? 'text-success' : 'text-danger'}`}
                                htmlFor="terms">Accept Genius Car Terms and Conditions
                            </label>
                        </Form.Group>

                        <Button disabled={!agree} variant="primary d-block w-50 mx-auto mb-2" type="submit">
                            Register
                        </Button>
                    </Form>
                    <p>Already have an account? <span style={{ cursor: 'pointer' }} onClick={() => navigate('/login')} className='text-danger'>Please Login</span></p>
                    <SocialLogin></SocialLogin>
                </div>
            </Container>
        </div>
    );
};

export default Register;