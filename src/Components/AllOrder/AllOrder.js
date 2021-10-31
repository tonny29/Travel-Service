import React, { useEffect, useState } from 'react';
import AllOrderList from './AllOrderList/AllOrderList';

const AllOrder = () => {
    const [allOrder,setAllOrder]=useState([]);

    useEffect(()=>{
        fetch('https://howling-citadel-32119.herokuapp.com/myOrder')
        .then(res=>res.json())
        .then(data=>setAllOrder(data))
    },[])
    // console.log(allOrder);
    
    
    return (
        <div>
            <h4>this is all order</h4>
            {
                allOrder.map(ordersAll=><AllOrderList 
                key={ordersAll._id}
                allorderlist={ordersAll}
                ></AllOrderList>)
            }
        </div>
    );
};

export default AllOrder;