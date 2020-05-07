import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import Icon from "./Icon";

type Props = {
  checksum: string;
  url: string;
}

const ChecksumToggler = styled.small`
  text-decoration: underline dotted grey;
`;

const ChecksumContent = styled.div`
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    background-color: #eee;
    overflow-x: auto;
`;

const Checksum: FC<Props> = ({ checksum, url }) => {
  const [showChecksum, toggleChecksum] = useState(false);

  useEffect(() => {
    toggleChecksum(showChecksum);
  });

  const ToggleButton = () => {
    return <ChecksumToggler onClick={() => toggleChecksum(!showChecksum)}>Checksum <span className="has-text-info"><Icon icon="info" size="sm" /></span></ChecksumToggler>;
  }

  if (checksum && url) {
    const filename = url.split("/").pop();
    if(showChecksum) {
      return (
        <>
          <ToggleButton />
          <ChecksumContent>
          <div className="field is-horizontal">
            <div className="field-label is-inline-flex">
              File:
            </div>
            <div className="field-body is-inline-flex">
              {filename}
            </div>
          </div>
          <div className="field is-horizontal">
            <div className="field-label is-inline-flex">
              Checksum:
            </div>
            <div className="field-body is-inline-flex is-family-monospace">
              {checksum}
            </div>
          </div>
          </ChecksumContent>
        </>
      )
    }
    return (
      <ToggleButton />
    );
  }
  return null;
};

export default Checksum;
