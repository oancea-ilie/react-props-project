import React, {useEffect, useState} from "react"
import Form from "./Components/Form"
import Header from "./Components/Header"
import Body from "./Components/Body"


const App = ()=>{


  let [products, setProducts] = useState([
      {
          id: 1,
          name: "Banane",
          orders: 0
      },
      {
          id: 2,
          name: "Portocale",
          orders:0
      },
      {
          id: 3,
          name: "Mandarine",
          orders: 0
      }
  ]);

  let [currProduct , setCurrProduct] = useState();

  let handleOrders=(index,value)=>{

      setProducts((prev)=>{
          let prevProducts = [...prev];
          let currProduct = {...prevProducts[index]};

          currProduct.orders += value;
          
          prevProducts[index] = currProduct;
          
          return prevProducts;
      });
  }

  let handleDeleteProduct = (id)=>{
    setProducts((prev)=>{
      let products = prev.filter(e => e.id !=id);
      return products;
    })
  }

  let getcurrProduct = (id)=>{
    products.forEach(e=>{
      if(e.id == id){
        setCurrProduct(e);
      }
    })
  }

  let handleUpdateProduct =(newName)=>{

    if(currProduct){

      setProducts(prev=>{
        let prevProducts = [...prev];

        prevProducts.forEach(e=>{
          if(e.id == currProduct.id){
              e.name = newName;
          }
        })


        return prevProducts;
      })

      setCurrProduct("");

    }
  }

  let handleAddProduct = (product)=>{
      if(products.length>0){
        product.id = products[products.length-1].id+1;
      }else{
        product.id = 1;
      }
      setProducts(prev =>{
          return [
              ...prev,
              product
          ]
      });
  }



  return (
    <div className="wrapper">
      <Header products = {products}/>
      <Body f = {handleOrders} products ={products} deleteF ={handleDeleteProduct} updateF ={getcurrProduct}/>
      <Form addPorduct={handleAddProduct} currProd = {currProduct} handleUpdate={handleUpdateProduct} />
    </div>
  )
}

export default App;