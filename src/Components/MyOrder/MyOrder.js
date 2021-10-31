import React, { useEffect, useState } from 'react';
import UseAuth from '../Hooks/UseAuth';
import Order from './Order/Order';

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
            <h1>this is myorder</h1>
            {
                orderItem.map(myorder=><Order
                     myOrder={myorder}
                      key={myorder._id}
                      ></Order>)
            }
        </div>
    );
};

export default MyOrder;