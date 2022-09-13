import React from "react";
import Buttons from "./components/Buttons";
import Display from "./components/Display";
import {useState} from "react";
import Screen from "./components/Screen";


function App() {

  // const [disp, setDisp] = useState("")

  // function displayValue(event) {
  //   setDisp(event.target.value) 
  // }

  const [value, setValue] = useState("")

  function handleChange(event) {
    setValue(prevState => prevState + event.target.value)
  }

  // function buttonClick(e) {
  //   handleChange(e);
  //   displayValue()
  // }

  function calculate() {
    setValue(eval(value))
    // setDisp(eval(disp))
    
  }

  function backspace() {
    setValue(value.slice(0, -1))
    // setDisp(disp.slice(0, -1))
  }

  function clear() {
    setValue("")
    // setDisp("")
  }


  return (
    <div className="App">
      <div className="calculator">
      <Screen value={value}/>
      <Display 
      // disp={disp}
      />
      <Buttons handleChange={handleChange} calculate={calculate} backspace={backspace} clear={clear} 
      // buttonClick={buttonClick}
      />
      </div>

    </div>
  );
}

export default App;
