import React, {useState} from 'react';
import {Message} from './Message.js'
import './App.css';

export default function App() {
  
  let [count, setCount] = useState(0)
  let [isMorning, setMorning] = useState(false)
  //let [colorname, setMorning] = useState(false)

  return (
    <div className = {`box ${isMorning ? 'dayLight' : ''}`}>
      <h1> Good {isMorning ? 'Morning' : 'Night'}</h1>
      <h1> The color is {isMorning ? 'Yellow' : 'Dark'}</h1>

      <Message counter={count}/>
      <br/>

      <button onClick={
        ()=> setCount(count + 1)
        }>
         Click here to Update the counter

         <br/>
      </button>
      <br/><br/>
      <button onClick = {()=>setMorning(!isMorning)}> Update Day Light</button>
      <h1> {count == 4 ? 'Stop Playing with the button ;-)' : ''}</h1>
      <h1> {count >= 6 ? 'Hey! I told you to Stop :-O' : ''}</h1>
      {/* <h1>{()=> count = 3 ('stop')} </h1> */}
    </div>
  );
}

// export default App;
