import { Container, Row, Col } from "react-bootstrap";
import { FaQuestionCircle } from "react-icons/fa";
import { MdSettings } from "react-icons/md";
const Footer = () => {
  return (
    <>
      <footer id="main-footer">
        <Container>
          <Row>
            <Col xs={6} md={3}>
              <ul>
                <li>About</li>
                <li>Community Guidelines</li>
                <li>Privacy & Terms</li>
                <li>Sales Solutions</li>
                <li>Safety Center</li>
              </ul>
            </Col>
            <Col xs={6} md={3}>
              <ul>
                <li>Accesibility</li>
                <li>Careers</li>
                <li>Ad Choices</li>
                <li>Mobile</li>
              </ul>
            </Col>
            <Col xs={6} md={3}>
              <ul>
                <li>Talent Solutions</li>
                <li>Marketing Solutions</li>
                <li>Advertising</li>
                <li>Small Business</li>
              </ul>
            </Col>
            <Col xs={6} md={3}>
              <ul>
                <li className="big-font">
                  <FaQuestionCircle size={20} /> Questions
                  <p>
                    <small>VIsit our Help Center.</small>
                  </p>
                </li>
                <li className="big-font">
                  <MdSettings size={20} /> Manage your account and privacy
                  <p>
                    <small>Go to your Settings</small>
                  </p>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
