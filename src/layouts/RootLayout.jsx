import { NavLink, Outlet } from "react-router-dom";
import "../styles/index.css";

export default function RootLayout() {
  return (
    <>
      <NavLink to="/">Home</NavLink> | <NavLink to="/blog">Blog</NavLink> |{" "}
      <NavLink to="/about">About</NavLink>
      <p />
      <Outlet />
    </>
  );
}
