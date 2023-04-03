import React from 'react';
import './App.css';
import { Greet } from './component/Greets';
import { TypeObject } from './component/TypeingObject';
import { ArrayOfObjects } from './component/ArrayOfObjects';
import { UnionOfString } from './component/UnionOfString';
import { Button } from './component/Button';

function App() {
  const personname = {
    first:"Ajay",
    last:"Madhav"
  }
  const nameList =
  [
     {
      first:"Ajay",
      last:"Madhav",
  },
  {
    first:"Siddu",
    last:"Reddy",
  },
  {
    first:"Praveen",
    last:"Kumar",
  },
]
  return (
    <div className="App">
      <Greet name = "Ajay" messageCount={10} isLoggedIn={false} />
      <TypeObject name={personname}/>
      <ArrayOfObjects names = {nameList}/>
      <UnionOfString status = 'sucess'/>
      <Button handleClick={() => {
        console.log("Button Clicked")
      }} />
    </div>
  );
}

export default App;
