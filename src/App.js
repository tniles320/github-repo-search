import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import API from "./utils/API";

function App() {
  useEffect(() => {
    API.getRepo().then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
