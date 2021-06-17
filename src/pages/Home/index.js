import UserInput from "../../components/UserInput";
import Dropdowns from "../../components/Dropdowns";
import ResultsContainer from "../../components/ResultsContainer";
import HomeContainer from "../../components/HomeContainer";
import "./style.css";

//need to write function to replace spaces with + in query

function Home(props) {
  const {
    setQuery,
    dropdowns,
    setDropdowns,
    handleSearch,
    results,
    setSelectedResult,
  } = props;

  return (
    <div className="homePageContainer">
      <HomeContainer />
      <UserInput handleSearch={handleSearch} setQuery={setQuery} />
      <Dropdowns dropdowns={dropdowns} setDropdowns={setDropdowns} />
      <ResultsContainer
        results={results}
        setSelectedResult={setSelectedResult}
        setQuery={setQuery}
      />
    </div>
  );
}

export default Home;
