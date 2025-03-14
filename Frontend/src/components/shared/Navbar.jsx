import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Link } from "react-router-dom";

const Navbar = () => {
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
          <ul className="flex font-medium items-center gap-5">
            <li>
              <Link to="/" className="cursor-pointer hover:text-gray-600">Home</Link>
            </li>
            <li>
              <Link to="/jobs" className="cursor-pointer hover:text-gray-600">Jobs</Link>
            </li>
            <li>
              <Link to="/browse" className="cursor-pointer hover:text-gray-600">Browse</Link>
            </li>
          </ul>

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
            <PopoverContent>
              <h1>Hello</h1>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default Navbar;