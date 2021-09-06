import { Row, Col, Card, Button } from "react-bootstrap";
const ViewedPeople = ({ message }) => {
  const num = [1, 2, 3, 4, 5];
  const listgenerate = () => {
    return (
      <li className="d-flex mt-3">
        <div className="card-imgs">
          <Card.Img
            src="https://image.flaticon.com/icons/png/512/149/149071.png"
            alt="user"
          />
        </div>
        <div className="card-person ml-3">
          <Card.Title>Iqboljon Zokiorv</Card.Title>
          <Card.Subtitle className="text-left">
            Senior Major Incident Manager at Capgemini
          </Card.Subtitle>
          <div className="text-left p-0 mt-1">
            <button>{message}</button>
          </div>
        </div>
      </li>
    );
  };
  return <ul className="people">{num.map((n) => listgenerate("Message"))}</ul>;
};

export default ViewedPeople;
