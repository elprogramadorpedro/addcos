import {useEffect, useReducer} from 'react'// -1
import { todoReducer } from './todoReducer'
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';


// -3
//initial state com dos entradas


const initialState =[
   
   
   {/*
    //-25 esta informacion ahora ahora sera percistente y sera guardada no local storage
    {
        id: new Date().getTime(),
        description: 'Recoletar la piedra del alma,',
        done: false,
    },
    {
        id: new Date().getTime() * 3,
        description: 'Recoletar la piedra del alma,',
        done: false,
    }*/}
   

]


export const TodoApp = () => {

// -2
//const [state, dispatch] = useReducer(reducer, initialState )

// -5 osea pasamos la referencia a la funcion, para que sea el useReducer que lo ejecute quando tenga que hacerlo. 
const [todos, dispatch] = useReducer (todoReducer, initialState );

 // -26 
 useEffect(() => {
    console.log(todos)
      }, [todos])

//-24 
const handleNewTodo =(todo)=>{
    const action ={
        type: '[TODO] Add Todo',
        payload: todo
    }  

    // -25  explicame esso e porque ahi  dispatch(action)
    dispatch(action)
}

{/*
    // -1
    export const TodoApp = () => {
  return (
    <>
    <h1>TodoApp</h1>
    <hr />

    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>
    </>
  )  
    }
    
*/}

  return (
    <>
    <h1>TodoApp 10, <small>Pendiente : 5</small></h1>
    <hr />

<div className='row'>
    <div className='col-7'>
      
{/*
// -6
crear um nuevo componente que va a ser llamado aqui ya vuelvo voy a crealo */}

{/* -8 finalmente llamamos a la funcion 

<TodoList/>

*/}


{/* -9 cargamos los todo que tengo en el reducer  */}
<TodoList todos ={todos}/>

{/* - 10 ya vuelvo voy al componente TodoList.jsx para realizar una modificacion*/}


</div>

<div className='col-5'>
    <h4>Agregar Todo</h4>
    <hr />

{/* -15 componentizando formulario*/}

{/* -15 componentizando formulario

<form>
        <input 
        type="text"
        placeholder='Que hay que hacer'
        className='form-control'
        
        />
        <button 
        type='submit'
        className='btn btn-outline-primary mt-1'
        >
            Agregar

        </button>
    </form>

*/}
    {/*<TodoAdd/> mira la mundaca del componente explica porque */}
    
    <TodoAdd onNewTodo={handleNewTodo} />


</div>
</div>
  


    </>
  )
}
