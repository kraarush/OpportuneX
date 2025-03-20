import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { LogOut, User } from "lucide-react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Cookies from "js-cookie";

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  const handleNav = () => setNavOpen(!navOpen);

  return (
    <div className="bg-white border-b border-gray-300 h-[8vh]">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16 px-4">
        {/* Left part */}
        <div>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold">
            Opportune<span className="text-[#F83002]">X</span>
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex font-semibold gap-5 md:text-lg mr-4">
            <li>
              <Link to="/" className="cursor-pointer hover:text-gray-600">
                Home
              </Link>
            </li>
            <li>
              <Link to="/jobs" className="cursor-pointer hover:text-gray-600">
                Jobs
              </Link>
            </li>
            <li>
              <Link to="/browse" className="cursor-pointer hover:text-gray-600">
                Browse
              </Link>
            </li>
          </ul>

          {!loggedIn ? (
            <div className="flex gap-4">
              <Link to="/signup">
                <Button
                  variant="outline"
                  className="border-[#6A38C2] hover:text-[#331c5b]"
                >
                  Sign Up
                </Button>
              </Link>
              <Link to="/login">
                <Button className="bg-[#6A38C2] hover:bg-[#885bd7] hover:text-black">
                  Login
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="w-10 h-10 cursor-pointer rounded-full border border-gray-300">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                    className="w-full h-full object-cover rounded-full"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="flex mx-2 flex-col items-center w-[22rem]">
                <div className="flex gap-6 items-center">
                  <Avatar className="w-14 h-14 rounded-full border border-gray-300">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </Avatar>
                  <div className="flex flex-col">
                    <h1 className="font-medium text-lg">{"Aarush kumar"}</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col m-4 w-full text-gray-600">
                  <div className="flex items-center justify-start w-full">
                    <User size={30} />
                    <Button
                      variant="link"
                      className="text-lg px-6 py-2 text-gray-600"
                      tabIndex={-1}
                    >
                      Profile
                    </Button>
                  </div>
                  <div className="flex items-center justify-start w-full">
                    <LogOut size={30} />
                    <Link to="/logout">
                      <Button
                        variant="link"
                        className="text-lg px-6 py-2 text-gray-600"
                        tabIndex={-1}
                      >
                        Logout
                      </Button>
                    </Link>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>

        <div onClick={handleNav} className="md:hidden cursor-pointer">
          {!navOpen ? (
            <AiOutlineMenu size={24} />
          ) : (
            <AiOutlineClose size={24} />
          )}
        </div>

        <div
          className={`md:hidden fixed left-0 top-0 w-[60%] h-full border-r border-gray-300 bg-white z-50 
            transition-transform duration-300 ${
              navOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
          <h1 className="text-3xl font-bold w-full m-4">
            Opportune<span className="text-[#F83002]">X</span>
          </h1>

          <div className="flex flex-col gap-4 items-center p-4">
            <Avatar className="w-14 h-14 rounded-full border border-gray-300">
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="@shadcn"
                className="w-full h-full object-cover rounded-full"
              />
            </Avatar>
            <div className="flex flex-col">
              <h1 className="font-medium text-lg">{"Aarush kumar"}</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>

          <ul>
            <li className="p-4 border-b border-gray-200">
              <Link
                to="/"
                onClick={handleNav}
                className="text-gray-600 hover:text-black"
              >
                Home
              </Link>
            </li>
            <li className="p-4 border-b border-gray-200">
              <Link
                to="/jobs"
                onClick={handleNav}
                className="text-gray-600 hover:text-black"
              >
                Jobs
              </Link>
            </li>
            <li className="p-4 border-b border-gray-200">
              <Link
                to="/browse"
                onClick={handleNav}
                className="text-gray-600 hover:text-black"
              >
                Browse
              </Link>
            </li>
          </ul>

          {!loggedIn ? (
            <div className="flex flex-col mt-4 items-center">
              <Link
                to="/signup"
                onClick={handleNav}
                className="w-full flex justify-center"
              >
                <Button variant="outline" className="border-[#6A38C2]  w-3/4">
                  Sign Up
                </Button>
              </Link>
              <Link
                to="/login"
                onClick={handleNav}
                className="w-full flex justify-center"
              >
                <Button className="bg-[#6A38C2] mt-2 w-3/4">Login</Button>
              </Link>
            </div>
          ) : (
            <div className="flex flex-col ">
              <Link
                to="/profile"
                onClick={handleNav}
                className="text-gray-600 p-4 hover:bg-gray-100 border-b border-gray-200 "
              >
                Profile
              </Link>
              <Link
                to="/logout"
                onClick={handleNav}
                className="text-gray-600 p-4 hover:bg-gray-100"
              >
                Logout
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
