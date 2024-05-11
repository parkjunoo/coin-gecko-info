import React from "react";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  
  return <div className="flex-1 overflow-y-auto mx-[1.6rem]">{children}</div>;
};

export default React.memo(DefaultLayout);
