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
import TweetsGrid from "./TweetsGrid";

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

  return (
    <>
      <TitleContainer>
        <h3>{currentCategoryTitle}</h3>
      </TitleContainer>
      <Container>
        <SearchBarContainer>
          <SearchBar />
        </SearchBarContainer>
        <TweetsGrid tweets={tweets} />
      </Container>
    </>
  );
}

export default CategoryPage;
