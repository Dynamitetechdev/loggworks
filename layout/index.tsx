import React from "react";

interface LayoutProp {
  children: any;
}
const Layout: React.FC<LayoutProp> = ({ children }) => {
  return <div className="">{children}</div>;
};

export default Layout;
