import React, { useState } from "react";
// import Create from "./component/Create";
import "./App.css";

const Create = ({ add, Todolist }) => {
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
            add([...Todolist, { title: name, id: Todolist.length }]);
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

function App() {
  const [Todolist, setTodolist] = useState([]);
  const [edit, setedit] = useState(0);
  const [editid, seteditid] = useState();
  console.log(Todolist);
  return (
    <div className="App">
      <h1>Todo List</h1>
      <Create add={setTodolist} Todolist={Todolist} />
      <Edit
        edit={edit}
        id={editid}
        Todolist={Todolist}
        setedit={setedit}
        setTodolist={setTodolist}
      />
      <List
        Todolist={Todolist}
        setTodolist={setTodolist}
        edit={edit}
        setedit={setedit}
        seteditid={seteditid}
      />
    </div>
  );
}

export default App;
