import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Layout } from "antd";

import AppHeader from "./AppHeader";
import AppSider from "./AppSider";
import AppContent from "./AppContent";
import AppFooter from "./AppFooter";

export default function AppLayout() {
  //взаимодействие сайдера и контента
  const [isCollapsed, setIsCollapsed] = useState(false);
  const changeCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <Router>
        <Layout style={{ minHeight: "100vh" }}>
          <AppHeader />
          <Layout style={{ flex: "1 0 auto" }}>
            <AppSider isActive={isCollapsed} onShow={changeCollapse} />
            <AppContent />
          </Layout>
          <AppFooter style={{ flex: "0 0 auto" }} />
        </Layout>
      </Router>
    </>
  );
}
