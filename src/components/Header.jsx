import maxNumber from "./maxNumber";

maxNumber;

function Header({ score, allScores }) {
  return (
    <div className="m-3">
      <div className="hstack gap-5 row">
        <h1 className="col">Ghibli Studio Memory Game</h1>
        <h5 className="col-auto">
          <span className="badge text-start thisBadge">
            Score: {score} <br />
            Best Score: {maxNumber(allScores)}
          </span>
        </h5>
      </div>
      <p>
        Get points by clicking on an image but don't click on any more than
        once!
      </p>
    </div>
  );
}

export default Header;
