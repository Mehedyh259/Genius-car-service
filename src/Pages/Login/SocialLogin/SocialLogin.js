import React from 'react';
import google from '../../../images/social/google-logo.png';
import facebook from '../../../images/social/facebook-logo.png';
import github from '../../../images/social/github-logo.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {

    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

    let errorElement;
    if (loading || loading1) {
        return <Loading></Loading>
    }

    if (error || error1) {
        errorElement = <p className="text-danger">Error: {error?.message} {error1?.message} </p>

    }
    if (user || user1) {
        navigate('/home');
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='w-50 bg-primary'></div>
                <p className='mt-2 px-2'>OR</p>
                <div style={{ height: '1px' }} className='w-50 bg-primary'></div>
            </div>
            {errorElement}
            <div >
                <button onClick={() => signInWithGoogle()} className="btn btn-info d-flex align-items-center justify-content-center w-75 d-block mx-auto my-2">
                    <img style={{ width: '30px' }} src={google} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
                <button className="btn btn-info d-flex align-items-center justify-content-center w-75 d-block mx-auto my-2">
                    <img style={{ width: '30px' }} src={facebook} alt="" />
                    <span className='px-2'>Facebook Sign In</span>
                </button>
                <button onClick={() => signInWithGithub()} className="btn d-flex align-items-center justify-content-center btn-info w-75 d-block mx-auto my-2">
                    <img style={{ width: '30px' }} src={github} alt="" />
                    <span className='px-2'>Github Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;