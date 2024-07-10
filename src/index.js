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
  const table = ['rount','Oval','Square'];
  return (    
    <>
      <h3>I am Green</h3>
      <ul>
        {table.map((table) => <Table brand = {table}/>)}
      </ul>
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

function MissedGoal(){
  return <h1>MISSED!</h1>
}

function MadeGoal(){
  return <h1>GOAL!</h1>
}

function Goal(props){
  const isGoal = props.isGoal;
  if(isGoal){
    return <MadeGoal/>
  }
  return <MissedGoal/>
}

function Table(props){
  return <li>I am a {props.brand}</li>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
