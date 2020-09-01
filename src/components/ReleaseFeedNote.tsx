import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRss } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Container = styled.p`
  padding-bottom: 1.5rem;
`;

const ReleaseFeedNote: FC = ({}) => (
  <Container>
    You never want to miss a release again? Subscribe to our {" "}
    <a href="/download/rss.xml" target="_blank">
      release feed <FontAwesomeIcon icon={faRss} />
    </a>
  </Container>
);

export default ReleaseFeedNote;
