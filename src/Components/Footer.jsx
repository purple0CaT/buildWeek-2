import {
  Container,
  Row,
  Col,
  ButtonGroup,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import { FaQuestionCircle } from "react-icons/fa";
import { MdSettings } from "react-icons/md";
const Footer = () => {
  return (
    <>
      <footer id="main-footer">
        <Container>
          <Row>
            <Col xs={6} md={9}>
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
            </Col>
            <Col xs={12} md={3}>
              <div>
                <label
                  for="dropdown-button-drop-up"
                  className="mr-5 text-muted"
                >
                  <small>Select Language</small>
                </label>
                <DropdownButton
                  as={ButtonGroup}
                  key="up"
                  id="dropdown-button-drop-up"
                  drop="up"
                  title="English(English)"
                >
                  <Dropdown.Item eventKey="1">English</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Italian</Dropdown.Item>
                  <Dropdown.Item eventKey="3">Turkish</Dropdown.Item>
                </DropdownButton>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
