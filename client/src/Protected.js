import React from "react";
import { Outlet } from "react-router";
import Loading from "./components/Loading/Loading";
import NotFound from "./components/NotFound/NotFound";
import GetUser from "./data/GetUser";
import { useAuth0 } from "@auth0/auth0-react";

export default function Protected() {
  const { isAuthenticated } = useAuth0();
  const user = GetUser();
  return user ? (
    user.isAdmin ? (
      <Outlet />
    ) : (
      <NotFound />
    )
  ) : isAuthenticated ? (
    <Loading />
  ) : (
    <NotFound />
  );
}
