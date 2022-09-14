import React from "react";
import Buttons from "./components/Buttons";
import Display from "./components/Display";
import {useState} from "react";
import Screen from "./components/Screen";


function App() {

  const [disp, setDisp] = useState("")

  const [value, setValue] = useState("")

  function handleChange(event) {
    const input = event.target.value

    setValue(prevState => prevState + input)
    setDisp(input)
  }

  function calculate() {
    
  }

  function backspace() {
    setValue(value.slice(0, -1))
    setDisp(disp.slice(0, -1))
  }

  function clear() {
    setValue("")
    setDisp("")
  }


  return (
    <div className="App">
      <div className="calculator">
      <Screen value={value}/>
      <Display disp={disp}/>
      <Buttons handleChange={handleChange} calculate={calculate} backspace={backspace} clear={clear} />
      </div>

    </div>
  );
}

export default App;
