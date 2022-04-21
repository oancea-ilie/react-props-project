import React from "react";


export default ({products})=>{

    let totalProd = products.length;
    
    let totalOrders= 0;

    products.forEach(e=>{
        totalOrders+= e.orders;
    });

    return(
        <div className="left">
            <h1>Total Products: {totalProd}</h1>
            <h1>Total Ammount: {totalOrders}</h1>
        </div>
    )
}