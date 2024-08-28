import React from 'react'
import { useFetch } from '../hooks'

export const MultipleCustomHook = () => {


    //em ligar de criar fech aqui criaremos um custom hook para lidar com isso

    const {data, hasError, isLoading} = useFetch('https://pokeapi.co/api/v2/pokemon/3');




  return (
    <>
    <h1>Informacion de Pokemon</h1>
    <hr />
    {isLoading && <p>Cargando...</p>}



    <h2>{data?.name}</h2>
    <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}
