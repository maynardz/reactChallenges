import React, { useState } from "react";
import Inputs from "./components/Inputs";
import View from "./components/View";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [hobbies, setHobbies] = useState("");

  return (
    <div className="App">
      <Inputs setName={setName} setAge={setAge} setHobbies={setHobbies} />
      <View name={name} age={age} hobbies={hobbies} />
    </div>
  );
}

export default App;