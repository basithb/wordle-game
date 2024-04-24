import React from "react";

function GuessResults({ guessTextArray }) {
  return (
    <div className="guess-results">
      {guessTextArray.map((guess) => (
        <p key={crypto.randomUUID()} className="guess">
          {guess}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
