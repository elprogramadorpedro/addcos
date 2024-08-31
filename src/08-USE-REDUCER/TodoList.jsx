
import { TodoItem } from './TodoItem'

// -7 este paso indica que el componente ha sido creado


export const TodoList = ({todos =[]}) => {
  return (
    <>
    <ul className='list-group'>
       {
        todos.map( todo => (

           // -11  TodoItem indico aqui que creare otro componente que sera llamando cerca de esta posicion 
          // -14 llamando TodoItem.jsx

         <TodoItem key={todo.id} todo={todo}/> // podrias explicarme de donde viene esto que es?  key={todo.id} todo={todo}
        ))
       }
    
    </ul>
    </>
  )
}

{/*

    //el paso 8 surgue por en la linea del export incluimos argumentos y dejo documentado como se veia sim los argumentos que pasaria si no los incluyeramos?

export const TodoList = () => {
    return (
      <>
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
      </>
    )
  }
  */}