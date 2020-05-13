import React, { FC } from "react";
import "../styles/prism.scss";

type Props = {
  content: string;
  className?: string;
};

const HtmlContent: FC<Props> = ({ content, className }) => (
  <div className={ "content " + (className ? className : "") } dangerouslySetInnerHTML={{ __html: content }} />
);

export default HtmlContent;
