import React from "react";


export default function Joke(props){
  return (
    <div>
      <h1>{props.header}</h1>
      <p>{props.para}</p>
    </div>
  )
}
