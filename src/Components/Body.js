import React from "react";
import Order from "./Order";

export default ({f,products,deleteF,updateF})=>{

    
    return (
        <main>
            {
                products.map((e)=>{
                    return<Order key={e.id} f={f} product = {e} deleteF={deleteF} updateF={updateF}/>
                })
            }
        </main>   
    )
}