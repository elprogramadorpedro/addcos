

//esse customHook nos ajuda a obter a data, a saber quando esta cargando, cuando hay un error etc. 


// Importa el hook useState desde la biblioteca React, que permite agregar estado a un componente funcional.
import { useState, useEffect } from 'react'

// Define y exporta un custom hook llamado useFetch. Los custom hooks permiten reutilizar lógica de estado.
export const useFetch = (url) => {

    // Declara una variable de estado llamada 'state' que se inicializa con un objeto.
    // 'setState' es la función que permite actualizar el estado.
    // El estado inicial contiene: 'data' (datos que se recuperarán), 'isLoading' (indicador de carga), 'hasError' (indicador de error), y 'error' (detalles del error).
    const [state, setState] = useState({
        data: null,       // Inicialmente no hay datos.
        isLoading: true,  // Inicialmente el estado de carga es verdadero.
        hasError: false,  // Inicialmente no hay error.
        error: null,      // Inicialmente no hay detalles de error.
    })

    // useEffect es un hook que permite ejecutar efectos secundarios en un componente funcional.
    // Aquí, se llama a 'getFetch' cuando el componente se monta por primera vez.
    useEffect(() => {
        // Llama a la función que realiza la solicitud de datos al API.
        getFetch()

        // El segundo argumento, un array vacío, asegura que useEffect se ejecute solo una vez al montarse el componente.
    }, [url])


const setLoadingStage =()=>{
    setState({
        data:null,
        isLoading:true,
        hasError: false,
        error:null,
    })
}




    // Define la función 'getFetch', que es una función asincrónica para obtener datos de una API.
    const getFetch = async () => {
        setLoadingStage();
        // Realiza una solicitud GET a la API de PokeAPI para obtener información del Pokémon con ID 1.
        const resp = await fetch(url)

        if(!resp.ok){
            setState({
                data:null,
                isLoading:false,
                hasError:true,
                 error:{
                    code: resp.status,
                    message: resp.statusText,
                }
            });
            return; //si sucede algun error dunta la ejecucion de este if el para el retorna si no continua para el siguiente codigo.

        }






        // Convierte la respuesta de la API a formato JSON para que los datos sean utilizables en JavaScript.
       const data = await resp.json();
        setState({
            data: data,
            isLoading: false,
            hasError:false,
            error:null,

        })


        //faremos um manejo del cache











        // Muestra los datos obtenidos en la consola para ver el resultado.
      //  console.log({ data })

        // Aquí podrías actualizar el estado con los datos obtenidos y manejar errores si ocurrieran.
    }

    // Retorna un objeto con 'data', 'isLoading', y 'hasError', que pueden ser utilizados por el componente que usa este hook.
    return {
        data: state.data,         // Retorna los datos obtenidos de la API.
        isLoading: state.isLoading, // Retorna el estado de carga para saber si los datos están siendo cargados.
        hasError: state.hasError,   // Retorna el estado de error para saber si ocurrió algún problema.
    }
}
