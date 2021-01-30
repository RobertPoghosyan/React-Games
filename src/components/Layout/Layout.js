import React from "react";

const Layout = ({ children }) => {
    return (
      <div className="app-layout">
        <main className="app-main-content">{children}</main>
      </div>
    );
  };
  
  export default Layout;