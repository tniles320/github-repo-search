/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback } from "react";
import { useHistory } from "react-router-dom";
import "./style.css";

function ResultComponent(props) {
  const history = useHistory();

  const { content, setQuery, setSelectedResult } = props;

  // sets selectedResult and links to results page
  const handleLink = useCallback(() => {
    setQuery();
    setSelectedResult({ selectedResult: content });
    history.push("/github-repo-search/results");
  }, [history]);

  return (
    <div className="resultComponent" onClick={(e) => handleLink(e)}>
      <div className="rcName">{content.name}</div>
      <div className="rcInfo gainsboro">Language: {content.language}</div>
      <div className="rcInfo gainsboro">User: {content.owner.login}</div>
      <div className="rcInfo gainsboro">Stars: {content.stargazers_count}</div>
    </div>
  );
}

export default ResultComponent;
