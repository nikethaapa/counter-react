import { useState } from "react";
import ReactDOM from "react-dom/client";
import "./counter.css";


function Counter() {
    const [count, setcount] = useState(0)
    const [times,settimes]=useState(0)
    const [change,setchange]=useState(false)
  

    const inc = () => {
        setcount(count + 1)
        settimes(times + 1)
        setchange(true)
       
    }
    const dec = () => {
        if (count > 0) {
            setcount(count - 1)
            settimes(times + 1)
            setchange(true)
            
        }

    }
    const reset = () => {

        setcount(0)
        settimes(0)
        setchange(true)
        
    }
    return (
    <div className="counter-container">
    <div className="counter-card">
        <h1 className="card">{count}</h1>
        {
            change && count===0?<h2 className="min">Minimum limit reached</h2>:change?<h2 className="count">Count: {times} </h2>:null
        }
        <div className="buttons">
            <button onClick={inc}>Increment</button>
            <button onClick={reset}>Reset</button>
            <button onClick={dec}>Decrement</button></div>
    </div>
    </div>)
}
export default Counter;