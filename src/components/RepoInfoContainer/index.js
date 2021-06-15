import "./style.css";

function RepoInfoContainer(props) {
  const { content } = props;
  return (
    <div className="repoInfoContainer">
      <div className="name">{content.name}</div>
      <a
        href={content.html_url}
        rel="noopener noreferrer"
        target="_blank"
        className="URL"
      >
        {content.html_url}
      </a>
      <div className="repoInfo gainsboro description">
        {content.description}
      </div>
      <div className="repoInfo gainsboro language">
        Language: {content.language}
      </div>
      <div className="repoInfo gainsboro user">
        <a
          href={content.owner.html_url}
          rel="noopener noreferrer"
          target="_blank"
          className="userURL gainsboro"
        >
          User: {content.owner.login}
        </a>
        <img src={content.owner.avatar_url} alt="user avatar" />
      </div>
      <div className="repoInfo gainsboro stars">
        Number of Stars: {content.stargazers_count}
      </div>
      <div className="repoInfo gainsboro forks">
        Number of Forks: {content.forks}
      </div>
    </div>
  );
}

export default RepoInfoContainer;
