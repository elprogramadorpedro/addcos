import React, { useState } from 'react'

export const useForm = (initialForm = {} ) => {
    const [formState, setFormState] = useState(initialForm)
    
    const onInputChange=({target})=>{
        const {name, value} = target;
        setFormState({
            ...formState,
                [name]:value
        });
    }
    

const onResetForm=()=>{
    setFormState(initialForm);
}


    //const {username, email, password} = formState;
  return {
        ...formState,
        formState, //valor de formulario
      onInputChange, // valor para vambiarlo
      onResetForm,// cambia o estado a vacio demostrando que envio os dados 
    //dejo el return el forma de objeto para poder expandirlo en el futuro.
  }
}
