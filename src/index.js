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
  return (
    <>
      <h3>I am Green</h3>
      <Car color="red"/>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
