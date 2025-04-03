import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "./ui/button";
import { Loader2, Info } from "lucide-react";
import { USER_API_END_POINT } from "@/utils/apis";
import { toast } from "sonner";
import { setLoading, setUser } from "@/redux/authSlice";
import axios from "axios";
import { DialogDescription } from "@radix-ui/react-dialog";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const UpdateUserProfile = ({ isOpen, setIsOpen }) => {
  const { loading, user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    fullname: user?.fullname || "",
    email: user?.email || "",
    phoneNumber: user?.phoneNumber || "",
    bio: user?.profile?.bio || "",
    skills: user?.profile?.skills?.join(", ") || "",
    resume: user?.profile?.resume || "",
    profilePhoto: user?.profile?.profilePhoto || ""
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: files[0],
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("bio", input.bio);
    formData.append("skills", input.skills);
    if (input.resume) {
      formData.append("resume", input.resume);
    }
    if(input.profilePhoto){
      formData.append("profilePhoto", input.profilePhoto);
    }

    try {
      dispatch(setLoading(true));
      const res = await axios.post(
        `${USER_API_END_POINT}/profile/update`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true,
        }
      );

      if (res.data.success) {
        dispatch(setUser(res.data.user));
        setIsOpen(false);
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <TooltipProvider>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogHeader className="border-b border-gray-300 pb-2">
            <DialogTitle>Edit Profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click update when you're done.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Label
                      htmlFor="fullname"
                      className="text-right flex items-center gap-1"
                    >
                      Name <Info className="w-4 h-4 text-gray-500" />
                    </Label>
                  </TooltipTrigger>
                  <TooltipContent>Update your full name</TooltipContent>
                </Tooltip>
                <Input
                  id="fullname"
                  name="fullname"
                  value={input.fullname}
                  className="col-span-3"
                  onChange={handleChange}
                  placeholder="Enter new name"
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Label
                      htmlFor="email"
                      className="text-right flex items-center gap-1"
                    >
                      Email <Info className="w-4 h-4 text-gray-500" />
                    </Label>
                  </TooltipTrigger>
                  <TooltipContent>Update your email address</TooltipContent>
                </Tooltip>
                <Input
                  id="email"
                  name="email"
                  value={input.email}
                  className="col-span-3"
                  onChange={handleChange}
                  placeholder="Enter new Email"
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Label
                      htmlFor="phoneNumber"
                      className="text-right flex items-center gap-1"
                    >
                      Number <Info className="w-4 h-4 text-gray-500" />
                    </Label>
                  </TooltipTrigger>
                  <TooltipContent>Update your phone number</TooltipContent>
                </Tooltip>
                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  value={input.phoneNumber}
                  className="col-span-3"
                  onChange={handleChange}
                  placeholder="Enter new number"
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Label
                      htmlFor="bio"
                      className="text-right flex items-center gap-1"
                    >
                      Bio <Info className="w-4 h-4 text-gray-500" />
                    </Label>
                  </TooltipTrigger>
                  <TooltipContent>
                    Write a short bio about yourself
                  </TooltipContent>
                </Tooltip>
                <Input
                  id="bio"
                  name="bio"
                  value={input.bio}
                  className="col-span-3"
                  onChange={handleChange}
                  placeholder="Enter new bio"
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Label
                      htmlFor="skills"
                      className="text-right flex items-center gap-1"
                    >
                      Skills <Info className="w-4 h-4 text-gray-500" />
                    </Label>
                  </TooltipTrigger>
                  <TooltipContent>Enter comma-separated skills</TooltipContent>
                </Tooltip>
                <Input
                  id="skills"
                  name="skills"
                  value={input.skills}
                  className="col-span-3"
                  onChange={handleChange}
                  placeholder="e.g., HTML, CSS, React"
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Label
                      htmlFor="resume"
                      className="text-right flex items-center gap-1"
                    >
                      Resume <Info className="w-4 h-4 text-gray-500" />
                    </Label>
                  </TooltipTrigger>
                  <TooltipContent>Upload a PDF resume file</TooltipContent>
                </Tooltip>
                <Input
                  type="file"
                  id="resume"
                  name="resume"
                  accept="application/pdf"
                  className="col-span-3"
                  onChange={handleFileChange}
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Label
                      htmlFor="profilePhoto"
                      className="text-right flex items-center gap-1"
                    >
                      Profile pic <Info className="w-4 h-4 text-gray-500" />
                    </Label>
                  </TooltipTrigger>
                  <TooltipContent>Upload an image file</TooltipContent>
                </Tooltip>
                <Input
                  type="file"
                  id="profilePhoto"
                  name="profilePhoto"
                  accept="image/*"
                  className="col-span-3"
                  onChange={handleFileChange}
                />
              </div>

            </div>

            {loading ? (
              <Button className="w-full my-2">
                <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                Please wait
              </Button>
            ) : (
              <Button className="w-full my-2" type="submit">
                Update
              </Button>
            )}
          </form>
        </DialogContent>
      </Dialog>
    </TooltipProvider>
  );
};

export default UpdateUserProfile;
