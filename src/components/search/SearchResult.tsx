import { Link } from "gatsby";
// @ts-ignore
import React from "react";
import {
  connectStateResults,
  Hits,
  Index,
  PoweredBy,
  Snippet,
} from "react-instantsearch-dom";

const HitCount = connectStateResults(({ searchResults }) => {
  const hitCount = searchResults && searchResults.nbHits;

  return hitCount > 0 ? (
    <div className="HitCount">
      {hitCount} result{hitCount !== 1 ? `s` : ``}
    </div>
  ) : null;
});

const PageHit = ({ hit }) => (
  <div>
    <Link className="is-block" to={hit.slug}>
      <h4>{hit.title}</h4>
      <Snippet attribute="excerpt" hit={hit} tagName="mark" />
      {hit.plugin ? (
        <div>
          <span className="tag mt-2">{hit.plugin}</span>
        </div>
      ) : null}
    </Link>
    <hr />
  </div>
);

const HitsInIndex = ({ index }) => (
  <Index indexName={index.name}>
    <HitCount />
    <Hits className="Hits" hitComponent={PageHit} />
  </Index>
);

const SearchResult = ({ indices, className }) => (
  <div className={className}>
    {indices.map(index => (
      <HitsInIndex index={index} key={index.name} />
    ))}
    <PoweredBy />
  </div>
);

export default SearchResult;
