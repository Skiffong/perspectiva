import React from "react";
import { useLocation } from "react-router-dom";
import { Layout } from "antd";
import "./appStyles/AppContent.css";
import useWindowSize from "../utils/useWindowSize";

import Home from "../pages/Home";
import Contacts from "../pages/Contacts";
import About from "../pages/About";
import Prices from "../pages/Prices";
import Sale from "../pages/Sale";
import Courses from "../pages/Courses";
import Auto from "../pages/Auto";
import CategoryB from "../pages/SubCourses/CategoryB";
import CategoryA from "../pages/SubCourses/CategoryA";
import CategoryC from "../pages/SubCourses/CategoryC";
import CategoryCE from "../pages/SubCourses/CategoryCE";
import CategoryD from "../pages/SubCourses/CategoryD";
import CategoryTaxi from "../pages/SubCourses/CategoryTaxi";
import CategoryInternational from "../pages/SubCourses/CategoryInternational";

export default function AppContent() {
  const { pathname } = useLocation();
  const [currentWidth] = useWindowSize();

  return (
    <>
      <Layout.Content
        className={
          currentWidth > 770
            ? "contentStyle contentStyleDesk"
            : "contentStyle contentStyleMobile"
        }
      >
        {pathname === "/" && <Home />}
        {pathname === "/Home" && <Home />}
        {pathname === "/Contacts" && <Contacts />}
        {pathname === "/About" && <About />}
        {pathname === "/Prices" && <Prices />}
        {pathname === "/Services:CategoryA" && <CategoryA />}
        {pathname === "/Services:CategoryB" && <CategoryB />}
        {pathname === "/Services:CategoryC" && <CategoryC />}
        {pathname === "/Services:CategoryCE" && <CategoryCE />}
        {pathname === "/Services:CategoryD" && <CategoryD />}
        {pathname === "/Services:CategoryTaxi" && <CategoryTaxi />}
        {pathname === "/Services:CategoryInternational" && (
          <CategoryInternational />
        )}
        {pathname === "/Courses" && <Courses />}
        {pathname === "/Sale" && <Sale />}
        {pathname === "/Auto" && <Auto />}
        {pathname === "*" && <Home />}
      </Layout.Content>
    </>
  );
}
