import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Feed from "./Components/Feed";
import Home from "./Components/Home";
import LinkedinNavbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Router>
        <LinkedinNavbar />
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/home/:id" component={Home} />
          <Route path="/" exact component={Feed} />
          <Route path="/feed" exact component={Feed} />
          <Route
            render={() => (
              <h1 className="text-danger text-center pt-5">404 - NOT FOUND</h1>
            )}
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
