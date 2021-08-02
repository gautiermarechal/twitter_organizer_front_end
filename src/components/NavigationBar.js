import React from "react";
import styles from "./NavigationBar.module.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { MdAccountCircle } from "react-icons/md";
import styled from "styled-components";
import { darkTheme } from "../constants/colors";

function NavigationBar() {
  const currentUser = useSelector((state) => state.currentUser);
  const history = useHistory();
  return (
    <NavigationWrapper>
      <Link to="/">
        <MainTitle className={styles.mainTitle}>Twitter Organizer</MainTitle>
      </Link>
      <Menu id="responsive-navbar-nav">
        <MenuItem>
          <PrimaryButton>Categories</PrimaryButton>
        </MenuItem>
        {currentUser.status === "loggedIn" ? (
          <>
            <MenuItem className={styles.navItem}>
              <Link to="/account/tweets-bookmarked">
                <MdAccountCircle className={styles.icon} size={32} />
              </Link>
            </MenuItem>
          </>
        ) : (
          <>
            <MenuItem className={styles.navItem}>
              <Link to="/sign-up">Sign Up</Link>
            </MenuItem>
            <MenuItem className={styles.navItem}>
              <Link to="/login">Login</Link>
            </MenuItem>
          </>
        )}
      </Menu>
    </NavigationWrapper>
  );
}

const NavigationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 54px;
  padding: 40px;
  background-color: ${darkTheme.surface};
`;

const MainTitle = styled.h1`
  color: ${darkTheme.onSurface};
`;

const SubTitle = styled.div``;

const Menu = styled.div`
  display: flex;
  align-items: center;
`;

const MenuItem = styled.div`
  margin-right: 10px;
`;

const PrimaryButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${darkTheme.primary};
  color: ${darkTheme.onPrimary};
  border: none;
  border-radius: 4px;
  padding: 10px;
`;

export default NavigationBar;
