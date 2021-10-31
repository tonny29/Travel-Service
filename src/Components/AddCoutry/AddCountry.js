import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddCountry = () => {
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        const addedTour={
            name:data.name,
            description:data.description,
            prize:data.cost,
            image:data.image
        }
        console.log(addedTour);
        console.log('this is data',data);
        const url='https://howling-citadel-32119.herokuapp.com/addedTour';
        fetch(url,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(addedTour),
        })
        .then((res)=>console.log('database connected',res));
    };
    return (
        <div>
           <form onSubmit={handleSubmit(onSubmit)}>   
                    <div className="input-tag">
                    <input  {...register("name")} placeholder="country name"/>             
                    <input  {...register("description")} placeholder="description"/>    
                    <input  {...register("cost")} placeholder="cost"/>    
                    <input  {...register("image")} placeholder="Image link"/>    
                      <br /><br />
                    <button type="submit" className="btn-style">submit information</button>
                    </div>
                </form>
        </div>
    );
};

export default AddCountry;