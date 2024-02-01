import React, { useState , useEffect } from 'react'
import axios from 'axios';
import {Link, redirect } from 'react-router-dom';

function Products() {

    const [products , setProducts] = useState([]);

    const baseURL = 'http://localhost:3001/products';

    useEffect(() => {
        console.log('Product before  fetch :- ' , products);
      function GetApi() {
        axios.
        get(baseURL).then((data) => {
            console.log(data);
            setProducts(data.data);
            console.log('Products data :- ' ,products );
        })
      }
    GetApi();
      console.log('product after fetching :- ' , products)

    }, [products.length , products.name])


    function DeleteProduct(id) {
        debugger;
        axios.delete(baseURL+'/'+id)
        .then((data)=> {
            setProducts(data.data);
            console.log("Products after deleting the product Id:  " + id  +" is : "+ products);
        })
        .catch((error) => {
            console.log("Error in deleting the product");
        })
    }
    
    const handleAddOnClick =  ()=>{
        return  window.location='./addProduct';
    }

  return (
    <>
        <h2>Products</h2> <button onClick={handleAddOnClick}>Add Product</button>
        <br/>
        {products.map((items , index) => {
            return (
                <li key={index}>Product Name:-  {items?.name}</li>
            );
        })}
        <br/>
        <table border={1}>
            <tr>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th colSpan={3}>Actions buttons</th>
            </tr>
            {products.map(item => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td colSpan={2}>
                   <Link to={`/editproduct/${item.id}`}>Edit</Link><br />
                   {/* <a href="#" onClick={DeleteProduct(item.id)}>Delete</a>  */}
                   
                </td>
              </tr>
            ))}
          </table>


    </>
  )
}

export default Products