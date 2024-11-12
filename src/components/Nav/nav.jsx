import { House, Bookmark, CircleUserRound } from "lucide-react";
import { Children } from "react";
import { Link } from "react-router-dom";

const NavData = [
  {
    icon: <House />,
    route: "/",
  },
  {
    icon: <Bookmark />,
    route: "/",
  },
  {
    icon: <CircleUserRound />,
    route: "/",
  },
];

function Nav() {
  const NavLink = ({ item }) => {
    return <Link className="p-3 rounded-full">{item.icon}</Link>;
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
