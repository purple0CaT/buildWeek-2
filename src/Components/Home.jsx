import { Row, Container, Col } from "react-bootstrap";
import LinkedinNavbar from "./Navbar";
import Aside from "./Aside";
import Footer from "./Footer";
import SideFooter from "./SideFooter";
import MainContainer from "./MainContainer";
import About from "./About";
import Dashboard from "./Dashboard";
import Activity from "./Activity";
import Experience from "./Experience";

const Home = () => {
  return (
    <Row>
      <Col sm={12} md={9}>
        <br />
        {/* PASS THE ID IN clickId */}
        <MainContainer clickId={null} />
        <Dashboard />
        <About />
        <Activity />
        <Experience/>
      </Col>
      <Col sm={0} md={3}>
        <Aside />
      </Col>
    </Row>
  );
};

export default Home;
