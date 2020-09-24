import React, { useState, useEffect, useContext } from "react";
import styles from "./Tweet.module.css";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import test_image from "../assets/images/test_image.png";
import { useAppContext } from "../libs/contextLibs";
import { useHistory } from "react-router-dom";

function Tweet(props) {
  const [formattedDate, setFormattedDate] = useState();
  const [url, setUrl] = useState();
  const { setTweetContent } = useAppContext();
  const history = useHistory();
  useEffect(() => {
    setFormattedDate(props.tweetDate.substring(0, 10));
    setUrl("/" + props.key);
    console.log(props.key);
  }, []);

  function handleReadTweet() {
    setTweetContent({
      name: props.userName,
      screenName: props.userUserName,
      date: props.tweetDate.substring(0, 10),
      content: props.tweetContent,
      category: props.tweetCategory,
    });

    history.push("/extended");
  }

  return (
    <Card className={styles.tweetContainer}>
      <Card.Body>
        <Row className={styles.tweetHeader}>
          <Col style={{ textAlign: "center" }}>
            <img className={styles.userImage} src={test_image} />
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
            {props.tweetCategory}{" "}
            <p style={{ fontSize: "12px", marginTop: "5px" }}>
              {formattedDate}
            </p>
          </Col>
        </Row>
        <Card.Text className={styles.tweetText}>{props.tweetContent}</Card.Text>
        <hr style={{ backgroundColor: "#d0f6e3" }} />
        <Button className={styles.readButton} onClick={handleReadTweet}>
          Read
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Tweet;
