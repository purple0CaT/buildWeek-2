import { Card } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";

const ViewedPeople = ({ message, data }) => {
  const num = [1, 2, 3, 4, 5];
  const startingIndex = message === "Message" ? 0 : 6;
  const endingIndex = message === "Message" ? 5 : 11;
 
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
          <Card.Subtitle className="text-left"></Card.Subtitle>
          <div className="text-left p-0 mt-1">
            <button>{message}</button>
          </div>
        </div>
      </li>
    );
  };
  return (
    <ul className="people">
      {data.data &&
        data.data.slice(startingIndex, endingIndex).map((person) => (
          <li className="d-flex mt-3">
            <Link to={"/home/" + person._id} className="d-flex mt-3">
              <div className="card-imgs">
                <Card.Img src={person.image} alt="user" />
              </div>
              <div className="card-person ml-3">
                <Card.Title>
                  {person.name} {person.surname}
                </Card.Title>
                <Card.Subtitle className="text-left">
                  {person.title}
                </Card.Subtitle>
                <div className="text-left p-0 mt-1">
                  <button>{message}</button>
                </div>
              </div>
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default withRouter(ViewedPeople);
