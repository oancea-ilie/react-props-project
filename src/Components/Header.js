import React, { useEffect, useState } from "react";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";


const Header =({products})=>{

    let [lastProduct, setLastProduct] = useState();

    useEffect(()=>{
        if(products.length>0){
            setLastProduct(products[products.length-1].name);
        }else{
            setLastProduct('');
        }
    },[products])

    return (
        <header>
            <HeaderLeft products = {products}/>
            <h1>Restaurant</h1>
            <HeaderRight lastProduct={lastProduct}/>
        </header>
    )
}
export default Header;