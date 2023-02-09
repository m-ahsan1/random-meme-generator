import React from "react";
import memeData from "../memeData";

export default function Meme(){

  function generateMeme(){
    const memesArray = memeData.data.memes
    const randomMeme = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomMeme].url
  }

  return(
    <main>
      <form className="form">
        <input
          type="text"
          className="form--input"
          placeholder="Text at top"></input>
        <input
          type="text"
          className="form--input"
          placeholder="Text at bottom"
          ></input>

      </form>
      <button
          className="form--button"
          onClick={generateMeme}

          >Get the meme</button>
    </main>
  )
}
