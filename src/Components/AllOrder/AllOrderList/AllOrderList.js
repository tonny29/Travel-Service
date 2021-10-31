import React from 'react';

const AllOrderList = ({allorderlist}) => {

    // console.log(allorderlist);
    return (
        <div className="my-order">
            <p>Customers Name: {allorderlist.name}</p>
            
        </div>
    );
};

export default AllOrderList;