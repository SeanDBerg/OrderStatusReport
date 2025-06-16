// Basic dev server to serve static React content
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = Number(process.env.PORT) || 5000;
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

console.log(`Server root: ${ROOT}`);
console.log(`Serving from: ${path.join(ROOT, "dist", "client")}`);

// Set proper MIME types for JavaScript modules
app.use(express.static(path.join(ROOT, "dist", "client"), {
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.js')) {
      res.set('Content-Type', 'application/javascript');
    }
    if (filePath.endsWith('.css')) {
      res.set('Content-Type', 'text/css');
    }
  }
}));

app.get("*", (_req, res) => {
  const indexPath = path.join(ROOT, "dist", "client", "index.html");
  console.log(`Serving index.html from: ${indexPath}`);
  res.sendFile(indexPath);
});

app.listen(PORT, () => {
  console.log(`[Dev Server] Running at http://localhost:${PORT}`);
});
