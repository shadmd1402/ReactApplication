import React, { useEffect, useState } from "react";
import Header from "../pages/Header";
import axios from "axios";

function Hello() {
  const [count, setCount] = useState(0);
  const [post, setPost] = React.useState([]);
  const [error, setError] = React.useState(null);

    const baseURL = "http://localhost:3001/products";
    //https://jsonplaceholder.typicode.com/users
    //"https://localhost:3001/products";

  // debugger;
//   useEffect(() => {    
//       fetch.get("https://jsonplaceholder.typicode.com/users")
//         .then((data) => {
//             console.log(" API then data:-- ",data);
//           setPost(data?.data);
//         });
//     }, []);
    

  // if(!post) return null;

  const click = () => {
    setCount(count + 1);
  };
useEffect(() => {
  function API(){
    //debugger;
    fetch("http://localhost:3001/products")
        .then((res) => res.json())
        .then((json) => { setPost(json)});
};
  API();
}, []);



  return (
    <>
      <Header />
      <div>
        <h1>Hello World</h1>
      </div>
      <div>
        <button onClick={click}>Increement</button>
        <h1>Count : {count}</h1>
      </div>
      <div>
        <h2>API Data</h2>
        <div>
      Users
      {post.map((item, i) => {
        return (
          <div key={i}>
            <p>{item?.name}</p>
          </div>
        );
      })}
    </div>
      </div>
    </>
  );
}


export default Hello;
