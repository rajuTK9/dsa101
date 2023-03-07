import React from "react";
import { Outlet } from "react-router";
import NotFound from "./components/NotFound/NotFound";
import GetUser from "./data/GetUser";

export default function Protected() {
  const user = GetUser();
  return user && user.isAdmin ? <Outlet /> : <NotFound />;
}
