import { Row, Container, Col } from "react-bootstrap";
import MainContainer from "./MainContainer";

const Home = () => {
  return (
    <Container>
      <Row>
        <Col sm={12} md={9}>
          <MainContainer />
        </Col>
        <Col sm={0} md={3}>
          <h1>Aside</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
