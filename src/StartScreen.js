function StartScreen({ arraySize, onClickStart }) {
  return (
    <div className="start">
      <h2>Welcome to the Quizzer</h2>
      <h3>{arraySize} Questions to test your React knowledge</h3>
      <button className="btn btn-ui" onClick={onClickStart}>
        Let's Start
      </button>
    </div>
  );
}

export default StartScreen;
