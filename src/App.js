import React,{useState} from 'react';
import Parent from './parent.js';
import './App.css';
import CounterContext from './countercontext.js';

function App() {
  
  //let [count,setcount]=useState(3034);
   let countstate = useState(1);
  return (
    <CounterContext.Provider value={countstate}>

    
  <div>

   
  <Parent/> 

  </div> 

  </CounterContext.Provider>
   );
}

export default App;
 // parent -> child -> grand child