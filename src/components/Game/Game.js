import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [tentativeGuess, setTentativeGuess] = React.useState("");
  const [guessTextArray, setGuessTextArray] = React.useState([]);

  return (
    <>
      <GuessResults guessTextArray={guessTextArray} />
      <GuessInput
        tentativeGuess={tentativeGuess}
        setTentativeGuess={setTentativeGuess}
        guessTextArray={guessTextArray}
        setGuessTextArray={setGuessTextArray}
      />
    </>
  );
}

export default Game;
