import Login from "@/components/auth/Login";
import Signup from "@/components/auth/Signup";
import Browse from "@/components/Browse";
import Jobs from "@/components/Jobs";
import NotFound from "@/components/shared/NotFound";
import Home from "../Home";
import { createBrowserRouter } from "react-router-dom";
import Logout from "../auth/Logout";

const appRouter = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "jobs", element: <Jobs /> },
    { path: "login", element: <Login /> },
    { path: "signup", element: <Signup /> },
    { path: "browse", element: <Browse /> },
    { path:"logout", element:<Logout/>},
    { path: "*", element: <NotFound /> },
]);

export default appRouter;