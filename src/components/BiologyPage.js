import React from "react";
import styles from "./BiologyPage.module.css";
import SearchBar from "./SearchBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function BiologyPage() {
  return (
    <>
      <Row className={styles.biologyTitle} float="center">
        <Col>
          <h3>Biology</h3>
        </Col>
      </Row>
      <Container>
        <Row className={styles.row1} float="center">
          <Col className={styles.searchBarContainer}>
            <SearchBar />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default BiologyPage;
