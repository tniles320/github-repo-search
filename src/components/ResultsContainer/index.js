import ResultComponent from "../ResultComponent";

function ResultsContainer(props) {
  const { results, setSelectedResult } = props;

  if (results !== undefined) {
    return (
      <div className="resultsContainer">
        {results.map((content, index) => {
          return (
            <ResultComponent
              content={content}
              key={index}
              setSelectedResult={setSelectedResult}
            />
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}

export default ResultsContainer;
