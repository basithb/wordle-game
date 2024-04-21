import React from "react";

function GuessInput() {
  const [guessText, setGuessText] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setGuessText(guessText);
    const guess = guessText;
    console.log({ guess });
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
