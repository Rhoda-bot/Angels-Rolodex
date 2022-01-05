import React from "react";
import './card.styles.css'

export const Card = props => (
  <div className="card-container">
    <img src={`https://robohash.org/${props.angel.id}?set=set2&size=180x180`} alt="angel" />
   <h3>{props.angel.name}</h3>
   <p>{props.angel.email}</p>
  </div>
)