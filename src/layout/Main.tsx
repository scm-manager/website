import React, { FunctionComponent } from "react";

type Props = {
  children: React.ReactNode
};

const Main: FunctionComponent<Props> = ({ children }) => {
  return (
    <main className="app-content">
      {children}
    </main>
  );
}

export default Main;
