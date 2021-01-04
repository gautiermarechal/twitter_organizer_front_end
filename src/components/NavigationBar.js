import React from "react";
import styles from "./NavigationBar.module.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { MdAccountCircle } from "react-icons/md";
import SearchBar from "./SearchBar";

function NavigationBar() {
  const currentUser = useSelector((state) => state.currentUser);
  return (
    <Navbar
      className={styles.navBarContainer}
      collapseOnSelect
      expand="md"
      variant="dark"
    >
      <Link to="/">
        <Navbar.Brand className={styles.mainTitle}>
          Twitter Organizer
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className={styles.collapseContainer}
      >
        <Nav id="responsive-navbar-nav" className={styles.navItemsContainer}>
          <Nav.Link>
            <SearchBar />
          </Nav.Link>
          <Nav.Link>
            <Button size="lg" className={styles.navItemButton}>
              Categories
            </Button>
          </Nav.Link>
          {currentUser.status === "loggedIn" ? (
            <>
              <Nav.Link className={styles.navItem}>
                <Link to="account">
                  <MdAccountCircle className={styles.icon} size={32} />
                </Link>
              </Nav.Link>
              <Nav.Link className={styles.navItem}>
                <Button
                  size="lg"
                  className={styles.navItemButton}
                  onClick={() => {
                    localStorage.clear();
                    window.location.reload();
                  }}
                >
                  Logout
                </Button>
              </Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link className={styles.navItem}>
                <Link to="/sign-up">Sign Up</Link>
              </Nav.Link>
              <Nav.Link className={styles.navItem}>
                <Link to="/login">Login</Link>
              </Nav.Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
