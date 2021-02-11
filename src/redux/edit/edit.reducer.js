const INITIAL_STATE = {
    edit : 0,
    editId : null,
    newtodo : ""
}

const editReducer = (state=INITIAL_STATE , action) =>{
    switch(action.type){
        case 'EDIT_TODO' :
            return {...state , }
    }
}