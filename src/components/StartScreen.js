import "./StartScreen.css";

const GameStart = ({ startGame }) => {
  return (
    <div className="start">
      <h1>Secret Word</h1>
      <button onClick={startGame} className="bn632-hover bn26">Start</button>
    </div>
  );
};

export default GameStart;
