import React, { FC } from "react";

interface RowProps {
  children: React.ReactNode;
}

const Row: FC<RowProps> = ({ children }) => {
  return <div className="row">{children}</div>;
};

export default Row;
