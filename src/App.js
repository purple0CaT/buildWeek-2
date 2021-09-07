import "./App.css";
import Home from "./Components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import LinkedinNavbar from "./Components/Navbar";
import { Container } from "react-bootstrap";
function App() {
  return (
    <div className="App">
      <Router>
        <Container>
          <LinkedinNavbar />
          <Route path="/" component={Home} />
          <Route path="/home/:id" component={Home} />
          <Footer />
        </Container>
      </Router>
    </div>
  );
}

export default App;
