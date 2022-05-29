import React from "react";

export const Card = ({name, image}) => (
    <div className="card">
        <img src={image} alt="" />
        <h2>{name}</h2>
    </div>
)

