import React,{useContext} from 'react';
import CounterContext from './countercontext';

const Child=(props)=>{

  let countervalue = useContext(CounterContext)

  console.log(countervalue)
    
  return (

        <div>
            <h1>This is name</h1>
        </div>
    )
}


export default Child;