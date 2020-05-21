import React from "react";

const Inputs = props => {
  return (
    <div>
      <input
        onChange={e => props.setName(e.target.value)}
        placeholder="enter your name"
      />
      <br />
      <input
        onChange={e => props.setAge(e.target.value)}
        placeholder="enter your age"
      />
      <br />
      <input
        onChange={e => props.setHobbies(e.target.value)}
        placeholder="enter your hobbies"
      />
    </div>
  );
};

export default Inputs;
