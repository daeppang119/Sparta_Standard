import React, { ReactNode } from "react";

type MainWrapperProps = {
  children: ReactNode;
};
const MainWrapper = ({ children }: MainWrapperProps) => {
  return (
    <main className="bg-[#f4e8ee] px-4 py-4">
      <div
        className="flex justify-center bg-white
      mx-4 my-8"
      >
        {children}
      </div>
    </main>
  );
};

export default MainWrapper;
