export const todo_created = (todo) =>({
    type : "CREATE_TODO",
    payload : todo
});

export const todo_update = (todo) =>({
    type : "UPDATE_TODO",
    payload : todo
})