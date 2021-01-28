import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import categories from "../assets/AllCategories";
import { COLORS } from "../constants/colors";

const MyCategories = () => {
  const categoriesFollowed = useSelector(
    (state) => state.currentUser.currentUser.categoriesFollowed
  );
  return (
    <>
      <CategoriesList>
        {categoriesFollowed ? (
          categoriesFollowed.map((category) => {
            return <CategoryItem>{category}</CategoryItem>;
          })
        ) : (
          <>loading</>
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

export default MyCategories;
