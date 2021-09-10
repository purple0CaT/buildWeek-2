import { Button, Card } from "react-bootstrap";
import ModalItem from "./Modal";
import { BsCardImage } from "react-icons/bs";
import { AiFillPlaySquare } from "react-icons/ai";
import { SiGooglecalendar } from "react-icons/si";
import { RiArticleFill } from "react-icons/ri";
import ImageForPost from "./ImageForPost";
const PostFeed = ({ onNewPostFunction }) => {
  return (
    <Card id="post-card">
      <Card.Body>
        <div className="d-flex wrapper">
          <div className="profile-img">
            <img
              src="https://www.kindpng.com/picc/m/269-2697881_computer-icons-user-clip-art-transparent-png-icon.png"
              alt=""
            />
          </div>
          <div className="post-btn w-100">
            <ModalItem title="post" onNewPost={onNewPostFunction} />
          </div>
        </div>

        <div className="d-flex icons-wrapper">
          <div>
            <BsCardImage
              style={{ color: "#70b5f9" }}
              size={25}
              className="mr-2"
            />{" "}
            Photo
          </div>
          <div>
            <AiFillPlaySquare
              style={{ color: "#7fc15e" }}
              size={25}
              className="mr-2"
            />{" "}
            Video
          </div>
          <div>
            <SiGooglecalendar
              style={{ color: "#E7ae3e" }}
              size={25}
              className="mr-2"
            />{" "}
            Event
          </div>
          <div>
            <RiArticleFill
              style={{ color: "#fc9295" }}
              size={25}
              className="mr-2"
            />{" "}
            Write Article
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default PostFeed;
