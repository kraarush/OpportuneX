import { BrowserRouter, RouterProvider, useRoutes } from "react-router-dom";
import appRouter from "./components/routes/appRouter";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";

const AppRoutes = () => {
  return useRoutes(appRouter);
};

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow overflow-auto">
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
}

export default App;