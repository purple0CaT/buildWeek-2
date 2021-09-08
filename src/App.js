import "./App.css";
import Home from "./Components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import LinkedinNavbar from "./Components/Navbar";
import { Container } from "react-bootstrap";
function App() {
  return (
      <Router>
          <LinkedinNavbar />
          <Route path="/" exact component={Home} />
          <Route path="/home/:id" exact component={Home} />
          <Footer />
      </Router>
  );
}

export default App;
