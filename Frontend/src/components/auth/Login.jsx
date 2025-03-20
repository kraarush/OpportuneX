import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { RadioGroup } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Eye, EyeOff } from "lucide-react";


const Login = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL_LOCAL;
  const [showPassword, setShowPassword] = useState(false);
  const [serverError, setServerError] = useState("");
  const navigate = useNavigate();

  
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    role: "",
  });

  const changeEventHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setServerError("");
      return;
    }

    try {
      const res = await axios.post(`${backendUrl}/user/login`, formData,{ withCredentials: true });   //  withCredentials is used for cookies
      if (res.data.success) setServerError("");
      navigate("/dashboard");
    } catch (error) {
      console.log(error.response);
      setServerError(error.response?.data?.message);
    }
  };

  const validateForm = () => {
    let newErrors = { ...errors };

    if (!formData.email) newErrors.email = "Email is required";
    else if (!formData.email.includes("@") || !formData.email.includes(".com"))
      newErrors.email = "Invalid email format";
    else newErrors.email = "";

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be atleast 6 characters";
    } else {
      newErrors.password = "";
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
      <div className="flex items-center justify-center md:max-w-7xl sm:max-w-5xl  mx-auto  my-16">
        <form
          onSubmit={handleSubmit}
          className=" w-4/5 md:w-1/2 border border-gray-200 rounded-md p-6 "
          noValidate
        >
          <h1 className="font-bold md:text-3xl sm:text-2xl text-xl mb-5">
            {" "}
            Login{" "}
          </h1>

          <div className="my-4">
            <Label>Email</Label>
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
              <Label>Password</Label>
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

          <div className="flex flex-col md:flex-row md:items-center md:gap-3 my-4">
            <Label>Role</Label>
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
            {errors.role && (
              <p className="text-red-500 text-sm my-1 mx-2">{errors.role}</p>
            )}
          </div>

          {serverError && (
            <p className="text-red-500 text-sm my-1 mx-2">{serverError}</p>
          )}
          <Button className="w-full my-2" type="submit">
            {" "}
            Login{" "}
          </Button>

          <div className="text-sm pt-4">
            Don't have an account ?
            <Link to="/signup" className="text-blue-900">
              {" "}
              Sign Up{" "}
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
