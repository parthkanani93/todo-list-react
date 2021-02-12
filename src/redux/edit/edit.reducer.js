const INITIAL_STATE = {
    edit : 0,
    editId : null,
    newtodo : ""
}

export const editReducer = (state=INITIAL_STATE , action) =>{
    switch(action.type){
        case 'EDIT_TODO' :
            return {...state , newtodo : action.payload };
        case 'TODO_EDITABLE' : 
            return {...state , edit : action.payload};
        case 'ADD_ID' :
            return {...state , editId : action.payload };
        default :
            return state;
    }
}