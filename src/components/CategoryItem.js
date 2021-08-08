import React from "react";
import styled from "styled-components";
import { darkTheme } from "../constants/colors";
import { shadows } from "../constants/shadows";

const CategoryItem = ({ title }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${darkTheme.surface};
  height: 100px;
  border-radius: 8px;
`;

const Title = styled.h3``;

export default CategoryItem;
