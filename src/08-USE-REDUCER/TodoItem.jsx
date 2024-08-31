import React from 'react'

// - 12 componente creado para seer llamado em TodoList.jsx



{/*
    export const TodoItem = () => {
  return (
    <>
      <li key={todo.id} className='list-group-item d-flex justify-content-between'>
            <span className='align-self-center'>Item 1</span>
            <button className='btn btn-danger'>Borrar</button>
            </li>
    </>
  )
}

    
    */}
    
    // - 13 recibo todo el todo por si en el futuro tengo que modificar alguna propiedad 



export const TodoItem = ({todo}) => {
  return (
    <>
      <li className='list-group-item d-flex justify-content-between'>
        
            <span className='align-self-center'>
                {todo.description}
                </span>


            <button className='btn btn-danger'>Borrar</button>
            </li>
    </>
  )
}
