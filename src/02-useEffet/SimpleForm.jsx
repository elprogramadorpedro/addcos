import React, { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

const [formState, setFormState] = useState({
    username : 'strider',
    email: 'fernando@google.com'
})

const onInputChange=({target})=>{
    const {name, value} = target;
    setFormState({
        ...formState,
            [name]:value
    })
}

const {username, email} = formState;
// funciones que nos permiten realizar el cambio de qualquier input 


//COMPONENTE MONTADO OSEA QUANDO EL SE RENDERIZA

//SE RECOMIENDA HACER UM EFECTO ESPECIALIZADO POR CADA ACCION 

useEffect(()=>{
    //console.log('useEffet called') //aparece dos veces porque tenemos el modo stricto
},[]);

useEffect(()=>{
    //console.log(' formState Change')  // ouseja o form mudou 
},[formState]);

useEffect(()=>{ 
    //console.log('o email mudou')  //aparece dos veces porque tenemos el modo stricto
},[email]);


//funcao de retorno do usse effect 
//montar e desmontar componente



  return (
    <>
    <h1>Formulario Simple</h1>
    <hr />

    <input 
    type="text" 
    className='form-control'
    placeholder='Username'
    name='username'
    value={username}
    onChange={onInputChange}
    />

<input 
    type="email" 
    className='form-control mt-2'
    placeholder='fer@gmail.com'
    name='email'
    value={email}
    onChange={onInputChange}
    />



{
    (username === 'strider2' ) && <Message/>
}

    </>
  )
}
