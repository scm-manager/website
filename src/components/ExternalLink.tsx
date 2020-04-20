import React from "react";

type Props = {
  to: string;
  value: string;
};

const ExternalLink = ({ to, value }: Props) => {
  return (
    <a
      href={to}
      title={value}
      target="_blank"
      rel="noopener noreferrer"
    >
      {value}
    </a>
  );
};

export default ExternalLink;
