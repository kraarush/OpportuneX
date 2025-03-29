import React, { useState } from "react";
import { Edit, Mail, Phone, User } from "lucide-react";
import { Badge } from "./ui/badge";
import AppliedJobsTable from "./AppliedJobsTable";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Label } from "./ui/label";
import UpdateUserProfile from "./UpdateUserProfile";
import { useSelector } from "react-redux";

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useSelector((store) => store.auth);

  return (
    <div>
      <Navbar />
      <div className="shadow-lg max-w-7xl mx-auto p-3 my-10">
        <div className="border border-gray-300 rounded-md max-w-3xl md:max-w-4xl my-4 md:my-10 mx-auto p-4 md:p-10 flex flex-col gap-5 ">
          <div className="flex justify-between w-full">
            <div className="flex gap-3 items-center">
              <Avatar className="w-20 h-20">
                {user?.profile?.profilePhoto ? (
                  <AvatarImage
                    src={user?.profile?.profilePhoto}
                    alt="Profile_pic"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-200 rounded-full">
                    <User className="w-10 h-10 text-gray-500" />
                  </div>
                )}
              </Avatar>

              <div className="flex flex-col">
                <p className="font-bold text-xl">
                  {user?.fullname ? user?.fullname : "User name"}
                </p>
                <p>
                  {user?.profile?.bio ? user?.profile?.bio : "Empty bio . . ."}
                </p>
              </div>
            </div>
            <Edit
              size={30}
              className="cursor-pointer"
              onClick={() => {
                setIsOpen(true);
              }}
            />
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex gap-3 items-center">
              <Mail />
              <p>{user?.email ? user?.email : "User email"}</p>
            </div>
            <div className="flex gap-3">
              <Phone />
              <p>{user?.phoneNumber ? user?.phoneNumber : "Mob no"}</p>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <p>Skills</p>
            <div className="flex gap-2">
              {user?.profile?.skills.length ? (
                user?.profile?.skills.map((i, index) => {
                  return <Badge key={index}>{i}</Badge>;
                })
              ) : (
                <span>NA</span>
              )}
            </div>
          </div>

          <div className="flex flex-col">
            <Label className="font-medium text-lg">Resume</Label>
            {user?.profile?.resumeOriginalName ? (
              <span>
                <a
                  className="font-medium text-blue-500 cursor-pointer hover:text-blue-700"
                  href={user?.profile?.resume}
                  target="_blank"
                >
                  {user?.profile?.resumeOriginalName}
                </a>
              </span>
            ) : (
              <span>NA</span>
            )}
          </div>
        </div>

        <div className="max-w-6xl mx-auto p-4 md:p-8 ">
          <p className="font-bold text-xl">Applied Jobs</p>
          <div>
            <AppliedJobsTable />
          </div>
        </div>

        <div>
          {isOpen && (
            <UpdateUserProfile isOpen={isOpen} setIsOpen={setIsOpen} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
