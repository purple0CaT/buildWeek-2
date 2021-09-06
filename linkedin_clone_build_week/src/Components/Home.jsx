import { Row, Container, Col } from "react-bootstrap";
import Footer from "./Footer";
import SideFooter from "./SideFooter";
const Home = () => {
  return (
    <Container>
      <Row>
        <Col sm={12} md={9}>
          <h1>MainContainer</h1>
          <Footer />
        </Col>
        <Col sm={0} md={3}>
          <h1>Aside</h1>
          <SideFooter />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
