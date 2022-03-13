import type { RouteProps } from "react-router-dom";
import type { AsyncFC } from "./types";
import { Fourohfour, Hello, Home } from "./components";

type AsyncRouteProps = RouteProps & { component: AsyncFC };

export const routes: AsyncRouteProps[] = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/hello",
    component: Hello,
  },
  {
    path: "*",
    component: Fourohfour,
  },
];
