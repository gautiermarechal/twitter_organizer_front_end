import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { COLORS, darkTheme } from "../constants/colors";
import PlaceholderImage from "../assets/images/user_avatar_placeholder.png";
import { useHistory } from "react-router-dom";
import moment from "moment";
import { shadows } from "../constants/shadows";
import { borders } from "../constants/borders";

const SearchResultsSnippet = ({ resultsData, emptyResults, clearOnClick }) => {
  const [results, setResults] = useState([]);
  const history = useHistory();

  useEffect(() => {
    if (!resultsData) {
      return;
    }
    const parsedData = [
      { entity: "Category", data: resultsData.categoriesResults },
      {
        entity: "Twitter Organizer User",
        data: resultsData.organizerUserResults,
      },
      { entity: "Tweet Organized", data: resultsData.tweetOrganizedResults },
      { entity: "Twitter User", data: resultsData.twitterUserResults },
    ];

    setResults(parsedData);
  }, [resultsData]);

  const parseDateTime = (dateTime) => {
    const diffHours = moment().diff(moment(dateTime), "hours");
    const diffMinutes = moment().diff(moment(dateTime), "minutes");

    if (diffMinutes < 60) {
      return `${diffMinutes} min ago`;
    } else if (diffMinutes >= 60 && diffHours < 24) {
      return `${diffHours} hours ago`;
    } else {
      return moment(dateTime).format("DD MMM YYYY");
    }
  };

  const parsedCategory = (category) => {
    return `${category.charAt(0).toUpperCase()}${category.slice(1)}`;
  };
  return (
    <>
      <MainContainer>
        {!emptyResults ? (
          results.map((result, index) => {
            return result.data[0] ? (
              <EntityContainer>
                <Divider index={index} />
                <EntityTitle> {result.entity} </EntityTitle>
                {result.data
                  ? result.data.map((item) => {
                      switch (result.entity) {
                        case "Category":
                          return (
                            <ResultListItem
                              onClick={() => {
                                clearOnClick();
                                history.push(`/category/${item.id}`);
                              }}
                            >
                              <ItemTitle>{item.name}</ItemTitle>
                            </ResultListItem>
                          );
                        case "Twitter Organizer User":
                          return (
                            <ResultListItem
                              onClick={() => {
                                clearOnClick();
                                history.push(`/user/${item.id}`);
                              }}
                            >
                              <UserAvatar
                                src={item.src ? item.src : PlaceholderImage}
                              />
                              <ItemTitle>{item.id}</ItemTitle>
                            </ResultListItem>
                          );
                        case "Tweet Organized":
                          return (
                            <ResultListItemTweetOrganized
                              onClick={() => {
                                clearOnClick();
                                history.push(
                                  `/extended/${item.tweet_organized_id}`
                                );
                              }}
                            >
                              <ItemTitle>
                                {item.tweet_organized_content
                                  ? item.tweet_organized_content[0]
                                    ? item.tweet_organized_content[0][0].text
                                    : "Tweet content"
                                  : "Tweet content"}
                              </ItemTitle>
                              <ItemSubTitle>
                                by{" "}
                                <i>
                                  <strong>@{item.user_screen_name}</strong>
                                </i>{" "}
                                · {parseDateTime(item.tweet_organized_date)} ·{" "}
                                <strong>
                                  {parsedCategory(
                                    item.tweet_organized_category
                                  )}
                                </strong>
                              </ItemSubTitle>
                            </ResultListItemTweetOrganized>
                          );
                        case "Twitter User":
                          return (
                            <ResultListItem
                              onClick={() => {
                                clearOnClick();
                                history.push(`/user/${item.username}`);
                              }}
                            >
                              <UserAvatar
                                src={
                                  item.profile_image_url
                                    ? item.profile_image_url
                                    : PlaceholderImage
                                }
                              />
                              <ItemInfoContainer>
                                <ItemTitle>{item.name}</ItemTitle>
                                <ItemSubTitle>@{item.username}</ItemSubTitle>
                              </ItemInfoContainer>
                            </ResultListItem>
                          );
                        default:
                          return <></>;
                      }
                    })
                  : null}
              </EntityContainer>
            ) : null;
          })
        ) : (
          <ItemTitle>No results found</ItemTitle>
        )}
      </MainContainer>
    </>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${darkTheme.overlay};
  box-shadow: ${shadows.three};
  border: ${borders.elevation0};
  border-radius: 8px;
  padding: 20px;
  position: absolute;
  top: 54px;
  width: 500px;
  z-index: 500;
`;

const EntityContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ResultListItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 20px;
  margin-left: -20px;
  margin-right: -20px;
  transition: 0.2s;
  &:hover {
    background-color: ${darkTheme.hover};
  }
`;

const ResultListItemTweetOrganized = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  padding: 20px;
  margin-left: -20px;
  margin-right: -20px;
  transition: 0.2s;
  &:hover {
    background-color: ${darkTheme.hover};
  }
`;

const EntityTitle = styled.h5`
  color: ${darkTheme.onBackground};
`;

const Divider = styled.div`
  display: ${(props) => (props.index === 1 ? "none" : "block")};
  margin-bottom: 10px;
  border: 0;
  height: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  margin-right: -20px;
  margin-left: -20px;
`;

const UserAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100px;
`;

const ItemTitle = styled.span`
  margin-left: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${darkTheme.onBackground};
`;

const ItemSubTitle = styled.span`
  margin-left: 10px;
  color: ${darkTheme.onSurface};
`;

const ItemInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default SearchResultsSnippet;
