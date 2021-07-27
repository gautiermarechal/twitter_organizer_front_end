import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { COLORS } from "../constants/colors";

const SearchResultsSnippet = ({ resultsData, emptyResults }) => {
  const [results, setResults] = useState([]);

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

    console.log(parsedData);

    setResults(parsedData);
  }, [resultsData]);
  return (
    <>
      <MainContainer>
        {!emptyResults ? (
          results.map((result) => {
            return result.data[0] ? (
              <EntityContainer>
                <h1> {result.entity} </h1>
                {result.data
                  ? result.data.map((item) => {
                      switch (result.entity) {
                        case "Category":
                          return <ResultListItem>{item.name}</ResultListItem>;
                        case "Twitter Organizer User":
                          return <ResultListItem>{item.id}</ResultListItem>;
                        case "Tweet Organized":
                          return (
                            <ResultListItem>
                              {item.tweet_organized_id}
                            </ResultListItem>
                          );
                        case "Twitter User":
                          return <ResultListItem>{item.id}</ResultListItem>;
                        default:
                          return <></>;
                      }
                    })
                  : null}
              </EntityContainer>
            ) : null;
          })
        ) : (
          <h1>No results found</h1>
        )}
      </MainContainer>
    </>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${COLORS.white};
`;

const EntityContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ResultListItem = styled.div`
  display: flex;
  align-items: center;
`;

export default SearchResultsSnippet;
