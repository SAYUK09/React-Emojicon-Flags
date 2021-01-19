import React, { useState } from "react";
import "./styles.css";

var emojiDict = {
  "🏁": "Chequered Flag",
  "🚩": "Triangular Flag",
  "🎌": "Crossed Flags",
  "🏳️‍🌈": "Rainbow Flag",
  "🏳️‍⚧️": "Transgender Flag",
  "🏴‍☠️": " Pirate Flag"
};

var knownEmojis = Object.keys(emojiDict);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function onChangeHandler(event) {
    var userInput = event.target.value;
    console.log(userInput);
    meaning = emojiDict[userInput];

    if (meaning === undefined) {
      meaning = "Opps! We dont know this one";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    meaning = emojiDict[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Flags</h1>
      <input onChange={onChangeHandler}></input>
      <div className="outputDiv">Means : {meaning} </div>
      <h3>Emojis we know</h3>
      <div className="emojiCont">
        {knownEmojis.map((emoji) => {
          // emojiClickHandler(emoji)
          return (
            <span
              onClick={() => {
                emojiClickHandler(emoji);
              }}
              key={emoji}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
