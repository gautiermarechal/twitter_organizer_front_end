import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import {
  asyncFollowUser,
  asyncUnFollowUser,
} from "../libs/actions/CurrentUserActions";
import useFetchCurrentUserProfile from "../libs/custom-hooks/useFetchUserProfile";
import TweetsGrid from "./TweetsGrid";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const userid = useParams().id;
  useFetchCurrentUserProfile(userid);
  const user = useSelector((state) => state.userPage);
  const currentUser = useSelector((state) => state.currentUser);
  const [isFollowed, setIsFollowed] = React.useState(false);

  React.useEffect(() => {
    if (!currentUser || !user) {
      return;
    }

    if (
      currentUser.currentUser.authorsFollowed.includes(user.userData.username)
    ) {
      setIsFollowed(true);
    } else {
      setIsFollowed(false);
    }
  }, [currentUser, user]);

  const FollowButtonOrganizer = styled.button`
    border-style: solid;
    border-width: 1px;
    border-color: #d0f6e3;
    border-radius: 100px;
    color: ${isFollowed ? "black" : "white"};
    background-color: ${isFollowed ? "#d0f6e3" : "transparent"};
    transition: 0.2s;
    padding: 7px;
    width: 200px;

    &:hover {
      color: black;
      background-color: #d0f6e3;
    }
  `;

  return (
    <>
      {user.status === "received" ? (
        <>
          <HeaderContainer>
            <ProfilePicture src={user.userData.profile_image_url} />
            <UserInfoContainer>
              <UserTag>{user.userData.name}</UserTag>
              <UserName>{user.userData.username}</UserName>
              <UserDescription>{user.userData.description}</UserDescription>
              <FollowContainer>
                <FollowButtonOrganizer
                  onClick={() => {
                    if (isFollowed) {
                      dispatch(
                        asyncUnFollowUser(
                          currentUser.currentUser.id,
                          user.userData.username
                        )
                      );
                    } else {
                      dispatch(
                        asyncFollowUser(
                          currentUser.currentUser.id,
                          user.userData.username
                        )
                      );
                    }
                  }}
                >
                  {isFollowed ? <>Followed</> : <>Follow on Organizer</>}
                </FollowButtonOrganizer>

                <a href={`https://twitter.com/${userid}`} target="_blank">
                  <FollowButtonTwitter>Follow on Twitter</FollowButtonTwitter>
                </a>
              </FollowContainer>
            </UserInfoContainer>
          </HeaderContainer>
          <TweetsContainer>
            {user.userData.tweetsOrganized.length === 0 ? (
              <NotFoundContainer>
                <NotFound>No tweets categorized found.</NotFound>
              </NotFoundContainer>
            ) : (
              <TweetsGrid tweets={user.userData.tweetsOrganized} />
            )}
          </TweetsContainer>
        </>
      ) : null}
    </>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  color: white;
  margin: 30px 240px 0px 240px;
`;

const ProfilePicture = styled.img`
  border-radius: 100%;
  height: 100%;
  width: 100px;
`;

const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  width: 100%;
`;

const UserTag = styled.h1``;

const UserName = styled.h5``;

const UserDescription = styled.p``;

const FollowContainer = styled.div`
  display: flex;
`;

const FollowButtonTwitter = styled.button`
  border-style: solid;
  border-width: 1px;
  border-color: #1da1f2;
  border-radius: 100px;
  color: white;
  background-color: #1da1f2;
  transition: 0.2s;
  margin-left: 20px;
  padding: 7px;
  width: 200px;

  &:hover {
    color: black;
    background-color: #d0f6e3;
    border-color: #d0f6e3;
  }
`;

const TweetsContainer = styled.div`
  margin: 70px 240px 0px 240px;
`;

const NotFoundContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const NotFound = styled.h1`
  color: white;
`;

export default ProfilePage;
