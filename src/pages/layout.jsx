import { Outlet } from "react-router-dom";
import Nav from "../components/Nav/nav";

function Layout() {
  return (
    <div className="md:flex md:justify-center">
      <div className="md:max-w-screen-md">
        <Outlet />
        <Nav />
      </div>
    </div>
  );
}

export default Layout;
