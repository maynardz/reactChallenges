import React, { useEffect } from "react";

const Dog = props => {
  console.log("the component mounted");

  useEffect(() => {
    console.log("the effect ran");
    fetch("https://random.dog/woof.json")
      .then(res => res.json())
      .then(json => props.setDog(json.url));
  });

  const style = {
    height: "250px",
    width: "auto",
    border: "2px solid black"
  };

  return (
    <div>
      <img src={props.dog} alt="doggo" style={style} />
    </div>
  );
};

export default Dog;