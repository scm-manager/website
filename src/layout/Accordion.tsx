import React, { FC, useEffect, useState } from "react";
import Icon from "../components/Icon";

type Props = {
  label: string;
  children: React.ReactNode;
};

const Accordion: FC<Props> = ({ label, children }) => {
  const [isOpen, collapseContent] = useState(false);

  useEffect(() => {
    collapseContent(isOpen);
  });

  const icon = isOpen ? "angle-down" : "angle-right";

  return (
    <div className="card">
      <header className="card-header pointer" onClick={() => collapseContent(!isOpen)}>
        <p className="card-header-title">
          <Icon icon={icon} className="has-text-info" /> {label}
        </p>
      </header>
      {isOpen && (
      <div className="card-content">
        <div className="content">{children}</div>
      </div>
      )}
    </div>
  );
};

export default Accordion;
