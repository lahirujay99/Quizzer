function Progress({ index, qNum, points, maxPoints }) {
  return (
    <div className="progress">
      <p>
        Question <strong>{index}</strong>/{qNum}
      </p>
      <p>
        Points <strong>{points}</strong>/ {maxPoints}
      </p>
    </div>
  );
}

export default Progress;
