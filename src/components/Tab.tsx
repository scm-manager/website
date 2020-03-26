import React, { FC, ReactNode } from "react";

export type TabProps = {
  title: string;
  icon?: ReactNode;
};

const Tab: FC<TabProps> = ({ children }) => {
  return <>{children}</>;
};

export default Tab;
