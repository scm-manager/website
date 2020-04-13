import React, { FC } from "react";

type Props = {
  title: string;
};

const MenuSection: FC<Props> = ({ title, children }) => (
  <>
    <p className="menu-label">{title}</p>
    <ul className="menu-list">{children}</ul>
  </>
);

export default MenuSection;
