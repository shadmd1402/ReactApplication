import './App.css';
import React from 'react';
import Hello from './Hello.js';

class abc{
  a
  b;
  constructor(name){
    this.abc= name;
    this.a="a1";
    this.b = name;
  }

  
  
}
function Car(props) {
  return <h2>I am a { props.brand.model } , {props.brand.kt} , State: {props.brand.location.state} !</h2>;
}

function Garage() {
  const carInfo = { name: "Ford", model: "Mustang" , kt :1 , location:{city: 'Varanasi', state:'Uttar Pradesh'}};
  carInfo.kt= 2;
  carInfo.location.city = 'Calcutta';
  return (
    <>
      <h1>City : {carInfo.location.city},  Who lives in my garage? </h1>
      <Car brand={ carInfo } />
    </>
  );
}
function Football() {

  
  const shoot = (a) => {
    //alert(a);
    console.log('Before push:- ', a);
    a.push(1);
    console.log('After push',a);
  }
  return (
    <button onClick={() => shoot([1,2])}>Take the shot!</button>
  );
}

function Demo() {
 
  var myabc= new abc("ABC");
  const count= 9;
  const a=10;

  return (
    
    <div >
      <h1>Hello, {myabc.abc} , Value a: {myabc.a} ,Value b: {(myabc.b)="ABC" ? "YES" : "NO"} </h1>
      <label>Count: {(count)<9 ? "Shad" : a}</label>
      {/* < Garage/> */}
      <br />
      <br />
      <Football/>
      <br />
      <Garage/>
      <br />

      <Hello />

    </div>
  );
}

export default Demo;
