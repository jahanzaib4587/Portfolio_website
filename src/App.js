import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Connector from "./Connector";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Connector />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
