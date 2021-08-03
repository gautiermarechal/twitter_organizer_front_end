import React, { useEffect } from "react";
import styles from "./HomePage.module.css";
import SearchBar from "./SearchBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  errorCategories,
  receiveCategories,
  requestCategories,
} from "../libs/actions/CategoriesActions";
import apis from "../api";
import CategoryItem from "./CategoryItem";
import styled from "styled-components";
import { darkTheme } from "../constants/colors";

function HomePage() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  useEffect(() => {
    dispatch(requestCategories());

    apis
      .getAllCategories()
      .then((res) => {
        dispatch(receiveCategories(res.data.data));
      })
      .catch((err) => dispatch(errorCategories()));
  }, []);
  return (
    <Container>
      <TitleContainer>
        <Col>
          <MainTitle>Twitter Organizer</MainTitle>
        </Col>
      </TitleContainer>
      <SubTitleContainer>
        <Col>
          <SubTitle>
            No need to scroll down 2h anymore. Find the most relevant tweets and
            threads, categorized under subjects!
          </SubTitle>
        </Col>
      </SubTitleContainer>
      <div className={styles.grid}>
        {categories.map((category) => (
          <Col className={styles.category}>
            <Link to={`/category/${category.id}`}>
              <CategoryItem title={category.name} />
            </Link>
          </Col>
        ))}
      </div>
    </Container>
  );
}

const MainTitle = styled.h1`
  color: ${darkTheme.onBackground};
  text-align: center;
`;

const SubTitle = styled.h5`
  color: ${darkTheme.onBackground};
  text-align: center;
`;

const TitleContainer = styled(Row)`
  margin-top: 50px;
`;

const SubTitleContainer = styled(Row)`
  margin-bottom: 20px;
`;

export default HomePage;
