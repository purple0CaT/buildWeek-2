import { Row, Container, Col } from "react-bootstrap";
import LinkedinNavbar from "./Navbar";
import Aside from "./Aside";
import Footer from "./Footer";
import SideFooter from "./SideFooter";
import MainContainer from "./MainContainer";
const Home = () => {
  return (
    <Container>
      <LinkedinNavbar/>
      <Row>
        <Col sm={12} md={9}>
          <br />
          <br />
          <br />
          <MainContainer />
          <Footer />
        </Col>
        <Col sm={0} md={3}>
          <Aside />
          <SideFooter />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;

