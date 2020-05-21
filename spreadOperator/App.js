import React, { useState } from "react";

function App() {
  const [ranData, setRanData] = useState([]);
  console.log(ranData);

  const addData = () => {
    let rand = Math.floor(Math.random() * 100);
    setRanData([...ranData, rand]);
  };

  const removeData = () => {
    let newArr = ranData;
    newArr.pop();
    setRanData([...newArr]);
  };

  return (
    <div className="App">
      <button onClick={addData}>Add Data!</button>
      <button onClick={removeData}>Remove Data!</button>
      {ranData.map((number, i) => {
        return <p key={i}>{number}</p>;
      })}
    </div>
  );
}

export default App;