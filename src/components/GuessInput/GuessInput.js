import React from "react";

function GuessInput() {
  const [guessText, setGuessText] = React.useState("");

  const handleGuessInput = (event) => {
    event.preventDefault();
    setGuessText(guessText);
    const guess = guessText;
    console.log({ guess });
    setGuessText("");
  };

  return (
    <div>
      <form onSubmit={handleGuessInput} className="guess-input-wrapper">
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          value={guessText}
          onChange={(event) => setGuessText(event.target.value.toUpperCase())}
        />
      </form>
    </div>
  );
}

export default GuessInput;
