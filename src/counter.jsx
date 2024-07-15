import { useEffect, useRef, useState } from "react"
import Button from "./components/Button"
import "./styles.css";
import "./createEmployeeStyle.css"



const Ap=()=>{
    const inputRef=useRef()
    //const [stateValue,setState]=useState(0)
    //console.log(stateValue)
    
    // function increment(){
    //    setState((prev) => prev+1)
    // }

    // function decrement(){
    //     setState((prev) => prev-1)
    //  }

    //  useEffect(()=>{
    //     console.log("counterMounted")
    //     return ()=>{

    //         console.log("CounterUnmounted")
    //     }

    //  },[stateValue])


    return(<div>
        <input ref={inputRef}/>
        <Button handleSubmit={()=>inputRef.current.focus()} name="+" type="Blue"/>
    </div>)




//   (<div>
//         <Button handleSubmit={increment} name="+" type="Blue"/>
//         <br/><br/>
//         <Button handleSubmit={decrement} name="-" type="Blue"/>
//         {/* <button onClick={()=>increment()}>button</button> */}
//     </div>)
}

export default Ap;