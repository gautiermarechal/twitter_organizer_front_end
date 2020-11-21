import React, { useState, useEffect } from "react";
import styles from "./ExtendedTweet.module.css";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useDispatch, useSelector } from "react-redux";
import api from "../api/index";
import {
  requestExtendedTweet,
  getExtendedTweet,
} from "../libs/actions/ExtendedTweetActions";
import { useParams } from "react-router-dom";

function ExtendedTweet() {
  const dispatch = useDispatch();
  const tweetId = useParams().id;

  useEffect(() => {
    dispatch(requestExtendedTweet());
    if (tweetId === "") {
      return;
    }
    api.getTweetByID(tweetId).then((res) => {
      dispatch(getExtendedTweet(res.data));
    });
  }, [tweetId]);

  const extendedTweetObj = useSelector((state) => state.extendedTweet.data[0]);

  console.log(extendedTweetObj);

  return (
    <>
      {extendedTweetObj ? (
        <Container className={styles.mainContainer}>
          <article className={styles.articleContainer}>
            <Card className={styles.tweetContainer}>
              <Card.Body>
                <Row className={styles.tweetHeader}>
                  <Col>
                    <Card.Title>
                      <img
                        className={styles.userImage}
                        src={extendedTweetObj.user_image_url}
                      />
                      <p>{extendedTweetObj.user_name}</p>
                      <p>@{extendedTweetObj.user_screen_name}</p>
                    </Card.Title>
                    {extendedTweetObj.tweet_organized_category}
                    <p>{extendedTweetObj.tweet_organized_date}</p>
                  </Col>
                </Row>
                <Card.Text className={styles.tweetText}>
                  {extendedTweetObj.tweet_organized_content.map((text) => {
                    return <p>{text}</p>;
                  })}
                </Card.Text>
              </Card.Body>
            </Card>
          </article>
        </Container>
      ) : null}
    </>
  );
}

export default ExtendedTweet;
