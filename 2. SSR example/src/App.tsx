import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import { routes } from "./routes";

export const App: React.FC = () => {
  return (
    <>
      <Link to="/">Home</Link> <Link to="hello">Hello</Link>
      <Switch>
        {routes.map((route, i) => (
          <Route key={i} {...route} />
        ))}
      </Switch>
    </>
  );
};
