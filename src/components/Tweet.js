import React, { useState, useEffect } from "react";
import styles from "./Tweet.module.css";
import styled from "styled-components";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link, useHistory } from "react-router-dom";
import { BsFillBookmarkFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { getExtendedTweetId } from "../libs/actions/ExtendedTweetActions";
import {
  asyncBookmarkTweet,
  asyncDeleteBookmarkTweet,
} from "../libs/actions/CurrentUserActions";
import { darkTheme } from "../constants/colors";
import { borders } from "../constants/borders";
import { shadows } from "../constants/shadows";

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
      ? `${darkTheme.higherOverlay}`
      : `${darkTheme.surface}`};
    color: ${props.isBookmarked && `${darkTheme.onSurface}`};
    border: ${borders.elevation0};
    width: 25%;
    transition: 0.2s;
    color: ${darkTheme.onSurface};
    margin-left: 10px;

    &:hover {
      background-color: ${darkTheme.hover};
    }
  `;

  const TweetContainer = styled.div`
    background-color: ${darkTheme.surface};
    box-shadow: ${shadows.two};
    border-radius: 20px !important;
    color: ${darkTheme.onSurface};
    margin: 15px;
  `;

  const TweetBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 20px;
  `;

  const TweetHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    text-align: left;
  `;

  const UserTag = styled.p`
    margin: 0px;
    color: ${darkTheme.higherOverlay};
    &:hover {
      text-decoration: underline;
    }
  `;

  const UserName = styled.p`
    margin: 0px;
    font-weight: bold;
  `;

  const Date = styled.p`
    margin: 0px;
    font-size: 13px;
    margin-top: 10px;
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
    padding-left: 10px;
    padding-right: 10px;
    width: 100%;
    &:hover {
      background-color: ${darkTheme.hover};
    }
  `;

  const InfoDiv = styled.div`
    display: flex;
    flex-direction: column;
  `;

  const TweetText = styled.p`
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 10px;
    margin-right: 10px;
    color: ${darkTheme.onSurface};
    text-align: left !important;
  `;

  const ReadButton = styled.button`
    border-radius: 50px !important;
    background-color: ${darkTheme.surface};
    border: ${borders.elevation0};
    width: 100%;
    transition: 0.2s;
    color: ${darkTheme.onSurface};

    &:hover {
      background-color: ${darkTheme.hover};
    }
  `;

  return (
    <TweetContainer key={props.key}>
      <TweetBody className={styles.tweetBody}>
        <TweetHeader className={styles.tweetHeader}>
          <img className={styles.userImage} src={props.userImageUrl} />
          <div>
            <Link to={`/user/${props.userUserName}`}>
              <UserName>{props.userName}</UserName>
            </Link>
            <Link to={`/user/${props.userUserName}`}>
              <UserTag>@{props.userUserName}</UserTag>
            </Link>
          </div>
          <InfoDiv>
            <Category
              onClick={() => history.push(`/category/${props.tweetCategory}`)}
            >{`${props.tweetCategory
              .charAt(0)
              .toUpperCase()}${props.tweetCategory.slice(1)}`}</Category>
            <Date>{formattedDate}</Date>
          </InfoDiv>
        </TweetHeader>
        {props.tweetContent && (
          <TweetText>{props.tweetContent[0].text}</TweetText>
        )}
        <hr style={{ backgroundColor: darkTheme.onSurface, width: "100%" }} />
        <div className={styles.buttonsTweetContainer}>
          <ReadButton onClick={handleReadTweet}>Read</ReadButton>
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
      </TweetBody>
    </TweetContainer>
  );
}

export default Tweet;
