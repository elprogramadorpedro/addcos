// um hooks é uma simple funcao

import {useState} from 'react'

export const useCounter = (initialValue = 10) =>{
    const [counter, setCounter] = useState(initialValue);

    const increment = (value = 1) =>{
        setCounter(counter + value)
    }

    const decrement =(value = 1)=>{
        //validacion para que caunter pare en cero
       // if(counter === 0) return;
        setCounter(counter - value)
    }

    const reset =()=>{
        setCounter(initialValue)
    }

    return{
        counter,  // osea siempre regresando el mismo objeto
        increment,
        decrement,
        reset,



    }
}