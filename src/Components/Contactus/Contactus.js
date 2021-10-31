import { createUserWithEmailAndPassword, getAuth } from '@firebase/auth';
import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UseAuth from '../Hooks/UseAuth';
import './Contactus.css';

const Contactus = () => {
    // useauth \\
    const {signInWithGoogle}=UseAuth();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState('');
    const [success,setSuccess]=useState('');
    console.log(email,password);
    // emailHandlar\\
    const emailHandlar=(e)=>{
        const email=e.target.value;
        setEmail(email);
        
    }
    // PasswordHandlar\\
    const passwordHandlar=(e)=>{
        const password=e.target.value;
        setPassword(password);
    }

    // Registration Handlar \\
    const registrationHandlar=(e)=>{
        e.preventDefault();
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
            setSuccess("SuccessFully Regitration,Please Login Now");
            const user = result.user;
            console.log(user);
        })
        .catch((error) => {
            const message = error.message;
            setError(message);
        });
        
    }
    return (
        <div className="btn-style contact-style row">
            <Col lg={6}>
            </Col>
                <Col lg={6}>
                    
                        <div className="input">
                        <form onSubmit={registrationHandlar}>
                            <h2>Please Sign In </h2>
                            <label htmlFor="frist"></label>
                            <input type="name" placeholder=' frist name'id="frist"/>
                            <br /><br />
                            <label htmlFor="last"></label>
                            <input type="email" placeholder='last name' id="last" />
                            <br /><br />
                            <label htmlFor="mail"></label>
                            <input onChange={emailHandlar} type="email" placeholder='enter your email' id="mail" required/>
                            <br /><br />
                            <label htmlFor="password"></label>
                            <input onChange={passwordHandlar} type="password" placeholder='enter your password' id="password" required/>
                            <br /><br />
                           <input type="password" placeholder='re-enter your password' required/>
                           <br /><br />
                            <input type="submit" value='Submit' />
                            
                            <p className="text-success">{success}</p>
                            <p className="text-danger">{error}</p>
                        </form>
                        <p>Already have an account?<Link to="/login">Login</Link></p>
                        <button onClick={signInWithGoogle}><i class="fab fa-google"></i>{' '}Google Sign In</button>
                        </div>
                    
                
                </Col>
        </div>
    );
};

export default Contactus;