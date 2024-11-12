import { Children } from "react";
import { Link, useLocation } from "react-router-dom";
import { House, Bookmark, CircleUserRound } from "lucide-react";

import { cn } from "../../utils/helpers";

const NavData = [
  {
    icon: <House />,
    route: "/",
  },
  {
    icon: <Bookmark />,
    route: "",
  },
  {
    icon: <CircleUserRound />,
    route: "",
  },
];

function Nav() {
  const { pathname } = useLocation();

  const NavLink = ({ item }) => {
    const { icon, route } = item;
    const isActive = route === pathname;
    return (
      <Link to={route} className={cn("p-3 rounded-full", isActive && "bg-zinc-200")}>
        {icon}
      </Link>
    );
  };

  return (
    <div className="fixed bottom-0 h-[71px] w-full shadow-[0px_-2px_8px_0px_#0000001A] flex items-center justify-around z-10 max-w-screen-md">
      {Children.toArray(
        NavData.map((item) => {
          return <NavLink item={item} />;
        })
      )}
    </div>
  );
}

export default Nav;
