import { Link } from "react-router";
import logo from "../assets/music.svg";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink
} from "@/components/ui/navigation-menu";
import { useRef } from "react";
import Dialog from "./Dialog";

const Header = () => {
  const dialogRef = useRef(null);
  return (
    <div className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50 flex items-center justify-between px-6 py-3">
      <img className="w-8 h-8" src={logo} />
      <div className="flex gap-1 text-gray-300">
        <p>I did a thing in React: the music app</p>
      </div>
      <NavigationMenu className="flex gap-1 text-gray-300">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink render={<Link to="/" />}>
              {" "}
              Home{" "}
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink render={<Link to="/artists" />}>
              {" "}
              Artists{" "}
            </NavigationMenuLink>{" "}
          </NavigationMenuItem>{" "}
          <NavigationMenuItem>
            <NavigationMenuLink
              render={
                <button
                  onClick={() => {
                    dialogRef.current.showModal();
                  }}
                />
              }
            >
              About
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Dialog ref={dialogRef} />
    </div>
  );
};

export default Header;
