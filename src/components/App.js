import {React, useState, useEffect} from "react";
import Header from "./Header";
import { Board } from "./Board";
import charactersData from "../data";

const App = () => {
  const [characters, setCharacters] = useState({});
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const prepareData = (data) => {
   Object.keys(data).forEach((name,index)=> {
      data[name].isClicked = false;
      data[name].position = index+1;
    });
  }

  useEffect(()=>{
    prepareData(charactersData)
    setCharacters(charactersData);
  },[])

  const handleClick = (id) => {
    if(characters[id].isClicked  === true){
      if(score>bestScore){
        setBestScore(score);
      }
      setScore(0);
      Object.keys(characters).forEach((name)=> characters[name].isClicked = false);
      return
    }
    characters[id].isClicked  = true;
    setScore(score+1)
    Object.keys(characters).forEach((name)=> characters[name].position = Math.round(Math.random()*12))
  }

  return (
    <div className="app-wrapper">
      <Header score={score} bestScore={bestScore}/>
      <Board characters={characters} handleClick={handleClick} />
    </div>
  )
}

export default App