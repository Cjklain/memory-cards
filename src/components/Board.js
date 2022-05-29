import React from "react";
import { Card } from "./Card";

export const Board = ({characters}) => (
    <div className="board-wrapper">
        {Object.keys(characters).map((key) => <Card key={key} name={characters[key].name} image={characters[key].image}/>)}
    </div>
)

