import { Row, Col, Card, Button } from "react-bootstrap";
import { BsThreeDots } from "react-icons/bs";
import Learning from "./Learning";
import ViewedPeople from "./ViewedPeople";
import { AiFillQuestionCircle } from "react-icons/ai";
const Aside = () => {
  return (
    <>
      <Row className="mt-5">
        <div className="d-flex w-100">
          <div>Edit public profile & URL </div>
          <div className="icon justify-content-end">
            <AiFillQuestionCircle />
          </div>
        </div>
        <div className="d-flex">
          <div>Add profile in another language </div>
          <div className="icon ml-auto">
            <AiFillQuestionCircle />
          </div>
        </div>
      </Row>
      <Row className="mt-3">
        <Card className="aside-card w-100 justify-content-start">
          <Card.Body>
            <Card.Text className="badge">
              <small>
                Ad <BsThreeDots />
              </small>
            </Card.Text>
            <Card.Title className="title">
              <small>Get the latest jobs and industry news</small>
            </Card.Title>
            <div className="d-flex imgs justify-content-center">
              <Card.Img
                className="mr-3"
                src="https://image.flaticon.com/icons/png/512/149/149071.png"
                alt="user"
              ></Card.Img>
              <Card.Img
                src="https://image.flaticon.com/icons/png/512/149/149071.png"
                alt="user"
              ></Card.Img>
            </div>
            <Card.Text className="body-text text-center">
              Azizbek, explore relevant opportunities with EPAM Systems
            </Card.Text>
            <Button variant="outline-primary">Follow</Button>
          </Card.Body>
        </Card>
      </Row>
      <Row className="mt-4">
        <Card id="viewed">
          <Card.Title>People also viewed</Card.Title>
          <ViewedPeople message="Connect" />
        </Card>
      </Row>
      <Row className="mt-4">
        <Card id="may-know">
          <Card.Title>People you may know</Card.Title>
          <ViewedPeople message="Connect" />
        </Card>
      </Row>
      <Row className="mt-4">
        <Card id="learning">
          <Card.Title>
            Add new skills with these courses, free for 24 hours
          </Card.Title>
          <Learning />
        </Card>
      </Row>
    </>
  );
};

export default Aside;
