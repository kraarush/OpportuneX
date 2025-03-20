import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { RadioGroup } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import axios from "axios";
import { BACKEND_URL } from "@/utils/apis";


const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [serverError, setServerError] = useState("");
  const [serverSuccess, setServerSuccess] = useState(false);

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [errors, setErrors] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    role: "",
    file: "",
  });

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    role: "",
    file: "",
  });

  const changeEventHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const changeFileHandler = (e) => {
    setFormData((prev) => ({ ...prev, file: e.target.files?.[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setServerError("");
      return;
    }

    try {
      const res = await axios.post(`${BACKEND_URL}/user/register`, formData);
      if (res.data.success) {
        setServerError("");
        setServerSuccess(true);

        setTimeout(() => {
          navigate("/login");
        }, 2500);
      }
    } catch (error) {
      console.log("came here");

      console.log(error.response.data);
      setServerError(error.response?.data?.message);
    }
  };

  const validateForm = () => {
    let newErrors = { ...errors };

    if (!formData.fullname.trim()) newErrors.fullname = "Name is required";
    else newErrors.fullname = "";

    if (!formData.email) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email format";
    else newErrors.email = "";

    if (!formData.phoneNumber) newErrors.phoneNumber = "Number is required";
    else if (!/^\+?[1-9][0-9]{9,14}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Enter a valid phone number";
    } else newErrors.phoneNumber = "";

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else {
      const errors = [];
      if (formData.password.length < 8) errors.push("at least 8 characters");
      if (!/[A-Z]/.test(formData.password)) errors.push("one uppercase letter");
      if (!/[a-z]/.test(formData.password)) errors.push("one lowercase letter");
      if (!/[!@#$%^&*(),.?":{}|<>]/.test(formData.password))
        errors.push("one special character");

      if (errors.length) {
        newErrors.password = `Password must contain ${errors.join(", ")}`;
      } else {
        newErrors.password = "";
      }
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    } else {
      newErrors.confirmPassword = "";
    }

    if (!formData.role) newErrors.role = "Role is required";
    else newErrors.role = "";

    setErrors(newErrors);

    for (const key in newErrors) {
      if (newErrors[key]) return false;
    }

    return true;
  };

  return (
    <div>
      <Navbar />
      <div>
        <div className="flex items-center justify-center md:max-w-7xl max-w-sm mx-auto ">
          <form
            onSubmit={handleSubmit}
            className="p-4 mx-auto md:w-1/2 md:border md:border-gray-200 md:rounded-md md:p-6 my-10 "
            noValidate
          >
            <h1 className="font-bold md:text-3xl sm:text-2xl text-xl mb-5">
              Sign up
            </h1>
            {serverSuccess && (
              <p className="text-green-500 md:text-2xl text-xl my-6 text-center">
                Account created successfully!! Redirecting to login page
              </p>
            )}
            <div className="my-2">
              <Label>
                Full name<span className="text-red-500 ml-1">*</span>
              </Label>
              <Input
                type="text"
                placeholder="Aarush kumar"
                name="fullname"
                onChange={changeEventHandler}
                value={formData.fullname}
                className="placeholder:text-sm md:placeholder:text-base"
              />
              {errors.fullname && (
                <p className="text-red-500 text-sm my-1 mx-2">
                  {errors.fullname}
                </p>
              )}
            </div>
            <div className="my-2">
              <Label>
                Email<span className="text-red-500 ml-1">*</span>
              </Label>
              <Input
                type="email"
                placeholder="user@gmail.com"
                name="email"
                onChange={changeEventHandler}
                value={formData.email}
                className="placeholder:text-sm md:placeholder:text-base"
              />
              {errors.email && (
                <p className="text-red-500 text-sm my-1 mx-2">{errors.email}</p>
              )}
            </div>
            <div className="my-2">
              <Label>
                Phone number<span className="text-red-500 ml-1">*</span>
              </Label>
              <Input
                type="tel"
                placeholder="+91 709...11"
                name="phoneNumber"
                onChange={changeEventHandler}
                value={formData.phoneNumber}
                className="placeholder:text-sm md:placeholder:text-base"
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-sm my-1 mx-2">
                  {errors.phoneNumber}
                </p>
              )}
            </div>
            <div className="my-2">
              <Label>
                Password<span className="text-red-500 ml-1">*</span>
              </Label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  name="password"
                  onChange={changeEventHandler}
                  value={formData.password}
                  className="placeholder:text-sm md:placeholder:text-base pr-10"
                />
                <div
                  className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </div>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm my-1 mx-2">
                  {errors.password}
                </p>
              )}
            </div>

            <div className="my-2">
              <Label>
                Confirm Password<span className="text-red-500 ml-1">*</span>
              </Label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  name="confirmPassword"
                  onChange={changeEventHandler}
                  value={formData.confirmPassword}
                  className="placeholder:text-sm md:placeholder:text-base pr-10"
                />
                <div
                  className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </div>
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm my-1 mx-2">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between my-4 gap-4">
              <div className="flex flex-col md:flex-row md:items-center lg:justify-between md:gap-3">
                <Label>
                  Role<span className="text-red-500 ml-1">*</span>
                </Label>
                <RadioGroup className="flex my-2 gap-4 border border-gray-200 px-3 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Input
                      type="radio"
                      name="role"
                      value="student"
                      checked={formData.role === "student"}
                      onChange={changeEventHandler}
                      className="cursor-pointer placeholder:text-sm md:placeholder:text-base"
                    />
                    <Label htmlFor="r1">Student</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Input
                      type="radio"
                      name="role"
                      value="recruiter"
                      checked={formData.role === "recruiter"}
                      onChange={changeEventHandler}
                      className="cursor-pointerplaceholder:text-sm md:placeholder:text-base"
                    />
                    <Label htmlFor="r2">Recruiter</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="flex flex-col md:flex-row md:items-center gap-2">
                <Label>Profile</Label>
                <Input
                  accept="image/*"
                  type="file"
                  name="file"
                  onChange={changeFileHandler}
                  className="cursor-pointer placeholder:text-sm md:placeholder:text-base"
                />
              </div>
            </div>
            {errors.role && (
              <p className="text-red-500 text-sm my-1 mt-[-20px] mb-4">
                {errors.role}
              </p>
            )}

            {serverError && (
              <p className="text-red-500 my-2 mx-2 text-center">
                {serverError}
              </p>
            )}

            <Button className="w-full " type="submit">
              Sign up
            </Button>

            <div className="text-sm pt-4">
              Already have an account ?{" "}
              <Link to="/login" className="text-blue-900">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
