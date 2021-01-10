import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import useFetchCurrentUserProfile from "../libs/custom-hooks/useFetchUserProfile";

const ProfilePage = () => {
  const userid = useParams().id;
  useFetchCurrentUserProfile(userid);
  return (
    <>
      <HeaderContainer>
        <ProfilePicture />
        <UserInfoContainer></UserInfoContainer>
      </HeaderContainer>
    </>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
`;

const ProfilePicture = styled.img``;

const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default ProfilePage;
