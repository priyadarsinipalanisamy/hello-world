import React,{useState,useEffect} from 'react'
function Timer(props) {
    const [minute,setMinute]=useState(0)
    const [hour,setHour]=useState(0)
    var x=100000
    
    const updateTimer =()=>{
       if(minute===59){
            setMinute(0)
            setHour(hour+1)
        }
        else
        setMinute(minute+1)
        
    }
    useEffect(()=>{
        const interval=setInterval(updateTimer,x)
        props.update(minute)
        return()=>{
            clearInterval(interval)
        }
    },[minute])
    //console.log("Updating timer component")
    return (
        <div>
           {hour}:{minute}
        </div>
    )
}
export default React.memo(Timer)
/*{hour <10 ? `0${hour}`:{hour}}:{minute<10 ? `0${minute}`:{minute}}*/