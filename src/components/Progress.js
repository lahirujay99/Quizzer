function Progress({ index, qNum, points, maxPoints, answer }) {
  return (
    <div className="progress">
      <progress max={qNum} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong>/{qNum}
      </p>
      <p>
        Points <strong>{points}</strong>/ {maxPoints}
      </p>
    </div>
  );
}

export default Progress;
