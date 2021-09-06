import { Row, Container, Col } from "react-bootstrap";
import LinkedinNavbar from "./Navbar";

const Home = () => {
  return (
    <Container>
      <LinkedinNavbar/>
      <Row>
        <Col sm={12} md={9}>
          <h1>MainContainer</h1>
        </Col>
        <Col sm={0} md={3}>
          <h1>Aside</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
