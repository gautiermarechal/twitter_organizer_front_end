import React, { useState, useEffect } from "react";
import styles from "./Tweet.module.css";
import styled from "styled-components";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link, useHistory, useParams } from "react-router-dom";
import { BsFillBookmarkFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  getExtendedTweet,
  getExtendedTweetId,
} from "../libs/actions/ExtendedTweetActions";
import apis, { bookmarkTweet } from "../api";
import {
  asyncBookmarkTweet,
  asyncDeleteBookmarkTweet,
  deleteBookmarkTweet,
} from "../libs/actions/CurrentUserActions";

function Tweet(props) {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser);
  const tweetId = props.id;
  const [formattedDate, setFormattedDate] = useState();
  const [url, setUrl] = useState();
  const history = useHistory();
  useEffect(() => {
    setFormattedDate(props.tweetDate.substring(0, 10));
    setUrl("/" + props.key);
  }, []);

  function handleReadTweet() {
    dispatch(getExtendedTweetId(tweetId));

    history.push(`/extended/${tweetId}`);
  }

  const handleBookmarkTweet = (userid, tweetid) => {
    dispatch(asyncBookmarkTweet(userid, tweetid));
  };

  const handleDeleteBookmarkTweet = (userid, tweetid) => {
    dispatch(asyncDeleteBookmarkTweet(userid, tweetid));
  };

  const BookmarkButton = styled(Button)`
    border-radius: 50px !important;
    background-color: ${props.isBookmarked
      ? "#d0f6e3 !important"
      : "#16212b !important"};
    color: ${props.isBookmarked && "#16212b !important"};
    border-color: #d0f6e3 !important;
    width: 25%;
    margin-left: 10px;

    &:hover {
      background-color: #d0f6e3 !important;
      color: #16212b !important;
    }
  `;

  return (
    <Card className={styles.tweetContainer} key={props.key}>
      <Card.Body className={styles.tweetBody}>
        <Row className={styles.tweetHeader}>
          <Col style={{ textAlign: "center" }}>
            <img className={styles.userImage} src={props.userImageUrl} />
          </Col>
          <Col>
            <Card.Title>
              <Link to={`/user/${props.userUserName}`}>
                <p style={{ fontSize: "15px", marginTop: "5px" }}>
                  {props.userName}
                </p>
              </Link>
              <Link to={`/user/${props.userUserName}`}>
                <p style={{ fontSize: "12px", marginTop: "5px" }}>
                  @{props.userUserName}
                </p>
              </Link>
            </Card.Title>
          </Col>
          <Col>
            {props.tweetCategory}
            <p style={{ fontSize: "12px", marginTop: "5px" }}>
              {formattedDate}
            </p>
          </Col>
        </Row>
        {props.tweetContent &&
          (typeof props.tweetContent === "string" ? (
            <Card.Text className={styles.tweetText}>
              {props.tweetContent}
            </Card.Text>
          ) : (
            props.tweetContentExtended.map((text) => {
              return <Card.Text className={styles.tweetText}>{text}</Card.Text>;
            })
          ))}
        <hr style={{ backgroundColor: "#d0f6e3", width: "100%" }} />
        <div className={styles.buttonsTweetContainer}>
          <Button className={styles.readButton} onClick={handleReadTweet}>
            Read
          </Button>
          <BookmarkButton
            onClick={
              props.isBookmarked
                ? () =>
                    handleDeleteBookmarkTweet(
                      currentUser.currentUser.id,
                      props.id
                    )
                : () =>
                    handleBookmarkTweet(currentUser.currentUser.id, props.id)
            }
          >
            <BsFillBookmarkFill />
          </BookmarkButton>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Tweet;
