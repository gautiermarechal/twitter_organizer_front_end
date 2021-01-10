import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";

const AuthorsFollowed = () => {
  const authorsFollowed = useSelector(
    (state) => state.currentUser.currentUser.authorsFollowed
  );
  const [authorsFullObjects, setAuthorsFullObjects] = useState([]);

  useEffect(() => {
    if (!authorsFollowed) {
      return;
    }
    const tempArray = [];

    Promise.all(
      authorsFollowed.map((author) =>
        axios.get(`http://localhost:5000/twitter-api/user/${author}`)
      )
    ).then((resultArray) => {
      setAuthorsFullObjects(resultArray);
    });
  }, [authorsFollowed]);
  return (
    <>
      <MainContainer>
        {authorsFollowed.length === 0 ? (
          <p>No Authors followed yet</p>
        ) : (
          <AuthorsList>
            {authorsFullObjects.map((authorResponse) => {
              const author = authorResponse.data.data;
              return (
                <>
                  <Link to={`/user/${author.username}`}>
                    <Author>
                      <AuthorProfilePicture src={author.profile_image_url} />
                      <InfoContainer>
                        <AuthorName>{author.name}</AuthorName>
                        <AuthorUsername>@{author.username}</AuthorUsername>
                      </InfoContainer>
                    </Author>
                    <Line />
                  </Link>
                </>
              );
            })}
          </AuthorsList>
        )}
      </MainContainer>
    </>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AuthorsList = styled.ul`
  padding: 0;
`;

const Author = styled.div`
  color: white;
  display: flex;
  margin-bottom: 10px;
  align-items: center;
  padding: 20px;
  transition: 0.2s;
  border-radius: 7px;

  &:hover {
    background-color: rgb(94, 140, 181);
    cursor: pointer;
  }
`;

const AuthorProfilePicture = styled.img`
  width: auto;
  height: 100%;
  border-radius: 100%;
  height: 50px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
`;

const AuthorName = styled.h3``;

const AuthorUsername = styled.h5``;

const Line = styled.hr`
  border: 0;
  height: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`;

export default AuthorsFollowed;
