import React from "react";


const HeaderRight = ({lastProduct})=>{

    return(

        <div className="right">
            <h2>Last Product</h2>
            {
                lastProduct
                ?<h1>{lastProduct}</h1>
                :<h1>No orders yet..</h1>
            }
        </div>
    )
}

export default HeaderRight;