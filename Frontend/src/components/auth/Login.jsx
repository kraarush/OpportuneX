import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { RadioGroup } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const Login = () => {

  const backendUrl = import.meta.env.VITE_BACKEND_URL_LOCAL;

    const [formData, setFormData] = useState({
      email: "",
      password:"",
      role:"",
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
      if(!validateForm()) return;
      console.log(formData);    
      console.log("Form submitted successfully");
    }

    const validateForm = () => {
      let newErrors = { ...errors };
    
      if (!formData.email) newErrors.email = "Email is required";
      else if (!formData.email.includes("@")) newErrors.email = "Invalid email format";
      else newErrors.email = "";
    
      if (!formData.password) {
        newErrors.password = "Password is required";
      } else {
        const errors = [];
        
        if (formData.password.length < 8) {
          errors.push("at least 8 characters");
        }
        if (!/[A-Z]/.test(formData.password)) {
          errors.push("one uppercase letter");
        }
        if (!/[a-z]/.test(formData.password)) {
          errors.push("one lowercase letter");
        }
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(formData.password)) {
          errors.push("one special character");
        }
      
        if (errors.length) {
          newErrors.password = `Password must contain ${errors.join(", ")}`;
        } else {
          newErrors.password = "";
        }
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
        <div className="flex items-center justify-center md:max-w-7xl sm:max-w-5xl max-w-3xl mx-auto  my-16">
          <form
            onSubmit={handleSubmit}
            className="w-1/2 border border-gray-200 rounded-md p-6"
            noValidate
          >
            <h1 className="font-bold md:text-3xl sm:text-2xl text-xl mb-5">
              Login
            </h1>
            <div className="my-2">
              <Label>Email</Label>
              <Input  type="email" placeholder="user@gmail.com" name="email" onChange={changeEventHandler} value={formData.email} />
              {errors.email && <p className="text-red-500 text-sm my-1 mx-2">{errors.email}</p>}

            </div>
            <div className="my-2">
              <Label>Password</Label>
              <Input type="password" placeholder="Enter your password" name="password" onChange={changeEventHandler} value={formData.password}/>
              {errors.password && <p className="text-red-500 text-sm my-1 mx-2">{errors.password}</p>}

            </div>

              <div className="flex items-center my-2 gap-3">
                <Label>Role</Label>
                <RadioGroup className="flex my-2 gap-4 border border-gray-200 px-3 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Input
                      type="radio"
                      name="role"
                      value="student"
                      checked={formData.role === 'student'}
                      onChange={changeEventHandler}
                      className="cursor-pointer"
                    />
                    <Label htmlFor="r1">Student</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Input
                      type="radio"
                      name="role"
                      value="recuiter"
                      checked={formData.role === 'recruiter'}
                      onChange={changeEventHandler}
                      className="cursor-pointer"
                    />
                    <Label htmlFor="r2">Recruiter</Label>
                  </div>
                </RadioGroup>
                {errors.role && <p className="text-red-500 text-sm my-1 mx-2">{errors.role}</p>}
              </div>

            <Button className="w-full my-2" type="submit">Login</Button>
           
            <div className="text-sm pt-4">
              Don't have an account ?{" "}
              <Link to="/signup" className="text-blue-900">
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
  )
}

export default Login