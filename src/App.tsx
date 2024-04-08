import { lazy } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const App = () => {
  // const Home = lazy(() => import("./pages/Home"));
  // const Signup = lazy(() => import("./pages/Signup"));
  // const Login = lazy(() => import("./pages/Login"));

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        {/* <Route element={<PublicRoute />}> */}
        <Route path="/" element={<Home />} />
        {/* </Route> */}
        {/* <Route element={<PrivateRoute />}> */}
        <Route path="login" element={<Login />} />
        <Route path="sign-up" element={<Signup />} />
        {/* </Route> */}
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
