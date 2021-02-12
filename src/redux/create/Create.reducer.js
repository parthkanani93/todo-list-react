const INITIAL_STATE ={
    Todolist : []
}

export const CreateReducer =(state=INITIAL_STATE , action) =>{
    switch(action.type){
        case "CREATE_TODO" :
            return {...state , Todolist : [...state.Todolist, action.payload] };
        case "UPDATE_TODO" :
            return {...state , Todolist : action.payload};
        default :
            return state;
    }
}