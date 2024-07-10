import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Car from './car.js';

function Bicycle(props){
return <h2>
  I am a {props.brand.model}!
</h2>
}

function Garage() {
  const Bicycleinfo = {name: "ford",model: "Mustang"};
  return (    
    <>
      <h3>I am Green</h3>
      <Bicycle brand={Bicycleinfo} />
    </>
  );
}
function Football(){
  const shoot = (a)=>{
    alert (a);
  }
  return (
    <button onClick={()=> shoot("goal!")} >Take the shot!</button>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Football />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
