import { useMemo } from "react";
import algoliasearch from "algoliasearch/lite";

export default function useSearchClient() {
  return useMemo(() => {
    const algolia = algoliasearch(
      process.env.GATSBY_ALGOLIA_APP_ID,
      process.env.GATSBY_ALGOLIA_SEARCH_KEY
    );
    return {
      ...algolia,
      search: requests =>
        requests.some(({ params: { query } }) => !!query)
          ? algolia.search(requests)
          : Promise.resolve({
              results: [{ hits: [] }],
            }),
    };
  }, []);
}
