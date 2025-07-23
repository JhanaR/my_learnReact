import {useState} from 'react';

function CounterEven(){
const [count, setCount] = useState(0);

const isEven = count%2 === 0

return(
    <div style={{ textAlign: "center" }}>
    <h1>{count}</h1>
    <p> {isEven ? "Even" : "Odd"}</p>
    <button onClick ={()=>setCount(count+1)}>INC</button>
    <button onClick ={()=>setCount(count-1)}>Dec</button>
    <button onClick ={()=> setCount(0)}>Reset</button>
    </div>
)
}

export default CounterEven;