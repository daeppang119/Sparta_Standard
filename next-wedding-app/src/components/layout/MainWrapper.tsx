import React, { ReactNode } from "react";

type MainWrapperProps = {
  children: ReactNode;
};
const MainWrapper = ({ children }: MainWrapperProps) => {
  return (
    <main className="bg-[#f4e8ee] m-[10px] p-[10px] flex flex-col items-center">
      <div
        className="flex justify-center bg-white
      mx-4 my-8 py-[60px] w-full max-w-[1200px]"
      >
        {children}
      </div>
    </main>
  );
};

export default MainWrapper;
