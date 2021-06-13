import ResultComponent from "../ResultComponent";

function ResultsContainer(props) {
  const { results, setSelectedResults } = props;

  if (results !== undefined) {
    return (
      <div className="resultsContainer">
        {results.map((content, index) => {
          return (
            <ResultComponent
              content={content}
              setSelectedResults={setSelectedResults}
              key={index}
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
