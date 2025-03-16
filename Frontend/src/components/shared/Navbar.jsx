import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "../ui/button";
import { LogOut, User } from "lucide-react";

const Navbar = () => {
  const [loggedIn, isLoggedIn] = useState(false);

  return (
    <div className="bg-white border-b border-gray-300   ">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16 px-4">
        {/* Left part */}
        <div>
          <h1 className="text-3xl font-bold">
            Opportune<span className="text-[#F83002]">X</span>
          </h1>
        </div>

        {/* Right part */}
        <div className="flex items-center gap-6">
          <ul className="flex font-semibold gap-5">
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

          {
            !loggedIn ? 
            <div className="flex gap-4">
              <Button variant="outline">Sign Up</Button>
              <Button className="bg-[#6A38C2] hover:bg-[#885bd7]">Login</Button>
            </div> : 
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
                <div className="flex mr-2">
                  <Avatar className="w-14 h-14 cursor-pointer rounded-full border border-gray-300">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </Avatar>
                </div>
                <div className="flex flex-col">
                  <h1 className="font-medium text-lg">{"Aarush kumar"}</h1>{" "}
                  {/* user name will come here from the login info*/}
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>

              <div className="flex flex-col m-4 w-full text-gray-600">
                <div className="flex items-center justify-start w-full">
                  <User size={30}/>
                  <Button variant="link" className="text-lg px-6 py-2 text-gray-600">
                    Profile 
                  </Button>
                </div>
                <div className="flex items-center justify-start w-full">
                  <LogOut size={30}/>
                  <Button variant="link" className="text-lg px-6 py-2 text-gray-600">
                    Logout
                  </Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
