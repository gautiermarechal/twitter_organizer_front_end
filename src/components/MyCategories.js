import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import LoadingSpinner from "./LoadingSpinner";

const MyCategories = () => {
  const categoriesFollowed = useSelector(
    (state) => state.currentUser.currentUser.categoriesFollowed
  );
  return (
    <>
      <CategoriesList>
        {categoriesFollowed ? (
          categoriesFollowed.length !== 0 ? (
            categoriesFollowed.map((category) => {
              return <CategoryItem>{category}</CategoryItem>;
            })
          ) : (
            <NoCategories>No Categories Followed</NoCategories>
          )
        ) : (
          <EmptyState>
            <LoadingSpinner />
          </EmptyState>
        )}
      </CategoriesList>
    </>
  );
};

const CategoriesList = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: #ffff;
  list-style-type: none;
`;

const CategoryItem = styled.li``;

const NoCategories = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  color: white;
`;

const EmptyState = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  color: white;
`;

export default MyCategories;
