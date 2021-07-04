import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  asyncFollowCurrentCategory,
  asyncUnFollowCurrentCategory,
  receiveTweetsByCategory,
  setCurrentCategory,
  toggleFollowCurrentCategory,
} from "../libs/actions/TweetsActions";
import SearchBar from "./SearchBar";
import Container from "react-bootstrap/Container";
import api from "../api/index";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "../constants/colors";
import TweetsGrid from "./TweetsGrid";
import { AiOutlinePlus } from "react-icons/ai";
import { BsCheck } from "react-icons/bs";

function CategoryPage() {
  const dispatch = useDispatch();
  const currentCategory = useParams().categoryId;
  const currentCategoryTitle =
    currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1);
  const currentUser = useSelector((state) => state.currentUser.currentUser);
  const tweets = useSelector((state) => state.tweets.tweetsByCategory.data);
  const isFollowed = useSelector((state) => state.tweets.followed);
  useEffect(() => {
    if (!currentCategory || !currentUser.categoriesFollowed) {
      return;
    }
    api
      .getTweetByCategory(currentCategory)
      .then((res) => {
        dispatch(receiveTweetsByCategory(res.data));
        dispatch(setCurrentCategory(currentCategory));
      })
      .then(() => {
        if (currentUser.categoriesFollowed.includes(currentCategory)) {
          dispatch(toggleFollowCurrentCategory(true));
        } else {
          dispatch(toggleFollowCurrentCategory(false));
        }
      })
      .catch();
  }, [currentUser, currentCategory]);

  const TitleContainer = styled.div`
    display: flex;
    width: 100%;
    background-color: ${COLORS[currentCategory]};
    height: 100px;
    color: white;
    justify-content: center;
    align-items: center;
    position: relative;
  `;

  const SearchBarContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
  `;

  const FollowButton = styled.button`
    border: none;
    background-color: transparent;
    display: flex;
    position: absolute;
    right: 0;
    height: 100%;
    width: 100px;
    align-items: center;
    justify-content: center;
    color: white;
    transition: 0.3s;

    &:hover {
      background-color: ${COLORS.greenyWhite};
      color: ${COLORS.primary};
    }
  `;

  const FollowIcon = styled(AiOutlinePlus)``;

  const FollowConfirmIcon = styled(BsCheck)``;

  return (
    <>
      <TitleContainer>
        <h3>{currentCategoryTitle}</h3>
        <FollowButton
          onClick={() => {
            if (isFollowed) {
              dispatch(
                asyncUnFollowCurrentCategory(currentCategory, currentUser.id)
              );
            } else {
              dispatch(
                asyncFollowCurrentCategory(currentCategory, currentUser.id)
              );
            }
          }}
        >
          {!isFollowed ? <FollowIcon /> : <FollowConfirmIcon />}
        </FollowButton>
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
