import React, { useEffect } from "react";
import styles from "./HomePage.module.css";
import SearchBar from "./SearchBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Feed from "./Feed";
import { useDispatch, useSelector } from "react-redux";
import {
  errorCategories,
  receiveCategories,
  requestCategories,
} from "../libs/actions/CategoriesActions";
import apis from "../api";

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
    <Container className={styles.mainContainer}>
      <Row className={styles.row1} float="center">
        <Col>
          <h1 className={styles.header1}>Welcome to Twitter Organizer!</h1>
        </Col>
      </Row>
      <Row className={styles.row1} float="center">
        <Col>
          <h5 className={styles.header1}>
            No need to scroll down 2h anymore. Find the most relevant tweets and
            threads, categorized under subjects!
          </h5>
        </Col>
      </Row>
      <Row className={styles.row1} float="center">
        <Col className={styles.searchBarContainer}>
          <SearchBar type="category" />
        </Col>
      </Row>
      <div className={styles.grid}>
        {categories.map((category) => (
          <Col className={styles.category}>
            <Link to={`/category/${category.id}`}>
              <Button className={styles.gridButton}>{category.name}</Button>
            </Link>
          </Col>
        ))}
      </div>
    </Container>
  );
}

export default HomePage;
