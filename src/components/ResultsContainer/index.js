import ResultComponent from "../ResultComponent";
import "./style.css";

function ResultsContainer(props) {
  const { results, setQuery, setSelectedResult } = props;

  if (results !== undefined) {
    return (
      <div className="resultsContainer">
        {results.map((content, index) => {
          return (
            <ResultComponent
              content={content}
              key={index}
              setQuery={setQuery}
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
