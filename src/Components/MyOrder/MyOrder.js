import React, { useEffect, useState } from 'react';
import UseAuth from '../Hooks/UseAuth';
import Order from './Order/Order';
import './MyOrder.css';


const MyOrder = () => {
    const {user}=UseAuth();
    const [order,setOrder]=useState([]);
    useEffect(()=>{
        fetch('https://howling-citadel-32119.herokuapp.com/myOrder')
        .then(res=>res.json())
        .then(data=>setOrder(data))
    },[])
    // console.log('order of my',order);
    const orderItem=order.filter((orderMine)=>orderMine.name===user.displayName);
    
    
    return (
        <div>
            <h1>MY ORDERS</h1>
            <div>
            {
                orderItem.map(myorder=><Order
                     myOrder={myorder}
                      key={myorder._id}
                      ></Order>)
            }
            </div>
        </div>
    );
};

export default MyOrder;