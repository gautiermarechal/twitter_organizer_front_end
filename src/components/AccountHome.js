import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MyCategorizedTweets from "./MyCategorizedTweets";
import MyCategories from "./MyCategories";
import api from "../api/index";
import { useHistory, useParams } from "react-router-dom";
import { COLORS } from "../constants/colors";

const AccountHome = () => {
  const [section, setSection] = useState("tweet-section");
  const [currentUser, setCurrentUser] = useState({});
  const history = useHistory();
  const [currentPage, setCurrentPage] = useState();
  const params = useParams();

  useEffect(() => {
    let user = {};
    const get = async () => {
      user = await api.getUserByEmail(localStorage.getItem("useremail"));
      setCurrentUser(user.data[0]);
    };

    get();

    setCurrentPage(params);
  }, []);

  return (
    <>
      <MainContainer>
        <MainBreadCrumb>
          <MenuItem>
            <h2
              onClick={() => {
                history.push("/account/my-categorized-tweets");
              }}
            >
              My Categorized Tweets
            </h2>
          </MenuItem>
          <MenuItem>
            <h2
              onClick={() => {
                history.push("/account/my-categories");
              }}
            >
              My categories
            </h2>
          </MenuItem>
        </MainBreadCrumb>
        {section === "tweet-section" ? (
          <MyCategorizedTweets currentUser={currentUser} />
        ) : (
          <MyCategories />
        )}
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
  border-bottom: solid transparent 1px;
  transition: 0.2s;
  &:hover {
    border-bottom: solid white 1px;
  }
`;

export default AccountHome;
