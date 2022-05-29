import React from "react";
import Header from "./Header";
import { Board } from "./Board";
import characters from "../data";

const App = () => {

  return (
    <div className="app-wrapper">
      <Header/>
      <Board characters={characters}/>
    </div>
  )
}
// load to state
// make handleclick
// in handle click chcek is this the same if no add point and change order
// object with src shoud check if it was clcidek in this iteration and also should have posioton which we can simply change 
export default App