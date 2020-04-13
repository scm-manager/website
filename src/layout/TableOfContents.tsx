import React, { FC } from "react";

type Props = {
  content: string;
};

const TableOfContents: FC<Props> = ({ content }) => (
  <aside className="content" dangerouslySetInnerHTML={{ __html: content }} />
);

export default TableOfContents;
