import React from "react";

const Progress = ({
  index,
  numQuestions,
  points,
  maxPossiblePoints,
  answer,
}) => {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer + 1)} />
      <p>
        Question <strong>{index}</strong> / {numQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
};

export default Progress;
