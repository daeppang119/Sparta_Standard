import React from "react";

type SpacerProps = {
  y: number;
};

const Spacer = ({ y }: SpacerProps) => {
  return <div style={{ height: `${y}px` }}></div>;
};

export default Spacer;
