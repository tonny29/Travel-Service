import axios from 'axios';
import { useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from "react-router-dom";
import UseAuth from '../Hooks/UseAuth';
import './ServiceDetail.css';

import './ServiceDetail.css';
const ServiceDetail = () => {
    const {user}=UseAuth();
    const [data,setData]=useState([]);
    useEffect(()=>(
        fetch('https://howling-citadel-32119.herokuapp.com/tour')
        .then(res=>res.json())
        .then(data=>setData(data))
    ),[])
    const {_id}=useParams();
    const details=data.find((detail)=>detail._id===_id);
    // console.log('this is details',details);

    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        // console.log('this is data',data);
        axios.post('https://howling-citadel-32119.herokuapp.com/myOrder',data)
        .then(res=>{
            if(res.data.insertedId){
                alert('Your Booking Is Succecfully Added..')
                reset();
            }
        })
    };
    

    return (
        <div>
            <div className="service-top">
            <h1>!!HERE YOU GOING TO BOOK YOUR TOUR!!</h1>
            <p>“Do not follow where the path may lead. Go instead where there is no path and leave a trail” – Ralph Waldo Emerson
            </p>
            </div>
            <div className="service-middle row">
                <Col lg={6}>
                <div className="detail-img">
                        <img src={details?.image} alt="" />
                        <h3>Name of country : {details?.name}</h3>
                        <p>DESCRIPTION : {details?.description}</p>
                        <h5>COST : {details?.cost}</h5>
                    </div>
                    </Col>
                <Col lg={6}>
                <form onSubmit={handleSubmit(onSubmit)}>   
                    <div className="input-tag">
                    <input  {...register("name")} placeholder="enter your name" defaultValue={user.displayName}/>             
                    <input  {...register("email")} placeholder="enter you email" defaultValue={user.email}/>    
                    <input  {...register("country name")} defaultValue={details?.name}/>    
                    <input  {...register("cost")} defaultValue={details?.cost}/>    
                    <input  {...register("phone")} placeholder="enter you number" required/>    
                    <input  {...register("gender")} placeholder="enter you gender" required/>  <br /><br />  
                    <button className="btn-style">submit information</button>
                    </div>
                </form>
                </Col>
            </div>
        </div>
    );
};

export default ServiceDetail;