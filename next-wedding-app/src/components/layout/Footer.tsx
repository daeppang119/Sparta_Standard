import React from "react";
import Spacer from "../ui/Spacer";

const Footer = () => {
  return (
    <div className="text-center">
      <Spacer y={30} />
      <p className="font-thin">
        <span className="uppercase">tel </span>
        010.9234.8439
      </p>
      <Spacer y={10} />
      <p className="text-xs font-thin">카피라이트</p>
      <Spacer y={30} />
    </div>
  );
};

export default Footer;
