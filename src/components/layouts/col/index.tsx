import React, { FC } from "react";

interface ColProps {
  children: React.ReactNode;
}

const Row: FC<ColProps> = ({ children }) => {
  return <div className="row">{children}</div>;
};

export default Row;
