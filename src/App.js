import React ,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './test'
import Event from './eventhandler'

function App() {
const[OurArray,SetOurArray] =useState( [
  { id:'1',text:"hello this is text one"},
  { id:'2',text:"hello this is text two"},

  { id:'3',text:"hello this is text three"},

 ]);
  
  const EventHandler = (dummyEvent)=>{
// SetOurArray(OurArray.concat(dummyEvent))
 SetOurArray((newArrayVal)=> newArrayVal.concat(dummyEvent))

  } 
  return (
    <div className="App">
    
        
     <h1 >Hello Duck</h1>
     <Event onEvent={EventHandler}/>
     <Test test={OurArray} />
    </div>
  );
}

export default App;
