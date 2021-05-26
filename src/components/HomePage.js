import React from "react";
import styles from "./HomePage.module.css";
import SearchBar from "./SearchBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Feed from "./Feed";

function HomePage() {
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
          <SearchBar />
        </Col>
      </Row>
      <Row className={styles.row1} float="center">
        <Col md>
          <Link to="/category/biology">
            <Button
              className={styles.gridButton}
              style={{ backgroundColor: "#0DC167", borderColor: "#0DC167" }}
            >
              Biology
            </Button>
          </Link>
        </Col>
        <Col md>
          <Link to="/category/philosophy">
            <Button
              className={styles.gridButton}
              style={{ backgroundColor: "#2A7DBC", borderColor: "#2A7DBC" }}
            >
              Philosophy
            </Button>
          </Link>
        </Col>
        <Col md>
          <Link to="/category/economics">
            <Button
              className={styles.gridButton}
              style={{ backgroundColor: "#91000C", borderColor: "#91000C" }}
            >
              Economics
            </Button>
          </Link>
        </Col>
        <Col md>
          <Link to="/category/bitcoin">
            <Button
              className={styles.gridButton}
              style={{ backgroundColor: "#F7931A", borderColor: "#F7931A" }}
            >
              Bitcoin
            </Button>
          </Link>
        </Col>
      </Row>
      <Row className={styles.row1} float="center">
        <Col md>
          <Link to="/category/society">
            <Button
              className={styles.gridButton}
              style={{ backgroundColor: "#046C7E", borderColor: "#046C7E" }}
            >
              Society
            </Button>
          </Link>
        </Col>
        <Col md>
          <Link to="/category/health">
            <Button
              className={styles.gridButton}
              style={{ backgroundColor: "#069055", borderColor: "#069055" }}
            >
              Health
            </Button>
          </Link>
        </Col>
        <Col md>
          <Link to="/category/psychology">
            <Button
              className={styles.gridButton}
              style={{ backgroundColor: "#B620E0", borderColor: "#B620E0" }}
            >
              Psychology
            </Button>
          </Link>
        </Col>
        <Col md>
          <Link to="/category/computer-science">
            <Button
              className={styles.gridButton}
              style={{ backgroundColor: "#7127E7", borderColor: "#7127E7" }}
            >
              Computer Science
            </Button>
          </Link>
        </Col>
      </Row>
      <Feed />
    </Container>
  );
}

export default HomePage;
