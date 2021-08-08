import React, { useEffect, useState } from "react";
import styles from "./NavigationBar.module.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { MdAccountCircle } from "react-icons/md";
import styled from "styled-components";
import { darkTheme } from "../constants/colors";
import SearchBar from "./SearchBar";
import { borders } from "../constants/borders";
import {
  errorCategories,
  receiveCategories,
  requestCategories,
} from "../libs/actions/CategoriesActions";
import apis from "../api";

function NavigationBar() {
  const currentUser = useSelector((state) => state.currentUser);
  const categories = useSelector((state) => state.categories.categories);
  const dispatch = useDispatch();
  const history = useHistory();
  const [openCategories, setOpenCategories] = useState(false);

  const CategoriesDropdown = styled.div`
    display: ${openCategories ? "flex" : "none"};
    flex-direction: column;
    position: absolute;
    background-color: ${darkTheme.overlay};
    border: ${borders.elevation0};
    border-radius: 8px;
    z-index: 500;
  `;

  const CategoryItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    color: ${darkTheme.onSurface};
    cursor: pointer;
    padding: 10px;
    &:hover {
      background-color: ${darkTheme.hover};
    }
    ${(props) =>
      props.index === 0
        ? "border-top-right-radius: 8px; border-top-left-radius: 8px;"
        : null}
    ${(props) =>
      props.index === categories.length - 1
        ? "border-bottom-right-radius: 8px; border-bottom-left-radius: 8px;"
        : null}
  `;

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
    <NavigationWrapper>
      <Link to="/">
        <MainTitle className={styles.mainTitle}>Twitter Organizer</MainTitle>
      </Link>
      <SearchBar />
      <Menu>
        <MenuItem>
          <PrimaryButton onClick={() => setOpenCategories(!openCategories)}>
            Categories
          </PrimaryButton>
          <CategoriesDropdown>
            {categories.map((category, index) => (
              <CategoryItem
                onClick={() => {
                  setOpenCategories(false);
                  history.push(`/category/${category.id}`);
                }}
                index={index}
              >
                {category.name}
              </CategoryItem>
            ))}
          </CategoriesDropdown>
        </MenuItem>
        {currentUser.status === "loggedIn" ? (
          <>
            <MenuItem className={styles.navItem}>
              <Link to="/account/tweets-bookmarked">
                <MdAccountCircle className={styles.icon} size={32} />
              </Link>
            </MenuItem>
            <MenuItem
              className={styles.navItem}
              onClick={() => {
                localStorage.removeItem("useremail");
                history.push("/");
                window.location.reload();
              }}
            >
              <Logout>Logout</Logout>
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

const Logout = styled.p`
  margin: 0px;
  color: ${darkTheme.onSurface};
  cursor: pointer;
`;

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
  background-color: ${darkTheme.surface};
  &:hover {
    background-color: ${darkTheme.overlay};
  }
  transition: 0.2s;
  border: ${borders.elevation0};
  color: ${darkTheme.onSurface};
  border-radius: 8px;
  padding: 10px;
  outline: none;
`;

export default NavigationBar;
