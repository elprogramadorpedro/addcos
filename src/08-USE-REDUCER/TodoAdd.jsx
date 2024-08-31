
import { useForm } from '../hooks/useForm'


// -17 llamado de hook

//-18 useForm

//- 19 fijate que desestrucuramos porque llamamos algo de useForm
//objeto valor que voy a enviar para mi formulario



// -cracion de componente
//ecplica porque era asi export const TodoAdd = () y fue incluido el onNewTodo quedando asi export const TodoAdd = ({onNewTodo})
export const TodoAdd = ({onNewTodo}) => {  // -16 cracion de componente

    // - 17 ahora precisamos manejar el formulario, podemos crear states etc para si ya tengo um hook que maneja formlario entonces lo reutilizamos

const {description, onInputChange, onResetForm } = useForm({
    description: ''
})

// -20 aqui elabora o newTodo para poder emitirlo podrias explicar mas esse trecho.

const onFormSubmit = ( event ) => {
    event.preventDefault();
    if ( description.length <= 1 ) return;

    const newTodo = {
        id: new Date().getTime(),
        done: false,
        description: description,
    }
    
    //21 esplica eso 
    onNewTodo (newTodo)
    onResetForm()
}



  return (
   //-22 mandamos la referencia emplica um poco mais essa mudanca <form>  A <form>
   
        <form onSubmit={onFormSubmit}>
        <input 
        type="text"
        placeholder='Que hay que hacer'
        className='form-control'

        // - 18 explica porque  name = 'description' onChange={onInputChange} 
        name = 'description'
        value={description}
        onChange={onInputChange}
        
        />
        <button 
        type='submit'
        className='btn btn-outline-primary mt-1'
        >
            Agregar

        </button>
    </form>

  )
}
