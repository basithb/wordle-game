import React from "react";

function GuessInput({ tentativeGuess, setTentativeGuess, guessTextArray }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    setTentativeGuess(tentativeGuess);
    guessTextArray.push(tentativeGuess);
    setTentativeGuess("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="guess-input-wrapper">
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          required
          id="guess-input"
          type="text"
          value={tentativeGuess}
          pattern="[a-zA-Z]{5}"
          title="5 letter word is required"
          onChange={(event) =>
            setTentativeGuess(event.target.value.toUpperCase())
          }
        />
      </form>
    </div>
  );
}

export default GuessInput;
