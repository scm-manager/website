import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function({ children }: Props) {
  return <section className="section">{children}</section>;
}
