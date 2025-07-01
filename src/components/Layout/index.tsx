import { Outlet } from "react-router-dom";
import Header from "../Header";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default Layout;
// This file is part of the My Portfolio project.
