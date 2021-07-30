import React, { useEffect, useState } from "react";
import styles from "./SearchBar.module.css";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import {
  requestSearchResults,
  getSearchResults,
  errorSearchResults,
} from "../libs/actions/SearchResultsActions";
import SearchResultsSnippet from "./SearchResultsSnippet";

function SearchBar({ type }) {
  const searchResults = useSelector((state) => state.searchResults);
  const dispatch = useDispatch();
  const [displaySnippet, setDisplaySnippet] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isNoResultsSnippet, setIsNotResultsSnippet] = useState(false);

  const onSearch = (query) => {
    setSearchQuery(query);
    if (query === "") {
      setDisplaySnippet(false);
    } else {
      dispatch(requestSearchResults);
      Promise.all([
        fetch(`http://localhost:5000/categories/search/${query}`),
        fetch(`http://localhost:5000/organizer-user/search/${query}`),
        fetch(`http://localhost:5000/tweet-organized/search/${query}`),
        fetch(`http://localhost:5000/twitter-api/user/${query}`),
      ])
        .then((responses) => {
          Promise.all(responses.map((r) => r.json()))
            .then((resultsArray) => {
              dispatch(
                getSearchResults({
                  categoriesResults: resultsArray[0].data,
                  organizerUserResults: resultsArray[1].data,
                  tweetOrganizedResults: resultsArray[2].data,
                  twitterUserResults: [resultsArray[3].data],
                })
              );
            })
            .catch((err) => dispatch(errorSearchResults));
        })
        .catch((err) => dispatch(errorSearchResults));
    }
  };

  useEffect(() => {
    if (searchResults.status === "idle") {
      return;
    }

    const {
      categoriesResults,
      organizerUserResults,
      tweetOrganizedResults,
      twitterUserResults,
    } = searchResults;

    const isResults =
      categoriesResults.length > 0 ||
      organizerUserResults.length > 0 ||
      tweetOrganizedResults.length > 0 ||
      (twitterUserResults.length > 0 && twitterUserResults[0] !== undefined);

    if (searchQuery === "" && !isResults) {
      setDisplaySnippet(false);
    } else if (!isResults) {
      setIsNotResultsSnippet(true);
      setDisplaySnippet(true);
    } else {
      setIsNotResultsSnippet(false);
      setDisplaySnippet(true);
    }
  }, [searchResults]);

  const clearOnClick = () => {
    setSearchQuery("");
  };

  return (
    <>
      <Form className={styles.searchBar}>
        <Form.Control
          type="text"
          placeholder="Search"
          style={{ height: "50px" }}
          onChange={(e) => onSearch(e.target.value)}
        />
      </Form>
      {displaySnippet ? (
        <SearchResultsSnippet
          resultsData={searchResults}
          emptyResults={isNoResultsSnippet}
          clearOnClick={clearOnClick}
        />
      ) : null}
    </>
  );
}

export default SearchBar;
