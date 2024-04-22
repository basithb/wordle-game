import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import PreviousGuess from "../PreviousGuess/PreviousGuess";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessText, setGuessText] = React.useState("");
  const [guessTextArray, setGuessTextArray] = React.useState([]);

  return (
    <>
      <PreviousGuess guessTextArray={guessTextArray} />
      <GuessInput
        guessText={guessText}
        setGuessText={setGuessText}
        guessTextArray={guessTextArray}
        setGuessTextArray={setGuessTextArray}
      />
    </>
  );
}

export default Game;
