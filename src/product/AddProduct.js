import React , { useState } from 'react'
import axios  from "axios";

function AddProduct() {
    
    const [product , setproduct] = useState({
        name: "" , 
        quantity: 0 , 
        price: 0 , 
        image: '' 
    });

    const baseURL = "http://localhost:3001/product";

    // const handleOnClick =  () =>{

    // }

    function onClickAddProduct() {
        console.log('product is now :- ',product)
        axios
        .post(baseURL, product)
        .then((data) => {
            console.log('data is :- ' , data);
            if(!data){ 
                return  console.log("The product was added. Data is now:- "  + data);
        }
            else {console.log(data)}
        })
        .catch((err) => console.error(`Error! ${err}`))
    }

  return (
   <>
     <h2>AddProduct</h2>
     <form onSubmit={e=>{e.preventDefault();onClickAddProduct()}} >
        <label>
            Product Name:
            <input type="text" name="name" value={product.name} onChange={(e)=>{setproduct({...product, name : e.target.value })}} />
        </label>
        <br />
        <br />
        <label>
            Quantity:
            <input type='number'  name="quantity" value={product.quantity} onChange={(e)=>{setproduct({...product, quantity : e.target.value })}}/>
        </label>
        <br/>
        <label>
            Price: 
            <input  type="number" name="price" value={product.price} onChange={(e)=>{setproduct({...product, price: e.target.value})}} />
        </label>
        <br/>
        <button  type="submit">Add to Inventory</button>
     </form>
   </>
  )
}

export default AddProduct