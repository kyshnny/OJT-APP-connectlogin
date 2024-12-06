import React, { useEffect } from 'react';
import neulogo from '../assets/neu.png';
import neucampus from '../assets/neu.jpg';
import neucropped from '../assets/neu-cropped.jpg';
//import {GoogleOAuthProvider, GoogleLogin} from '@react-oauth/google';
import {useNavigate} from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {

    const navigate = useNavigate();

    useEffect(()=>{
        document.body.classList.add('loginpage-body');
    
        return()=>{
            document.body.classList.remove('loginpage-body');
        };
    }, []);

    const handleLoginClick =()=>{
        navigate('/mainpage');
    };

    /*const responseGoogle = (credentialResponse) => {
        console.log(credentialResponse);
        // handle login success or failure here */

    return (
        <div className="login-container">
            <div className="image-leftside">
                <img src={neucropped}alt="login"/>
            </div>
            <div className="login-rightside">
                <img src={neulogo} alt="neu-logo"></img>
                <div className="login-header"><p>Welcome to NEU's OJT App!</p></div>
                <div className="login-subheader"><p>Please log in using your Institutional Email.</p></div>
                <div className="login-button">
                    <button onClick={handleLoginClick}>Login</button>
                </div>
            </div>    
        </div>
    );
};
export default LoginPage;

/*<GoogleOAuthProvider clientId="921036108893-aafhs3cdvdctntbi9v3kfv80cfa0kd7n.apps.googleusercontent.com"> 
            <div class="container">
                <div class="image-leftside">
                    <img src={neuOJT} alt="login" />
                </div>
                <div class="login-rightside">
                    <img src={neulogo} alt="neu-logo"></img>
                    <h1>Welcome to NEU's OJT App!</h1>
                    <p>Please log in using your Institutional Email.</p>
                    <div className="login-button">
                        <button onClick={handleLoginClick}>Login</button>

                    </div>
                </div>
            </div>
        </GoogleOAuthProvider> */