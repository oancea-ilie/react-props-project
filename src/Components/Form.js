import React, { useEffect, useState } from "react";


const Form = ({addPorduct, currProd, handleUpdate, setLastOrder})=>{

    let [pName, setPname] = useState("");
    let input = document.querySelector(".name");

    let handleUpdateProduct = ()=>{
        handleUpdate(pName);
        input.value = "";
        setPname("");
    }

    let handleAddProduct=()=>{
        let obj={
            name: pName,
            orders: 0
        }

        if(pName){
            addPorduct(obj);
            input.value = "";
            setPname('');
        }  

    };

    let handleChange=(e)=>{
        let obj = e.target;
        setPname(obj.value);
    }

    useEffect(()=>{
        if(currProd){
            setPname(currProd.name);
            input.value = currProd.name;
        }
    },[currProd]);

    return (
        
        <footer>
            <input onChange={handleChange} className="name" type="text" placeholder="ENTER PRODUCT NAME..."/>
            {
                currProd
                ? <a href="#" onClick={handleUpdateProduct}>UPDATE PRODUCT</a>
                : <a href="#" onClick={handleAddProduct}>ADD PRODUCT</a>
            }
            
        </footer>
    )
}

export default Form;