import SEO from "../components/SEO";
import React, { useEffect, useMemo, useRef, useState } from "react";
import Title from "../components/Title";
import PageContainer from "../layout/PageContainer";
import { InstantSearch } from "react-instantsearch-dom";
import algoliasearch from "algoliasearch/lite";
import SearchResult from "../components/search/SearchResult";
import SearchBox from "../components/search/SearchBox";
import qs from "qs";
import { navigate } from "@reach/router";
import styled from "styled-components";

const DEBOUNCE_TIME = 400;

const createURL = state => `?${qs.stringify(state)}`;

const searchStateToUrl = searchState =>
  searchState ? createURL(searchState) : "";

const urlToSearchState = ({ search }) => qs.parse(search.slice(1));

const SEARCH_INDEX = {
  name: process.env.GATSBY_ALGOLIA_INDEX || "Pages",
  title: process.env.GATSBY_ALGOLIA_INDEX || "Pages",
};

const StyledResult = styled(SearchResult)`
  .HitCount {
    display: flex;
    justify-content: flex-end;
  }

  hr {
    margin: 1rem 0;
  }
`;

const SearchPage = ({ location }) => {
  const [searchState, setSearchState] = useState(urlToSearchState(location));
  const debouncedSetStateRef = useRef(null);
  const searchClient = useMemo(
    () =>
      algoliasearch(
        process.env.GATSBY_ALGOLIA_APP_ID,
        process.env.GATSBY_ALGOLIA_SEARCH_KEY
      ),
    []
  );

  function onSearchStateChange(updatedSearchState) {
    clearTimeout(debouncedSetStateRef.current);

    debouncedSetStateRef.current = setTimeout(
      () => navigate(searchStateToUrl(updatedSearchState)),
      DEBOUNCE_TIME
    );

    setSearchState(updatedSearchState);
  }

  useEffect(() => {
    setSearchState(urlToSearchState(location));
  }, [location]);

  return (
    <PageContainer>
      <SEO title="Search" />
      <Title>Search</Title>
      <InstantSearch
        searchClient={searchClient}
        indexName={SEARCH_INDEX.name}
        searchState={searchState}
        onSearchStateChange={onSearchStateChange}
        createURL={createURL}
      >
        <SearchBox className="mb-4" />
        <StyledResult indices={[SEARCH_INDEX]} />
      </InstantSearch>
    </PageContainer>
  );
};

export default SearchPage;
