import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Feed from "./Components/Feed";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Feed} />
      <Route path="/feed" exact component={Feed} />
    </Router>
  );
}

export default App;
