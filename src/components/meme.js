import React from "react";
import memeData from "../memeData";

export default function Meme(){

  const [memeImage, setMemeImage] = React.useState("");



  function generateMeme(){
    const memesArray = memeData.data.memes
    const randomMeme = Math.floor(Math.random() * memesArray.length)
    setMemeImage(memesArray[randomMeme].url)

  }

  return(
    <main>
      <div className="form">
        <input
          type="text"
          className="form--input"
          placeholder="Text at top"></input>
        <input
          type="text"
          className="form--input"
          placeholder="Text at bottom"
          ></input>

        <button
          className="form--button"
          onClick={generateMeme}

          >Get the meme</button>

      </div>

      <img src={memeImage} className="meme--image"/>
    </main>
  )
}
