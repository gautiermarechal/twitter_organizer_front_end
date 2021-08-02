import React from "react";
import styled from "styled-components";

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
`;

const Title = styled.h3``;

export default CategoryItem;
