import { Card } from "react-bootstrap";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import {
  RiShareForwardFill,
  RiGlobalFill,
  RiSendPlaneFill,
} from "react-icons/ri";
import formatDistance from "date-fns/formatDistance";

const SingleFeed = ({ post }) => {
  const result = formatDistance(new Date(), new Date(post.createdAt));
  const profileImg = post.user.image
    ? post.user.image
    : "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png";
  return (
    <Card className="feed mt-2" key={post._id}>
      <Card.Body>
        <Card.Title className="d-flex">
          <div className="user-info-side d-flex">
            <div className="user-img mr-3">
              <img src={profileImg} />
            </div>
            <div className="user-info">
              <h4>
                <b>
                  {post.user.name} {post.user.surname}
                </b>{" "}
                - 1st
              </h4>
              <p>{post.user.title}</p>
              <p>
                {result} ago - <RiGlobalFill />
              </p>
            </div>
          </div>
          <div className="ml-auto">
            <BsThreeDots />
          </div>
        </Card.Title>
        <Card.Text>{post.text}</Card.Text>
        {post.image && <Card.Img src={post.image} />}
        <Card.Body className="footer-icons d-flex">
          <div>
            <AiOutlineLike size={20} /> <span>Like</span>
          </div>
          <div>
            <FaRegCommentDots size={20} />
            <span> Comment</span>
          </div>
          <div>
            <RiShareForwardFill size={20} /> <span>Share</span>
          </div>
          <div>
            <RiSendPlaneFill size={20} /> <span>Send</span>
          </div>
        </Card.Body>
      </Card.Body>
    </Card>
  );
};

export default SingleFeed;
