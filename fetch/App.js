import React from "react";
import Dog from "./components/Dog";

function App() {
  const [dog, setDog] = React.useState("");

  return (
    <div className="App">
      <Dog dog={dog} setDog={setDog} />
    </div>
  );
}

export default App;