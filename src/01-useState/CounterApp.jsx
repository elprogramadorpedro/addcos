import React, { useState } from 'react'

export const CounterApp = () => {

   // const [count, setCounter] = useState(10)

 //ahora tengo un objeto con tres counter en el state
  const [state, setCounter] = useState({
    counter1:10,
    counter2:20,
    counter3:30,
  });

  const {counter1, counter2, counter3} = state;

  return (
    <>
    <h1>Counter1: {counter1}</h1>
    <h1>Counter2: {counter2}</h1>
    <h1>Counter3: {counter3}</h1>
    <hr />
    <button onClick={
        ()=>setCounter({
            ...state,   //desestruccturacao no importa quantas propiedades tenga ella se esparce y solo sobreescribimos.
            counter1: counter1 + 1,
            counter2: counter1 + 5,
        })
        }>+1</button>
    </>
  )
}





