import React from "react";
import { Card } from "./Card";

export const Board = ({characters, handleClick}) => (
    <div className="board-wrapper">
        {Object.keys(characters).map(key => <Card key={key} index={key} name={characters[key].name} image={characters[key].image} position={characters[key].position} handleClick={handleClick}/>)}
    </div>
)

