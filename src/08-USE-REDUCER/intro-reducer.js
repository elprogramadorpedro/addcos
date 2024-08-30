console.log('hola mundo')

//entendo o reducer 
// initial state

const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra del Alma',
    done: false, 
}]


// como luce un Reducer simples como una funcao.

// o reducer reecebe dos argumetos

const todoReducer = (state = initialState, action ={} ) =>{

    //esta linea que se hizo de ultimo refresa un nuevo estado 
    if(action.type === '[TODO] add todo'){
        return [...state, action.payload]
    }

    return state;


}

//aqui utilixzamos o reducer

let todos = todoReducer();  // devuelve un arreglo

//console.log(todos)


//porque usar reducer , en que casos usar de una red social. 

// como hacer una mutacion al arrglo osea algo que no debemos hacer  //no mutar el estado de esta forma
{/*
todo.push = [{
    id: 1,
    todo: 'Recolectar la piedra del poder',
    done: false, 
}]
*/}


//ahora bien modificaremos el reducer mediante una accion.

//

const newTodo ={
    id: 2,
    todo: 'Recoletar la piedra del poder',
    done: false,
}

const addTodoAction ={
    type: '[TODO] add todo', // accion 
    payload: newTodo,        //lo que va dentro de la accion 
}


 todos = todoReducer(todos, addTodoAction);
//payload osea la carga que esta en la accion


console.log({state: todos})