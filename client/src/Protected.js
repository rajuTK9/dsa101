import React from "react";
import { Outlet } from "react-router";
import GetUser from "./data/GetUser";

export default function Protected() {
  const user = GetUser();
  return user && user.isAdmin ? <Outlet /> : <h1>404 Not Found</h1>;
}
