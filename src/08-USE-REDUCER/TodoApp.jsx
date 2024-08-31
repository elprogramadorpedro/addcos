import {useReducer} from 'react'// -1
import { todoReducer } from './todoReducer'


// -3
//initial state com dos entradas
const initialState =[
    {
        id: new Date().getTime(),
        description: 'Recoletar la piedra del alma,',
        done: false,
    },
    {
        id: new Date().getTime() + 100,
        description: 'Recoletar la piedra del alma,',
        done: false,
    }

]


export const TodoApp = () => {

// -2
//const [state, dispatch] = useReducer(reducer, initialState )

// -5 osea pasamos la referencia a la funcion, para que sea el useReducer que lo ejecute quando tenga que hacerlo. 
const [todos, dispatchTodo] = useReducer(todoReducer, initialState )

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
      <ul className='list-group'>
       {
        todos.map( todo=>(
            <li key={todo.id} className='list-group-item d-flex justify-content-between'>
            <span className='align-self-center'>Item 1</span>
            <button className='btn btn-danger'>Borrar</button>
            </li>
        ))
       }
    
    </ul>
</div>

<div className='col-5'>
    <h4>Agregar Todo</h4>
    <hr />
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
</div>
</div>
  


    </>
  )
}
