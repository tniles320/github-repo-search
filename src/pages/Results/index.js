function Results(props) {
  const { selectedResult } = props;
  const content = selectedResult.selectedResult;
  return (
    <div className="resultPageContainer">
      {console.log(selectedResult.selectedResult)}
      <a
        href={content.html_url}
        rel="noopener noreferrer"
        target="_blank"
        className="rcURL"
      >
        {content.name}
      </a>
      <div className="rcURL">{content.language}</div>
      <div className="rcURL">{content.description}</div>
      <div className="rcURL">{content.owner.login}</div>
      <div className="rcURL">{content.stargazers_count}</div>
    </div>
  );
}

export default Results;
