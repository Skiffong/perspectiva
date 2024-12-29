import React from "react";
import { Layout } from "antd";

const footerStyle = {
  textAlign: "center",
  height: "30px",
  color: "#fefd97",
  backgroundColor: "#130e0a",
  padding: "0px",
};

export default function AppFooter() {
  return (
    <>
      <Layout.Footer style={footerStyle}>© Все права защищены</Layout.Footer>
    </>
  );
}
