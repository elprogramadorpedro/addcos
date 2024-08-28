
import { useCounter } from "../hooks/useCounter";
export const CounterWhithCustomHooh = () => {
// custom hook para manejar counter

const {counter, increment, decrement, reset} = useCounter();



  return (
    <>
    <h1>Counter with Hook: {counter}</h1>
    <hr/>
    <button onClick={()=>increment(2)} className="btn btn-prymary">+1</button>
    <button onClick={reset} className="btn btn-prymary">Reset</button>
    <button onClick={()=>increment(2)}  className="btn btn-prymary">-1</button>
    </>
  )
}
