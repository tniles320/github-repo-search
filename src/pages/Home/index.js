import UserInput from "../../components/UserInput";
import Dropdowns from "../../components/Dropdowns";
import ResultsContainer from "../../components/ResultsContainer";

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
    <div className="homeContainer">
      <UserInput handleSearch={handleSearch} setQuery={setQuery} />
      <Dropdowns dropdowns={dropdowns} setDropdowns={setDropdowns} />
      <ResultsContainer
        results={results}
        setSelectedResult={setSelectedResult}
      />
    </div>
  );
}

export default Home;
