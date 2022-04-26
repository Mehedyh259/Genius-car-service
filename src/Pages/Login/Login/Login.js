
import React, { useRef } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import useToken from '../../../hooks/useToken';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';
    let errorElement;


    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [
        sendPasswordResetEmail,
        sending
    ] = useSendPasswordResetEmail(auth);

    const [token] = useToken(user);


    if (error) {
        errorElement = <p className="text-danger">Error: {error?.message} </p>

    }

    const emailRef = useRef('');
    const passwordRef = useRef('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await signInWithEmailAndPassword(email, password);

    }

    if (token) {
        navigate(from, { replace: true });
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Email Sent')
        } else {
            toast('please enter your email address')
        }
    }
    if (loading || sending) {
        return <Loading></Loading>;
    }
    return (
        <Container>
            <div className='w-50 mx-auto my-5 p-3 mb-3 rounded shadow'>
                <h2 className='text-primary text-center'>Please Login</h2>
                <Form onSubmit={handleSubmit} >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    </Form.Group>
                    <Button variant="primary d-block w-50 mx-auto mb-2" type="submit">
                        Login
                    </Button>
                </Form>
                {errorElement}
                <p>New to Genius Car? <span style={{ cursor: 'pointer' }} onClick={() => navigate('/register')} className='text-primary'>Please Register</span></p>
                <p>Forget password? <span style={{ cursor: 'pointer' }}
                    onClick={resetPassword} className='text-primary'>Reset Password</span></p>

                <SocialLogin></SocialLogin>


            </div>
        </Container>
    );
};

export default Login;