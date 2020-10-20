import React from "react";
import styles from "./NavigationBar.module.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <Navbar
      className={styles.navBarContainer}
      collapseOnSelect
      expand="md"
      variant="dark"
    >
      <Link to="/">
        <Navbar.Brand>Twitter Organizer</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className={styles.collapseContainer}
      >
        <Nav id="responsive-navbar-nav" className={styles.navItemsContainer}>
          <Nav.Link>
            <Button size="lg" className={styles.navItemButton}>
              Search
            </Button>
          </Nav.Link>
          <Nav.Link>
            <Button size="lg" className={styles.navItemButton}>
              Subjects
            </Button>
          </Nav.Link>
          <Nav.Link className={styles.navItem}>
            <Link to="sign-up">Sign Up</Link>
          </Nav.Link>
          <Nav.Link className={styles.navItem}>
            <Link to="login">Login</Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
