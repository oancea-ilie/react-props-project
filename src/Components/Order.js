import React from "react";
import OrderNumbers from "./OrderNumbers";


export default ({f, product,deleteF, updateF})=>{

    let handleDeleteProduct=()=>{
        deleteF(product.id);
    }

    let handleUpdateProduct=()=>{
        updateF(product.id);
    }

    return (
            <div className="order">
                <div className="left">
                    <h1>{product.name}</h1>
                    <div className="btns">
                        <a href="#" className="update-btn" onClick={handleUpdateProduct}>Update</a>
                        <a href="#" className="delete-btn" onClick={handleDeleteProduct}>Delete</a>
                    </div>
                </div>
                <OrderNumbers f={f} product = {product}/>
            </div>
    )
}