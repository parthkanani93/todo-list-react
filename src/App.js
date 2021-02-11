import React, { useState } from "react";
// import Create from "./component/Create";
import {connect} from 'react-redux';
import {todo_created} from './redux/create/Create.action';
import "./App.css";

const Create = ({ AddTodo, Todolist}) => {
  const initialvalue = "";
  const [name, setname] = useState("");
  // console.log(AddTodo(todo));
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

const Edit = ({ edit, id, Todolist, setTodolist, setedit }) => {
  const [newtodo, setnewtodo] = useState("");
  if (edit == 1) {
    return (
      <div>
        <input
          type="text"
          placeholder="enter your updated Todo"
          style={{ width: "25", height: "10" }}
          onChange={(event) => {
            setnewtodo(event.target.value);
          }}
          value={newtodo}
        />
        <button
          onClick={() => {
            if (newtodo === "") {
              return;
            } else {
              Todolist.map((item) => {
                if (item.id == id) {
                  item.title = newtodo;
                }
              });
              setedit(0);
              return setTodolist([...Todolist]);
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

const List = ({ Todolist, setTodolist, setedit, seteditid }) => {
  return (
    <div>
      {Todolist.map((list) => {
        return (
          <div key={list.id}>
            <h4>{list.title}</h4>
            <button
              onClick={() => {
                setedit(1);
                seteditid(list.id);
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
                return setTodolist([...Todolist]);
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

function App({Todolist ,AddTodo}) {
  // const [Todolist, setTodolist] = useState([]);
  console.log(Todolist);
  const [edit, setedit] = useState(0);
  const [editid, seteditid] = useState();
  return (
    <div className="App">
      <h1>Todo List</h1>
      <Create Todolist={Todolist} AddTodo={AddTodo} />
      <Edit
        edit={edit}
        id={editid}
        Todolist={Todolist}
        setedit={setedit}
        setTodolist={AddTodo}
      />
      <List
        Todolist={Todolist}
        setTodolist={AddTodo}
        edit={edit}
        setedit={setedit}
        seteditid={seteditid}
      />
    </div>
  );
}

 const mapStateToProps = (state) =>({
  Todolist : state.Create.Todolist
});

const mapDispatchToProps = (dispatch) =>({
  AddTodo : (todo) => dispatch(todo_created(todo))
})

export default connect(mapStateToProps , mapDispatchToProps)(App);
