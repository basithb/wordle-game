import React from "react";

function PreviousGuess({ guessTextArray }) {
  return (
    <div className="guess-results">
      {guessTextArray.map((guess) => (
        <p className="guess" key={crypto.randomUUID()}>
          {guess}
        </p>
      ))}
    </div>
  );
}

export default PreviousGuess;
