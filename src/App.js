import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Results from "./pages/Results";
import API from "./utils/API";

function App() {
  const [results, setResults] = useState();
  const [selectedResult, setSelectedResult] = useState();
  const [query, setQuery] = useState();
  const [dropdowns, setDropdowns] = useState({
    language: "all",
    order: "desc",
  });

  // github api axios call using user input set as 'query', then sets 'results'
  const handleSearch = (e) => {
    e.preventDefault();
    if (query === undefined) {
      alert("Please enter a search term");
    } else {
      setResults();
      const replaceQuery = query.query.replace(/\s/g, "+");
      API.getRepo(replaceQuery, dropdowns).then((res) => {
        if (res.data.incomplete_results === true) {
          alert("Search can not be completed with the given terms");
        } else if (res.data.items[0] === undefined) {
          alert("No results with the given terms");
        } else {
          setResults(res.data.items);
        }
      });
    }
  };

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/github-repo-search">
            <Home
              setQuery={setQuery}
              dropdowns={dropdowns}
              setDropdowns={setDropdowns}
              handleSearch={handleSearch}
              results={results}
              setSelectedResult={setSelectedResult}
            />
          </Route>
          <Route exact path="/github-repo-search/results">
            <Results
              selectedResult={selectedResult}
              setSelectedResult={setSelectedResult}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
