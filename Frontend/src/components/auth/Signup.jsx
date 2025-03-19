import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { RadioGroup } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const Signup = () => {

  const[error, setError] = useState('');
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password:"",
    confirmPassword:"",
    phoneNumber:"",
    role:"",
    file:"" 
  });

  const changeEventHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const changeFileHandler = (e) => {
    setFormData((prev) => ({...prev, file: e.target.files?.[0]}));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);    
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
      <div>
        <div className="flex items-center justify-center md:max-w-7xl sm:max-w-5xl max-w-3xl mx-auto ">
          <form
            onSubmit={handleSubmit}
            className="w-1/2 border border-gray-200 rounded-md p-6 my-10 "
          >
            <h1 className="font-bold md:text-3xl sm:text-2xl text-xl mb-5">
              Sign up
            </h1>
            <div className="my-2">
              <Label>Full name</Label>
              <Input type="text" placeholder="Aarush kumar" name="fullname" onChange={changeEventHandler} value={formData.fullname}/>
            </div>
            <div className="my-2">
              <Label>Email</Label>
              <Input type="email" placeholder="user@gmail.com" name="email" onChange={changeEventHandler} value={formData.email} />
            </div>
            <div className="my-2">
              <Label>Phone number</Label>
              <Input type="tel" placeholder="+91 709...11" name="phoneNumber" onChange={changeEventHandler} value={formData.phoneNumber} />
            </div>
            <div className="my-2">
              <Label>Password</Label>
              <Input type="password" placeholder="Enter your password" name="password" onChange={changeEventHandler} value={formData.password} />
            </div>
            <div className="my-2">
              <Label>Confirm Password</Label>
              <Input type="text" placeholder="Enter your password" name="confirmPassword" onChange={changeEventHandler} value={formData.confirmPassword} />
              {/* {error ? <span className="text-red-500">{error}</span> : null} */}
            </div>

            <div className="flex items-center justify-between my-4">
              <div className="flex items-center justify-between gap-3">
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
              </div>

              <div className="flex items-center gap-2">
                <Label>Profile</Label>
                <Input
                  accept="image/*"
                  type="file"
                  className="cursor-pointer"
                  name="file" 
                  onChange={changeFileHandler} 
                />
              </div>
            </div>

            <Button className="w-full " type="submit">Sign up</Button>
           
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
