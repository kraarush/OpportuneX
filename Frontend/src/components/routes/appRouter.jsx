import Login from "@/components/auth/Login";
import Signup from "@/components/auth/Signup";
import Browse from "@/components/Browse";
import Jobs from "@/components/Jobs";
import Notfound from "@/components/shared/Notfound";
import Home from "../Home";
import { createBrowserRouter } from "react-router-dom";

const appRouter = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "jobs", element: <Jobs /> },
    { path: "login", element: <Login /> },
    { path: "signup", element: <Signup /> },
    { path: "browse", element: <Browse /> },
    { path: "*", element: <Notfound /> },
]);

export default appRouter;