import React from "react";

export const Card = ({name, image, handleClick, position, index}) => (
    <div className={`card`} style={{order: position}} index={index} onClick={()=>handleClick(index)} >
        <img src={image} alt="" />
        <h2>{name}</h2>
    </div>
)

