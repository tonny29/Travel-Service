import React from 'react';

const AllOrderList = ({allorderlist}) => {

    // console.log(allorderlist);
    return (
        <div>
            <p>this is all order list{allorderlist.name}</p>
        </div>
    );
};

export default AllOrderList;