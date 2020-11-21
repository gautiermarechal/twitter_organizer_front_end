import React, { useState, useEffect } from "react";
import styles from "./Tweet.module.css";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useTweetContext } from "../libs/tweetContext";
import { useHistory, useParams } from "react-router-dom";
import { BsFillBookmarkFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import {
  getExtendedTweet,
  getExtendedTweetId,
} from "../libs/actions/ExtendedTweetActions";
import api from "../api/index";

function Tweet(props) {
  const dispatch = useDispatch();
  const tweetId = props.id;
  const [formattedDate, setFormattedDate] = useState();
  const [url, setUrl] = useState();
  const { handleSetTweetContent } = useTweetContext();
  const history = useHistory();
  useEffect(() => {
    setFormattedDate(props.tweetDate.substring(0, 10));
    setUrl("/" + props.key);
  }, []);

  function handleReadTweet() {
    dispatch(getExtendedTweetId(tweetId));
    handleSetTweetContent({
      name: props.userName,
      screenName: props.userUserName,
      userImageUrl: props.userImageUrl,
      date: props.tweetDate.substring(0, 10),
      content: props.tweetContentExtended,
      category: props.tweetCategory,
    });

    history.push(`/extended/${tweetId}`);
  }

  // const handleBookmarkTweet = async (userid, tweetid) => {
  //   api.bookmarkTweet()
  // };

  return (
    <Card className={styles.tweetContainer} key={props.key}>
      <Card.Body className={styles.tweetBody}>
        <Row className={styles.tweetHeader}>
          <Col style={{ textAlign: "center" }}>
            <img className={styles.userImage} src={props.userImageUrl} />
          </Col>
          <Col>
            <Card.Title>
              <p style={{ fontSize: "15px", marginTop: "5px" }}>
                {props.userName}
              </p>
              <p style={{ fontSize: "12px", marginTop: "5px" }}>
                @{props.userUserName}
              </p>
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
          <Button className={styles.bookmarkButton}>
            <BsFillBookmarkFill />
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Tweet;
