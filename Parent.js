import React,{useState,useEffect, useCallback} from 'react'
import MessageComponent from './MessageComponent'
import Timer from './Timer'

function Parent(props) {
    const [count,setCount]=useState(0)
    const [min,setMin]=useState(0)
    const updateMinute=useCallback((x)=>{setMin(x)})
    //console.log(min)
    return (
        <div>
            <div id="counter">
            <pre><h1>{count}</h1><button onClick={()=>setCount(count+1)}>Increment</button></pre></div>
            <div id="timer "><Timer update={updateMinute}/></div>
            <div id="msg"><MessageComponent value={min}/></div>
        </div>
    )
}

export default React.memo(Parent)
/*/*shouldComponentUpdate(nextProps, nextState) {
        if (this.props.number === nextProps.number) {
          return false;
        } else {
          return true;
        }
      }
      const[index,setIndex]=useState(0)
      const onchange=(data)=>{
          setIndex(data)
          console.log(data)
      }*/
