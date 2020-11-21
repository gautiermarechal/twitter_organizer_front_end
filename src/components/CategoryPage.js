import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  receiveTweetsByCategory,
  setCurrentCategory,
} from "../libs/actions/TweetsActions";
import SearchBar from "./SearchBar";
import Container from "react-bootstrap/Container";
import Tweet from "./Tweet";
import api from "../api/index";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "../constants/colors";

function CategoryPage() {
  const dispatch = useDispatch();
  const currentCategory = useParams().categoryId;
  const currentCategoryTitle =
    currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1);

  useEffect(() => {
    function get() {
      api
        .getTweetByCategory(currentCategory)
        .then((res) => {
          console.log(res.data);
          dispatch(receiveTweetsByCategory(res.data));
          dispatch(setCurrentCategory(currentCategory));
        })
        .catch();
    }
    get();
  }, []);

  const tweets = useSelector((state) => state.tweets.tweetsByCategory.data);

  const TitleContainer = styled.div`
    display: flex;
    width: 100%;
    background-color: ${COLORS[currentCategory]};
    height: 100px;
    color: white;
    justify-content: center;
    align-items: center;
  `;

  const SearchBarContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
  `;

  const MainGridContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    width: 100%;
  `;

  return (
    <>
      <TitleContainer>
        <h3>{currentCategoryTitle}</h3>
      </TitleContainer>
      <Container>
        <SearchBarContainer>
          <SearchBar />
        </SearchBarContainer>
        <MainGridContainer>
          {tweets &&
            tweets.map((element) => {
              const tweetIDFormatted =
                `${currentCategory}_` + element.tweet_organized_id;

              console.log(element.tweet_organized_content);

              return (
                <Tweet
                  key={tweetIDFormatted}
                  id={element.tweet_organized_id}
                  userName={element.user_name}
                  userUserName={element.user_screen_name}
                  userImageUrl={element.user_image_url}
                  tweetCategory={element.tweet_organized_category}
                  tweetDate={element.tweet_organized_date}
                  tweetContent={
                    element.tweet_organized_content
                      ? element.tweet_organized_content[0]
                      : element.tweet_organized_content
                  }
                  tweetContentExtended={element.tweet_organized_content}
                />
              );
            })}
        </MainGridContainer>
      </Container>
    </>
  );
}

export default CategoryPage;
