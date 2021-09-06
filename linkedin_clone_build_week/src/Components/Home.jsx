import { Row, Container, Col } from "react-bootstrap";
import LinkedinNavbar from "./Navbar";
import Aside from "./Aside";
import Footer from "./Footer";
import SideFooter from "./SideFooter";
import MainContainer from "./MainContainer";
import About from "./About";
import Dashboard from "./Dashboard";
import Activity from "./Activity";

const Home = () => {
  return (
    <Container>
      <LinkedinNavbar />
      <Row>
        <Col sm={12} md={9}>
          <br />
          <MainContainer />
          <Dashboard />
          <About />
          <Activity />
          <Footer />
        </Col>
        <Col sm={0} md={3}>
          <Aside />
          <SideFooter />
          Develop
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
