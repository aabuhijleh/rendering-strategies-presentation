import express from "express";
import React from "react";
import ReactDOM from "react-dom/server";
import { StaticRouter, matchPath } from "react-router-dom";
import { App } from "./App";
import { routes } from "./routes";

const PORT = 2222;

const app = express();

app.use(express.static("public"));

app.get("*", async (req, res) => {
  const location = req.url;
  const activeRoute = routes.find((route) => matchPath(location, route));
  const initialData = await activeRoute?.component?.preloadData?.();

  res.send(`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <title>The content is rendered on the server side!</title>
      <script src="/frontend.js" defer></script>
    </head>
    <body>
      <div id="root">${ReactDOM.renderToString(
        <StaticRouter location={location} context={initialData}>
          <App />
        </StaticRouter>
      )}</div>
      <script>window.__initialData__=${JSON.stringify(initialData)}</script>
    </body>
  </html>
  `);
});

app.listen(PORT, () => {
  console.log(`⚡ Server is running http://localhost:${PORT} ⚡`);
});
