import React, { FC } from "react";

type Props = {
  title: string;
};

const Tab: FC<Props> = ({ children }) => {
  return <>{children}</>;
};

export default Tab;
