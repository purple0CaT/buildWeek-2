import { Card } from "react-bootstrap";
const Learning = () => {
  const num = [1, 2, 3, 4];
  const courses = () => {
    return (
      <li className="d-flex mt-3">
        <div className="card-imgs">
          <Card.Img
            src="https://landofstudies.tech/wp-content/uploads/2019/11/social-media.jpg"
            alt="user"
          />
        </div>
        <div className="card-person ml-3">
          <Card.Title>Social Media Marketing</Card.Title>
          <Card.Subtitle className="text-left">145.722 viewers</Card.Subtitle>
        </div>
      </li>
    );
  };
  return <ul className="people">{num.map((n) => courses())}</ul>;
};

export default Learning;
