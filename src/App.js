import "./App.css";
import PageOne from "./PageOne";
import PageSecond from "./PageSecond";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Switch } from "react-router-dom";

// password show/not show
// must be 8 char long
// font spacing

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact className="nav">
          <Link to="/page1">Page 1</Link>
          <br />
          <Link to="/page2">Page 2</Link>
        </Route>
        <Route path="/page1">
          <PageOne />
        </Route>
        <Route path="/page2">
          <PageSecond />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
