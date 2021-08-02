import React, { useEffect, useState } from "react";
import styled from "styled-components";
import api from "../api/index";
import { useHistory, useLocation, useParams } from "react-router-dom";

const AccountHome = () => {
  const [currentUser, setCurrentUser] = useState({});
  const history = useHistory();
  const [currentPage, setCurrentPage] = useState("");
  const currentTab =
    useLocation().pathname.split("/")[
      useLocation().pathname.split("/").length - 1
    ];

  useEffect(() => {
    handleCurrentPage(currentTab);
    let user = {};
    const get = async () => {
      user = await api.getUserByEmail(localStorage.getItem("useremail"));
      setCurrentUser(user.data[0]);
    };

    get();
  }, []);

  const handleCurrentPage = (id) => {
    setCurrentPage(id);
  };

  return (
    <>
      <MainContainer>
        <MainBreadCrumb>
          <MenuItem
            onClick={() => {
              history.push("/account/tweets-bookmarked");
              handleCurrentPage("tweets-bookmarked");
            }}
            currentPage={currentPage === "tweets-bookmarked" ? true : false}
          >
            <h2>Tweets Bookmarked</h2>
          </MenuItem>
          <MenuItem
            onClick={() => {
              history.push("/account/authors-followed");
              handleCurrentPage("authors-followed");
            }}
            currentPage={currentPage === "authors-followed" ? true : false}
          >
            <h2>Authors Followed</h2>
          </MenuItem>
          <MenuItem
            onClick={() => {
              history.push("/account/my-categories");
              handleCurrentPage("my-categories");
            }}
            currentPage={currentPage === "my-categories" ? true : false}
          >
            <h2>My categories</h2>
          </MenuItem>
        </MainBreadCrumb>
      </MainContainer>
    </>
  );
};

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 50px;
`;

const MainBreadCrumb = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  color: whitesmoke;
`;

const MenuItem = styled.button`
  cursor: pointer;
  margin: 20px;
  background-color: transparent;
  border-style: none;
  color: white;
  border-bottom: solid
    ${(props) => (props.currentPage ? "white" : "transparent")} 1px;
  transition: 0.2s;
  outline: none !important;
  &:hover {
    border-bottom: solid white 1px;
  }
`;

export default AccountHome;
