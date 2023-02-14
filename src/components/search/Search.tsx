import React, { createRef, useState } from "react";
import { InstantSearch } from "react-instantsearch-dom";
import styled, { ThemeProvider } from "styled-components";
import SearchBox from "./SearchBox";
import StyledSearchResult from "./StyledSearchResult";
import useClickOutside from "./useClickOutside";
import useSearchClient from "../../hooks/useSearchClient";

const StyledSearchRoot = styled.div`
  position: relative;
`;

const theme = {
  foreground: "#050505",
  background: "white",
  faded: "#888",
};

const SEARCH_INDEX = {
  name: process.env.GATSBY_ALGOLIA_INDEX || "Pages",
  title: process.env.GATSBY_ALGOLIA_INDEX || "Pages",
};

export default function Search() {
  const rootRef = createRef();
  const [query, setQuery] = useState();
  const [hasFocus, setFocus] = useState(false);
  const searchClient = useSearchClient();

  useClickOutside(rootRef, () => setFocus(false));

  return (
    <ThemeProvider theme={theme}>
      <StyledSearchRoot ref={rootRef} className="navbar-item">
        <InstantSearch
          searchClient={searchClient}
          indexName={SEARCH_INDEX.name}
          onSearchStateChange={({ query }) => setQuery(query)}
        >
          <SearchBox onFocus={() => setFocus(true)} hasFocus={hasFocus} />
          <StyledSearchResult
            show={query && query.length > 0 && hasFocus}
            indices={[SEARCH_INDEX]}
          />
        </InstantSearch>
      </StyledSearchRoot>
    </ThemeProvider>
  );
}
