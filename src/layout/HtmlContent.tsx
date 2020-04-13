import React, { FC } from "react";
import "../styles/prism.scss";

type Props = {
  content: string;
};

const HtmlContent: FC<Props> = ({ content }) => (
  <div className="content" dangerouslySetInnerHTML={{ __html: content }} />
);

export default HtmlContent;
