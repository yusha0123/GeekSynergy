import { lazy } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import PrivateRoute from "./components/hoc/PrivateRoute";
import PublicRoute from "./components/hoc/PublicRoute";

const App = () => {
  const Home = lazy(() => import("./pages/Home"));
  const Signup = lazy(() => import("./pages/Signup"));
  const Login = lazy(() => import("./pages/Login"));

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<PublicRoute />}>
          <Route path="login" element={<Login />} />
          <Route path="sign-up" element={<Signup />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
