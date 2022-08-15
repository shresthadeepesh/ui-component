import React, { FC } from "react";

interface RenderIfProps {
  condition: boolean;
  extra?: React.ReactElement;
  children: React.ReactElement;
}

const RenderIf: FC<RenderIfProps> = ({ condition, extra, children }) => {
  if (!condition && extra) {
    return extra;
  } else if (condition) return children;

  return <></>;
};

export default RenderIf;
