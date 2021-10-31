import { getAuth, signInWithEmailAndPassword } from '@firebase/auth';
import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
// import { useLocation } from 'react-router';
import { useLocation,useHistory, Link } from 'react-router-dom';
import UseAuth from '../../Components/Hooks/UseAuth';
// import UseAuth from '../Hooks/UseAuth';
import './Login.css';

const Login = () => {
    const {signInWithGoogle,setUser,setIsloading}=UseAuth();
    // console.log(user);
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState('');
    const [success,setSuccess]=useState('');
    console.log(error,success);
     // emailHandlar\\
    const emailHandlar=(e)=>{
      const email=e.target.value;
      setEmail(email);  
  }
  // redirect route google signin \\
  const location=useLocation()
  const history=useHistory();
  const redirectUrl=location.state?.from || '/home';
  const googleSignInRedirect=()=>{
    signInWithGoogle()
    .then((result)=>{
      history.push(redirectUrl);
    })
    .finally(()=>{
      setIsloading(false)
    })
  }
  // redirect route passeord login \\
  const redirectPassword=location.state?.from || '/home';
  const passwordSignInRedirect=(e)=>{
    e.preventDefault();
    passwordLogInHandlar()
    .then((result) => {
      const user = result.user;
      setUser(user); 
      history.push(redirectPassword);
      setSuccess("Yeaaa!! Seccessfully Loged-In")
      console.log(user);
    })
    .catch((error) => {
      const message = error.message;
      setError(message);
    });

  }
  // PasswordHandlar\\m ,
  const passwordHandlar=(e)=>{
      const password=e.target.value;
      setPassword(password);
  }

    const passwordLogInHandlar=(e)=>{
      const auth=getAuth();
     return signInWithEmailAndPassword(auth, email, password)
        
    }
    return (
        <div className="btn-style login-style row">
             <Col lg={6}>
             </Col>   
                <Col lg={6}>
                  <div className="input">
                  <h2>Login</h2>
                  <form onSubmit={passwordSignInRedirect}>
                    <label htmlFor="email"></label>
                      <input onChange={emailHandlar} type="email" placeholder='Enter your email' id="email"/>
                      <br /><br />

                      <label htmlFor="password"></label>
                      <input onChange={passwordHandlar} type="password" placeholder='Enter your password'id="password"/>
                      <br /><br />
                      <input type="submit" value="Submit"/>
                      <br />
                  </form>
                    <p>haven't any account?<Link to='/contact'>Create Account</Link></p>
                    <button onClick={googleSignInRedirect} className="button-style"><i class="fab fa-google"></i>{' '}Google Sign In</button>
                  </div>
               
                </Col>
            </div>
    );
};

export default Login;