import "./App.css";
import Home from "./Components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
function App() {
  return (
    <div className="App">
      <Router>
        <Container>
          <Route path="/" exact component={Home} />
          <Route path="/home/:id" exact component={Home} />
        </Container>
      </Router>
    </div>
  );
}

export default App;
