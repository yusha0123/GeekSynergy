import useAuthContext from "@/hooks/useAuthContext";
import { Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Spinner from "@/components/Spinner";

function PublicRoute() {
  const { isLoggedIn } = useAuthContext();

  if (!isLoggedIn) {
    return (
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
    );
  }

  return <Navigate to="/" replace />;
}

export default PublicRoute;
