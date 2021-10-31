import React from 'react';
import './Order.css';


const Order = ({myOrder}) => {
    console.log(myOrder);

    return (
        <div className="my-order">
         
          <p>My Name : {myOrder.name}</p> 
           <p>Cost : {myOrder.cost}</p>
        <div className="button-style">
        <button>Pending</button>
        <button>Delete</button>
        </div>
        </div>
    );
};

export default Order;