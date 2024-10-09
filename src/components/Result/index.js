import React from 'react'

const Result = ({players, correctAnswers, resetGame}) => {
  return (
    <div className="result">
      <h1>Game Over!</h1>
      <h2>Results:</h2>
      <ul>
        {players.map(player => (
          <li key={player}>
            {player}: {correctAnswers[player] || 0} correct answer(s)
          </li>
        ))}
      </ul>
      <button onClick={resetGame}>Play Again</button>
    </div>
  )
}

export default Result