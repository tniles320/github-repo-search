import RepoInfoContainer from "../../components/RepoInfoContainer";
import BackButton from "../../components/BackButton";

function Results(props) {
  const { selectedResult, setSelectedResult } = props;

  if (selectedResult === undefined) {
    return (
      <div>
        <BackButton setSelectedResult={setSelectedResult} />
        <div className="noMatch gainsboro">
          <h1>oops, something went wrong</h1>
          <h1>
            <span role="img" aria-label="Face With Rolling Eyes Emoji">
              🙄
            </span>
          </h1>
        </div>
      </div>
    );
  } else {
    return (
      <div className="resultPageContainer">
        <BackButton setSelectedResult={setSelectedResult} />
        <RepoInfoContainer content={selectedResult.selectedResult} />
      </div>
    );
  }
}

export default Results;
