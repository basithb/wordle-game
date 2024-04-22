import React from "react";

function GuessInput({ guessText, setGuessText, guessTextArray }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    setGuessText(guessText);
    guessTextArray.push(guessText);
    setGuessText("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="guess-input-wrapper">
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          required
          id="guess-input"
          type="text"
          value={guessText}
          pattern="[a-zA-Z]{5}"
          title="5 letter word is required"
          onChange={(event) => setGuessText(event.target.value.toUpperCase())}
        />
      </form>
    </div>
  );
}

export default GuessInput;
