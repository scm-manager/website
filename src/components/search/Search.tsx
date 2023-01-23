import algoliasearch from "algoliasearch/lite";
// @ts-ignore
import React, { createRef, useMemo, useState } from "react";
import { Configure, InstantSearch } from "react-instantsearch-dom";
import styled, { ThemeProvider } from "styled-components";
import SearchBox from "./SearchBox";
import StyledSearchResult from "./StyledSearchResult";
import useClickOutside from "./useClickOutside";

const StyledSearchRoot = styled.div`
  position: relative;
`;

const theme = {
  foreground: "#050505",
  background: "white",
  faded: "#888",
};

export default function Search({ indices, version }) {
  const rootRef = createRef();
  const [query, setQuery] = useState();
  const [hasFocus, setFocus] = useState(false);
  const searchClient = useMemo(
    () =>
      algoliasearch(
        process.env.GATSBY_ALGOLIA_APP_ID,
        process.env.GATSBY_ALGOLIA_SEARCH_KEY
      ),
    []
  );

  useClickOutside(rootRef, () => setFocus(false));

  return (
    <ThemeProvider theme={theme}>
      <StyledSearchRoot ref={rootRef}>
        <InstantSearch
          searchClient={searchClient}
          indexName={indices[0].name}
          onSearchStateChange={({ query }) => setQuery(query)}
        >
          <Configure filters={`version:${version}`} />
          <SearchBox onFocus={() => setFocus(true)} hasFocus={hasFocus} />
          <StyledSearchResult
            show={query && query.length > 0 && hasFocus}
            indices={indices}
          />
        </InstantSearch>
      </StyledSearchRoot>
    </ThemeProvider>
  );
}
