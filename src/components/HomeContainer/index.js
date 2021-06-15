import "./style.css";

function HomeContainer() {
  return (
    <div className="homeContainer">
      <h1 className="siteName gainsboro">GitHub Repo Search</h1>
      <div className="searchDescription gainsboro">
        Your search may include up to 5 terms, separated by spaces
      </div>
    </div>
  );
}

export default HomeContainer;
