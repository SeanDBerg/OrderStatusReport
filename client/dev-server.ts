// Basic dev server to serve static React content
import express from "express";
import path from "path";

const app = express();
const PORT = Number(process.env.PORT) || 5000;
const ROOT = path.resolve();

// Set proper MIME types for JavaScript modules
app.use(express.static(path.join(ROOT, "dist", "client"), {
  setHeaders: (res, path) => {
    if (path.endsWith('.js')) {
      res.set('Content-Type', 'application/javascript');
    }
    if (path.endsWith('.css')) {
      res.set('Content-Type', 'text/css');
    }
  }
}));

app.get("*", (_req, res) => {
  res.sendFile(path.join(ROOT, "dist", "client", "index.html"));
});

app.listen(PORT, () => {
  console.log(`[Dev Server] Running at http://localhost:${PORT}`);
});
