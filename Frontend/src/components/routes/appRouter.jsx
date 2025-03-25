import Login from "@/components/auth/Login";
import Signup from "@/components/auth/Signup";
import Browse from "@/components/Browse";
import Jobs from "@/components/Jobs";
import NotFound from "@/components/NotFound";
import Home from "../Home";
import { createBrowserRouter } from "react-router-dom";
import JobDetails from "../shared/JobDetails";
import Profile from "../Profile";

const appRouter = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/jobs", element: <Jobs /> },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <Signup /> },
    { path: "/browse", element: <Browse /> },
    { path: "/job/description/:id", element: <JobDetails /> },
    { path: "/profile", element: <Profile /> },
    { path: "*", element: <NotFound /> },
]);

export default appRouter;