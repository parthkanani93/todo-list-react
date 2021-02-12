import React, { useState } from "react";
// import Create from "./component/Create";
import {connect} from 'react-redux';
import {todo_created} from './redux/create/Create.action';
import {todo_editable} from './redux/edit/edit.action';
import {new_todo} from './redux/edit/edit.action';
import {add_todo_id} from './redux/edit/edit.action';
import {todo_update} from "./redux/create/Create.action";
import "./App.css";

const Create = ({ AddTodo, Todolist}) => {
  const initialvalue = "";
  const [name, setname] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="enter your Todo"
        style={{ width: "25", height: "10" }}
        onChange={(event) => {
          setname(event.target.value);
        }}
        value={name}
      />
      <button
        onClick={() => {
          if (name === "") {
            return;
          } else {
            AddTodo({ title: name, id: Todolist.length });
            setname(initialvalue);
          }
        }}
      >
        Add Task
      </button>
    </div>
  );
};

const Edit = ({ edit, editId, Todolist, Update_todo, Editable_todo , newtodo ,New_todo }) => {
  // const [newtodo, setnewtodo] = useState("");
  if (edit === 1) {
    return (
      <div>
        <input
          type="text"
          placeholder="enter your updated Todo"
          style={{ width: "25", height: "10" }}
          onChange={(event) => {
            New_todo(event.target.value);
          }}
          value={newtodo}
        />
        <button
          onClick={() => {
            if (newtodo === "") {
              return;
            } else {
              Todolist.map((item) => {
                if (item.id === editId) {
                  item.title = newtodo;
                }
              });
              Editable_todo(0);
              return Update_todo(Todolist);
            }
          }}
        >
          update
        </button>
      </div>
    );
  } else {
    return null;
  }
};

const List = ({ Todolist, Update_todo, Editable_todo, Edit_todo_id }) => {
  
 
  return (
    <div>
      {Todolist.map((list) => {
        return (
          <div key={list.id}>
            <h4>{list.title}</h4>
            <button
              onClick={() => {
                Editable_todo(1);
                Edit_todo_id(list.id);
              }}
            >
              edit
            </button>
            <button
              onClick={() => {
                var removeindex = Todolist.map(function (item) {
                  return item.id;
                }).indexOf(list.id);
              Todolist.splice(removeindex, 1);
                return Update_todo(Todolist);
              }}
            >
              delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

function App({Todolist ,AddTodo , edit ,editId ,Editable_todo ,Edit_todo_id , New_todo , newtodo,Update_todo}) {
  // const [Todolist, setTodolist] = useState([]);
  // const [edit, setedit] = useState(0);
  // const [editid, seteditid] = useState();
  return (
    <div className="App">
      <h1>Todo List</h1>
      <Create Todolist={Todolist} AddTodo={AddTodo} />
      <Edit
        edit={edit}
        editId={editId}
        Todolist={Todolist}
        Editable_todo={Editable_todo}
        Update_todo={Update_todo}

        New_todo={New_todo}
        newtodo={newtodo}
      />
      <List
        Todolist={Todolist}
        Update_todo={Update_todo}
        edit={edit}
        Editable_todo={Editable_todo}
        Edit_todo_id={Edit_todo_id}
      />
    </div>
  );
}

 const mapStateToProps = (state) =>({
  Todolist : state.Create.Todolist,
  edit : state.Edit.edit,
  editId : state.Edit.editId,
  newtodo : state.Edit.newtodo
});

const mapDispatchToProps = (dispatch) =>({
  AddTodo : (todo) => dispatch(todo_created(todo)),
  Editable_todo : (edit) => dispatch(todo_editable(edit)),
  New_todo : (newtodo) => dispatch(new_todo(newtodo)),
  Edit_todo_id : (newid) => dispatch(add_todo_id(newid)),
  Update_todo : (todo) => dispatch(todo_update(todo))
})

export default connect(mapStateToProps , mapDispatchToProps)(App);
