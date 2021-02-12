export const todo_editable = (edit) =>({
    type : 'TODO_EDITABLE',
    payload : edit
})

export const add_todo_id = (id) =>({
    type : 'ADD_ID',
    payload : id
})

export const new_todo = (todo) =>({
    type : 'EDIT_TODO',
    payload : todo
})