import React from 'react';
import './style.css'

export default function funCard(props) {

  return (
    <div className="card">
      <img src={props.image}></img>
      <div className="card-body">
      <div className='cardHeader'>{props.title}</div>
        <p className="text">{props.text}</p>
      </div>
      <div className='link-buttons'>
        <a href={props.github}>Github</a>
        <a href={props.deployed}>Deployed</a>
      </div>
    
    </div>
  );
}
