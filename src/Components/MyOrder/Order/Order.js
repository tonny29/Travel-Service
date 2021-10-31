import React from 'react';


const Order = ({myOrder}) => {
    // console.log(myOrder);

    return (
        <div>
          <p>this is  order{myOrder.name}</p>  
        </div>
    );
};

export default Order;