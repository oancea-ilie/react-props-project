import React, { useState } from "react";


export default ({f,product})=>{

    let [count, setCount] = useState(0);

    let handleNumbers=(e)=>{
        let obj = e.target;

        if(obj.classList.contains("minus")){
            if(count>0){
                f(product.id-1, -1);
                setCount(prev=>prev-1);
            }
        }
        if(obj.classList.contains("plus")){
            f(product.id-1, +1);
            setCount(prev=>prev+1);
        }
    }
    return (
        <div className="numbers" onClick={handleNumbers}>
            <h2 className="minus">-</h2>
            <h1>{count}</h1>
            <h2 className="plus">+</h2>
        </div>
    )
}