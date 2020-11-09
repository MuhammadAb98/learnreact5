import React from 'react';
import Parent from './parent.js';
import './App.css';
import CounterContext from './countercontext.js';

function App() {
  return (
    <CounterContext.Provider value={898}>

    
  <div>

   
  <Parent/> 
  
  </div> 

  </CounterContext.Provider>
   );
}

export default App;
 // parent -> child -> grand child