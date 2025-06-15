// esbuild.config.js
import { build } from "esbuild";
import alias from "esbuild-plugin-alias";
import path from "path";
import { writeFileSync, mkdirSync, existsSync } from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname);

// ✅ Accurate paths based on your actual structure
const clientDir = path.join(rootDir, "client");
const clientSrc = path.join(clientDir, "src");
const indexHtmlPath = path.join(clientDir, "index.html");
const entryFile = path.join(clientSrc, "main.tsx");
const distOut = path.join(rootDir, "dist", "client");
const indexOut = path.join(distOut, "index.html");

mkdirSync(distOut, { recursive: true });

// Generate HTML with correct script references
const htmlContent = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
    <title>Analytics Dashboard</title>
    <link rel="stylesheet" href="/main.css" />
  </head>
  <body>
    <div id="root"></div>
    <script src="/main.js"></script>
    <!-- This is a replit script which adds a banner on the top of the page when opened in development mode outside the replit environment -->
    <script type="text/javascript" src="https://replit.com/public/js/replit-dev-banner.js"></script>
  </body>
</html>`;

writeFileSync(indexOut, htmlContent);

build({
  entryPoints: [entryFile],
  bundle: true,
  minify: true,
  sourcemap: true,
  outdir: distOut,
  loader: {
    ".ts": "ts",
    ".tsx": "tsx",
  },
  define: {
    "process.env.NODE_ENV": '"production"',
  },
  plugins: [
    alias({
      "@": clientSrc,
      "@shared": path.join(rootDir, "shared"),
    }),
  ],
  jsx: "automatic",
  platform: "browser",
  target: ["esnext"],
  logLevel: "info",
}).catch(() => process.exit(1));
