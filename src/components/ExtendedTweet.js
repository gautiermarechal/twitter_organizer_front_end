import React, { useEffect, useState } from "react";
import styles from "./ExtendedTweet.module.css";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import api from "../api/index";
import {
  requestExtendedTweet,
  getExtendedTweet,
} from "../libs/actions/ExtendedTweetActions";
import { Link, useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import { darkTheme } from "../constants/colors";
import { borders } from "../constants/borders";
import moment from "moment";
import { Row, Col } from "react-bootstrap";

function ExtendedTweet() {
  const history = useHistory();
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

  const parsedDate = (date) => {
    return moment(date).format("D, MMM, YYYY");
  };
  return (
    <>
      {extendedTweetObj ? (
        <Container>
          <Row>
            <Col>
              <Article>
                <TweetContainer>
                  <TweetHeader>
                    <Flex>
                      <Link to={`/user/${extendedTweetObj.user_name}`}>
                        <UserImage src={extendedTweetObj.user_image_url} />
                      </Link>
                      <Info>
                        <Link to={`/user/${extendedTweetObj.user_name}`}>
                          <UserName>{extendedTweetObj.user_name}</UserName>
                        </Link>
                        <Link to={`/user/${extendedTweetObj.user_name}`}>
                          <UserTag>
                            @{extendedTweetObj.user_screen_name}
                          </UserTag>
                        </Link>
                      </Info>
                    </Flex>
                    <Info>
                      <Category
                        onClick={() =>
                          history.push(
                            `/category/${extendedTweetObj.tweet_organized_category}`
                          )
                        }
                      >
                        <h4>{`${extendedTweetObj.tweet_organized_category
                          .charAt(0)
                          .toUpperCase()}${extendedTweetObj.tweet_organized_category.slice(
                          1
                        )}`}</h4>
                      </Category>
                      <Date>
                        {parsedDate(extendedTweetObj.tweet_organized_date)}
                      </Date>
                    </Info>
                  </TweetHeader>
                  <TweetText>
                    {extendedTweetObj.tweet_organized_content[0].map((item) => {
                      return (
                        <TweetItemLink
                          target="_blank"
                          href={`https://twitter.com/${extendedTweetObj.user_screen_name}/status/${item.id}`}
                        >
                          {item.text}
                        </TweetItemLink>
                      );
                    })}
                  </TweetText>
                </TweetContainer>
              </Article>
            </Col>
          </Row>
        </Container>
      ) : null}
    </>
  );
}

const Article = styled.article`
  margin: 60px 150px 40px 150px;
`;

const TweetContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${darkTheme.onSurface};
`;

const TweetHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
`;

const UserImage = styled.img`
  border-radius: 100px;
`;

const Category = styled.button`
  background-color: ${darkTheme.surface};
  border: ${borders.elevation0};
  transition: 0.2s;
  color: ${darkTheme.onSurface};
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 15px 10px 15px;
  width: 100%;
  &:hover {
    background-color: ${darkTheme.hover};
  }
  h4 {
    margin: 0px;
  }
`;

const UserTag = styled.p`
  margin: 0px;
  color: ${darkTheme.higherOverlay};
  &:hover {
    text-decoration: underline;
  }
  margin-left: 20px;
  cursor: pointer;
`;

const UserName = styled.h2`
  margin: 0px;
  font-weight: bold;
  margin-left: 20px;
`;

const Date = styled.p`
  margin: 0px;
  text-align: right;
  margin-top: 5px;
  margin-right: 5px;
`;

const TweetText = styled.div`
  margin-top: 30px;
  text-align: left;
  line-height: 2;
  font-size: 25px;
  display: flex;
  flex-direction: column;
`;

const TweetItemLink = styled.a`
  margin-bottom: 10px;
  transition: 0.2s;
  border-radius: 8px;
  margin-left: -10px;
  margin-right: -10px;
  padding: 10px;

  &:hover {
    background-color: ${darkTheme.hover};
  }
`;

export default ExtendedTweet;
