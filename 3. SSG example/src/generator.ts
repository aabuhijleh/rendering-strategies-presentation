import ReactDOM from "react-dom/server";
import fs from "fs";
import path from "path";
import { removeExtension, replaceExtension } from "../utils";

const outputFolder = path.join(process.cwd(), "output");
if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder);
}

const pages = fs.readdirSync(path.join(process.cwd(), "pages"));
for (const page of pages) {
  const { default: pageComponent } = await import(`../pages/${page}`);

  fs.writeFileSync(
    path.join(outputFolder, replaceExtension(page, ".html")),
    `<!DOCTYPE html>
      <html lang="en">
        <head>
          <title>${removeExtension(page)}</title>
        </head>
        <body>
          <div id="root">${ReactDOM.renderToStaticMarkup(pageComponent())}</div>
        </body>
      </html>`
  );
}
