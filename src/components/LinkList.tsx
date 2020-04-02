import React, { FC } from "react";
import styled from "styled-components";

type Props = {};

const Container = styled.div`
  .content & ul {
    list-style: none;
    margin-left: 0;

    li {
      display: block;
      margin: 1rem 0;

      svg {
        margin-right: 0.5rem;
      }

      > * {
        vertical-align: middle;
      }

      a > * {
        vertical-align: middle;
      }
    }
  }
`;

const LinkList: FC<Props> = ({ children }) => <Container>{children}</Container>;

export default LinkList;
