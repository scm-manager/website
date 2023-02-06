import styled, { css } from "styled-components";
import SearchResult from "./SearchResult";

const Popover = css`
  max-height: 80vh;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  position: absolute;
  z-index: 200;
  right: 10px;
  top: 100%;
  width: 80vw;
  max-width: 40em;
  padding: 1em;
  border: 1px solid #dbdbdb;
  border-radius: 0.25rem;
  box-shadow: 0 0.5em 1em -0.125em hsl(0deg 0% 4% / 10%),
    0 0 0 1px hsl(0deg 0% 4% / 2%);
  background: ${({ theme }) => theme.background};
  margin-top: 0;

  @media (min-width: 1024px) {
    margin-top: -2rem;
  }
`;

export default styled(SearchResult)`
  display: ${props => (props.show ? `block` : `none`)};
  ${Popover}

  .HitCount {
    display: flex;
    justify-content: flex-end;
  }

  .Hits {
    ul {
      list-style: none;
      margin-left: 0;
    }

    li.ais-Hits-item {
      a {
        h4 {
          margin-bottom: 0.2em;
        }
      }

      hr {
        margin: 1rem 0;
      }
    }
  }

  .ais-PoweredBy {
    display: flex;
    justify-content: flex-end;
    font-size: 80%;

    svg {
      width: 70px;
    }
  }
`;
