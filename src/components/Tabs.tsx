import React, { FC, ReactNode, useState } from "react";

type Props = {};

export const Tabs: FC<Props> = ({ children }) => {
  const [active, setActive] = useState(0);

  const renderTab = (child: ReactNode, i: number) => {
    let tabClass = "";
    if (active === i) {
      tabClass = "is-active";
    }
    return (
      <li className={tabClass}>
        {/**
        // @ts-ignore */}
        <a onClick={() => setActive(i)}>{child.props.title}</a>
      </li>
    );
  };

  return (
    <div className="tab-container">
      <div className="tabs is-marginless">
        <ul className="is-marginless">
          {React.Children.map(children, (child, i) => {
            return renderTab(child, i);
          })}
        </ul>
      </div>
      <div className="container">
          {React.Children.map(children, (child, i) => {
            if (i === active) {
              return child;
            }
          })}
      </div>
    </div>
  );
};

export default Tabs;
