import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import AboutUs from "../Pages/AboutUs";
import Layout from "../Pages/Layout";
import QuickStart from "../Pages/Learn/QuickStart";
import LearnLayout from "../Pages/Learn/LearnLayout";
import Featured from "../Pages/Learn/Featured";
import ThinkingInReact from "../Pages/Learn/ThinkingInReact";
import Contribute from "../Pages/Contribute";
import ProtectedRoutes from "./ProtectedRoutes";
import Login from "../Pages/Login";
import ErrorHandlingRoutes from "../Error/ErrorHandlingRoutes";
import PageNotFound from "../Error/PageNotFound";
const isLoggedIn = true;
const userData: { email: string } | null = isLoggedIn
  ? { email: "email@gmail.com" }
  : null;

const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Root Layout */}
      <Route
        path="/"
        element={<Layout />}
        errorElement={<ErrorHandlingRoutes />}
      >
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route
          path="contribute"
          element={
            <ProtectedRoutes
              isAllowed={isLoggedIn}
              redirectPath="/login"
              data={userData}
            >
              <Contribute />
            </ProtectedRoutes>
          }
        />
        <Route
          path="login"
          errorElement={<ErrorHandlingRoutes />}
          element={
            <ProtectedRoutes
              isAllowed={!isLoggedIn}
              redirectPath="/contribute"
              data={userData}
            >
              <Login />
            </ProtectedRoutes>
          }
        />
      </Route>

      {/* Learn Layout */}
      <Route path="/learn" element={<LearnLayout />}>
        <Route index element={<QuickStart />} />
        <Route path="ThinkinIngReact" element={<ThinkingInReact />} />
        <Route path="featured" element={<Featured />} />
      </Route>

      {/* Page Not Found */}
      <Route path="*" element={<PageNotFound />} />
    </>
  )
);

export default routes;
