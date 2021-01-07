import React from "react";

const Create = () => {
  return (
    <div>
      <input
        type="text"
        placeholder="enter your Todo"
        style={{ width: "25", height: "10" }}
        onChange={(e) => console.log(e.target.value)}
      />
      <button>Add Todo</button>
    </div>
  );
};

export default Create;
