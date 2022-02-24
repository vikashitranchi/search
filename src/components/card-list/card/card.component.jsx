import React from 'react';
import './card.component.css';
export const Card = (props) =>(
    <div className='card-container'>
        <img alt="monster" src={`https://robohash.org/${props.monster.id}2.pngsize=180x180`} />
       <h2>{props.monster.name}</h2> 
       <p>{props.monster.email}</p> 
    </div>
)