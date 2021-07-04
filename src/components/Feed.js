import React from "react";
import styled from "styled-components";
import TweetsGrid from "../components/TweetsGrid";

const Feed = ({ title }) => {
  return (
    <>
      <Title>{title}</Title>
      <TweetsGrid />
    </>
  );
};

const Title = styled.h1`
  color: white;
  margin-top: 20px;
`;

export default Feed;
