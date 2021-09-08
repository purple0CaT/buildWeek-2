import "./App.css";
import Home from "./Components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import LinkedinNavbar from "./Components/Navbar";
import Feed from "./Components/Feed";

function App() {
  return (
    <Router>
      <LinkedinNavbar />
      <Route path="/" exact component={Feed} />
      <Route path="/feed" exact component={Feed} />
      <Route path="/home/:id" exact component={Home} />
      <Footer />
    </Router>
  );
}

export default App;
