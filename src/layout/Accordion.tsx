import React, { FC, useState, ReactNode } from "react";
import Icon from "../components/Icon";

type Props = {
  label: ReactNode;
  open?: boolean;
};

const Accordion: FC<Props> = ({ label, open = false, children }) => {
  const [isOpen, collapseContent] = useState(open);

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
        {children}
      </div>
      )}
    </div>
  );
};

export default Accordion;
