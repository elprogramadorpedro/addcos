//es una funcion que no retorna un jsx por eso js porque es una funcion que retorna una funcion pura de javascript.
//-4





export const todoReducer = (initialState = [], action)=>{


   
    

    //-23 ecplicame lo que sucede aqui com mas detalle 
    switch (action.type){
        case '[TODO] Add Todo':
            return [...initialState, action.payload]
           
            default:
                return initialState;
    }
}