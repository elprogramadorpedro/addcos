import React, { useEffect, useState } from 'react'
import { Message } from './Message';
import { useForm } from '../hooks/useForm';

export const FormWithCustonHook = () => {

    const {formState, onInputChange, onResetForm, username, email, password  } = useForm({
        
            username : '',
            email: '',
            password:''
    })
   // const {username, email, password} = formState;


// funciones que nos permiten realizar el cambio de qualquier input 


//COMPONENTE MONTADO OSEA QUANDO EL SE RENDERIZA

//SE RECOMIENDA HACER UM EFECTO ESPECIALIZADO POR CADA ACCION 


/*
useEffect(()=>{
    //console.log('useEffet called') //aparece dos veces porque tenemos el modo stricto
},[]);

useEffect(()=>{
    //console.log(' formState Change')  // ouseja o form mudou 
},[formState]);

useEffect(()=>{ 
    //console.log('o email mudou')  //aparece dos veces porque tenemos el modo stricto
},[email]);
*/

//funcao de retorno do usse effect 
//montar e desmontar componente
//deseo crear um formulario 100% que atrubutos crees que falten aun para que sea 100% seguro, debo hacer una validacion de los inputs?


  return (
    <>
    <h1>Formulario con custon hook</h1>
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

<input 
    type="password" 
    className='form-control mt-2'
    placeholder='contrasena'
    name='password'
    value={password}
    onChange={onInputChange}
    />


    <button onClick={onResetForm} className='btn btn-primary mt-2'>Borrar</button>

    </>
  )
}
