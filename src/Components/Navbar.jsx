import {
  Navbar,
  Nav,
  FormControl,
  Button,
  Col,
  Row,
  Container,
  Form,
  NavDropdown,
  Image,
  Card,
} from "react-bootstrap";
import React from "react";
import {
  BsFillHouseDoorFill,
  BsPeopleFill,
  BsChatQuoteFill,
  BsBellFill,
  BsFillCalendarFill,
  BsSearch,
} from "react-icons/bs";
import { FcFilm, FcComboChart, FcBusinessContact } from "react-icons/fc";
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";
import { FaSuitcase, FaTeamspeak } from "react-icons/fa";
import { GrWaypoint } from "react-icons/gr";
import { GiReceiveMoney } from "react-icons/gi";
import { RiPhoneFindLine, RiAdvertisementFill } from "react-icons/ri";
import pro from "./download.png";
import { Link, withRouter } from "react-router-dom";
import { useState, useEffect } from "react";
const LinkedinNavbar = () => {

const token = process.env.REACT_APP_TOKENACCESS;
const [meProfile, setMeProfile] = useState(null)

  /* Function to fetch profile */
  const fetchProfile = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/me",
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      if (response.ok) {
        const myProfile = await response.json()
        console.log(myProfile)
        setMeProfile(myProfile)
      } else {
        console.log("there was a4n error")
      }
    } catch (error) {
      console.log("there was an error")
    }
  }
  useEffect(() => {
    fetchProfile()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <div id="linkedIn-navbar" className="border-bottom">
      <Container id="main">
        <Row>
          <Col className="Left-ico-search" xs={4}>
            <Navbar id="nav23">
              <Navbar.Brand className="d-flex">
                <Image
                  id="logoIN"
                  src="https://image.flaticon.com/icons/png/512/174/174857.png"
                  width="40"
                  height="40"
                  className="mr-2"
                />
                <Form>
                  <Form.Group
                    id="NavIcon"
                    className="d-flex"
                    controlId="searchBar"
                  >
                    <Form.Label>
                      <BsSearch />
                    </Form.Label>
                    <FormControl
                      type="search"
                      placeholder="Search"
                      className="mr-2 SearchMe"
                    />
                  </Form.Group>
                </Form>
              </Navbar.Brand>
            </Navbar>
          </Col>
          <Col xs={1}>
            <Row className="NavIco">
              <Link to="/">
                <BsFillHouseDoorFill />
              </Link>
            </Row>
            <Row className="navName">
              <Link to="/">Home</Link>
            </Row>
          </Col>

          <Col xs={1}>
            <Row className="NavIco">
              <Nav.Link>
                <BsPeopleFill />
              </Nav.Link>
            </Row>
            <Row className="navName">
              <Nav.Link> My Network</Nav.Link>
            </Row>
          </Col>
          <Col xs={1}>
            <Row className="NavIco">
              <Nav.Link>
                <FaSuitcase />
              </Nav.Link>
            </Row>
            <Row className="navName">
              <Nav.Link> Jobs</Nav.Link>
            </Row>
          </Col>
          <Col xs={1}>
            <Row className="NavIco">
              <Nav.Link>
                <BsChatQuoteFill />
              </Nav.Link>
            </Row>
            <Row className="navName">
              <Nav.Link> Messaging</Nav.Link>
            </Row>
          </Col>
          <Col xs={1}>
            <Row className="NavIco">
              <Nav.Link>
                <BsBellFill />
              </Nav.Link>
            </Row>
            <Row className="navName">
              <Nav.Link> Notification</Nav.Link>
            </Row>
          </Col>

          <Col xs={1}>
            <Row className="NavIco">
              <Nav.Link>
                <Col xs={6} md={4}>
                  <Image id="miniat" src={meProfile && meProfile.image} roundedCircle />
                </Col>
              </Nav.Link>
            </Row>
            <Row>

              <NavDropdown id="navnMe" title="Me">
                <NavDropdown.Item id="meForm">
                  <Row>
                    <Col>
                      <Image
                        id="miniat"
                        src={meProfile && meProfile.image}
                        roundedCircle
                        className="d-flex"
                      />
                    </Col>
                    <Col id="" className="d-flex m-1">
                      {meProfile &&
                        `${meProfile.name} ${meProfile.surname}`}
                    </Col>
                    <Col className="d-flex m-1">
                      Strive School Student <br /> Full Stack Developer
                    </Col>
                  </Row>
                  <Link to="/home" style={{ textDecoration: 'none' }}>
                  <Button id="button-myPage" variant="outline-primary"
                    variant="outline-primary"
                  >
                    View Profile
                  </Button>
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item id="dropMe">
                  <b>Account</b>
                </NavDropdown.Item>
                <NavDropdown.Item id="dropMe">
                  Settings and Privacy
                </NavDropdown.Item>
                <NavDropdown.Item id="dropMe">Help</NavDropdown.Item>
                <NavDropdown.Item id="dropMe">Language</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item id="dropMe">
                  <b> Manage</b>
                </NavDropdown.Item>
                <NavDropdown.Item id="dropMe">Post & Activity</NavDropdown.Item>
                <NavDropdown.Item id="dropMe">
                  Job Posting Account
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item id="dropMe">Sign Out</NavDropdown.Item>
              </NavDropdown>
            </Row>
          </Col>

          <Col xs={1}>
            <Row className="NavIco">
              <Nav.Link>
                <BsFillCalendarFill />
              </Nav.Link>
            </Row>
            <Row>
              <NavDropdown id="navnMe" title="Work">
                <NavDropdown.Item>
                  <AiOutlineClose />
                </NavDropdown.Item>
                <NavDropdown.Item id="dropMe">
                  Visit more LinkedIn Products
                </NavDropdown.Item>
                <Card style={{ width: "23rem" }}>
                  <Row className="multy-Icons">
                    <Col>
                      <FcFilm />
                      <p id="dropMe2">Learning</p>
                    </Col>
                    <Col>
                      <FcComboChart />
                      <p id="dropMe2">Insights</p>
                    </Col>
                    <Col>
                      <FcBusinessContact />
                      <p id="dropMe2">Public a Job Offer</p>
                    </Col>
                    <Col>
                      <RiAdvertisementFill />
                      <p id="dropMe2">Advert.</p>
                    </Col>
                  </Row>
                  <Row className="multy-Icons">
                    <Col>
                      <GrWaypoint />
                      <p id="dropMe2">Find lead</p>
                    </Col>
                    <Col>
                      <FaTeamspeak />
                      <p id="dropMe2">Teams</p>
                    </Col>
                    <Col>
                      <RiPhoneFindLine />
                      <p id="dropMe2">ProFinder</p>
                    </Col>
                    <Col>
                      <GiReceiveMoney />
                      <p id="dropMe2">Salary</p>
                    </Col>
                  </Row>
                  <Card.Body></Card.Body>
                </Card>
                <Card style={{ width: "23rem" }}>
                  <Row className="multy-Icons"></Row>
                  <NavDropdown.Item id="dropMe">
                    LinkedIn Business Services
                  </NavDropdown.Item>
                  <Card.Body>
                    <NavDropdown.Item id="dropMe">
                      <b>Talent Solutions</b>
                      <p>
                        <small>Find, attract and recruit talent</small>
                      </p>
                    </NavDropdown.Item>
                    <NavDropdown.Item id="dropMe">
                      <b>Sales Solutions</b>
                      <p>
                        <small>Unlock new sales opportunities</small>
                      </p>
                    </NavDropdown.Item>
                    <NavDropdown.Item id="dropMe">
                      <b>Post a free job offer</b>
                      <p>
                        <small>
                          Reach the best candidates with your job offer
                        </small>
                      </p>
                    </NavDropdown.Item>
                    <NavDropdown.Item id="dropMe">
                      <b>Marketing Solutions</b>
                      <p>
                        <small>Acquire customers and grow your business</small>
                      </p>
                    </NavDropdown.Item>
                    <NavDropdown.Item id="dropMe">
                      <b>Learning Solutions</b>
                      <p>
                        <small>
                          Promote the acquisition of skills in your organization
                        </small>
                      </p>
                    </NavDropdown.Item>
                    <NavDropdown.Item id="dropMe">
                      <b>Create a new Business page</b>
                      <AiOutlinePlus id="spaceMe" />
                    </NavDropdown.Item>
                  </Card.Body>
                </Card>
              </NavDropdown>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LinkedinNavbar;
