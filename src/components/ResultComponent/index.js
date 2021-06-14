import { useCallback } from "react";
import { useHistory } from "react-router-dom";

function ResultComponent(props) {
  const history = useHistory();

  const { content, setSelectedResult } = props;

  const handleLink = useCallback(
    (e) => {
      e.preventDefault();
      setSelectedResult({ selectedResult: content });
      history.push("/results");
    },
    [history]
  );
  return (
    <div className="resultComponent" onClick={(e) => handleLink(e)}>
      <div className="rcURL">{content.name}</div>
      <div className="rcURL">{content.language}</div>
      <div className="rcURL">{content.owner.login}</div>
      <div className="rcURL">{content.stargazers_count}</div>
    </div>
  );
}

export default ResultComponent;
