function ResultComponent(props) {
  const { content } = props;
  return (
    <div className="resultComponent">
      {console.log(content)}
      <div className="rcURL">{content.html_url}</div>
    </div>
  );
}

export default ResultComponent;
