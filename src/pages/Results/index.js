import RepoInfoContainer from "../../components/RepoInfoContainer";
import BackButton from "../../components/BackButton";

function Results(props) {
  const { selectedResult, setSelectedResult } = props;
  return (
    <div className="resultPageContainer">
      <BackButton setSelectedResult={setSelectedResult} />
      <RepoInfoContainer content={selectedResult.selectedResult} />
    </div>
  );
}

export default Results;
