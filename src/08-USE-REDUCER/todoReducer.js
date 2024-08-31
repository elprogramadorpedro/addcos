//es una funcion que no retorna un jsx por eso js porque es una funcion que retorna una funcion pura de javascript.
//-4

export const todoReducer = (initialState = [], action)=>{
    switch (action.type){
        case 'ABC':
            throw new Error('Action.type = ABC no esta implementada');

            default:
                return initialState;
    }
}