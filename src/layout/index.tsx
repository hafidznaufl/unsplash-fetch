import React, { ReactNode } from "react";
import Navbar from "../components/Navbar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto px-2">{children}</main>
    </div>
  );
};

export default Layout;
