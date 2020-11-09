import React,{useContext} from 'react';
import CounterContext from './countercontext';

const Child=(props)=>{

  let countervalue = useContext(CounterContext)

  console.log(countervalue)
    
  return (

        <div>
            <h1>counter value {countervalue[0]}</h1>
            <button onClick={

                ()=>{countervalue[1](++countervalue[0])}
                
                
                }>  
            
            
            Increment</button>
        </div>
    )
}


export default Child;