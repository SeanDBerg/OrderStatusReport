import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "@/components/ui/theme-provider";

const rootElement = document.getElementById("root");
if (!rootElement) {
  console.error("❌ Could not find #root element in DOM");
} else {
  console.log("✅ #root element found");
  createRoot(rootElement).render(
    <ThemeProvider defaultTheme="dark" storageKey="analytics-dashboard-theme">
      <App />
    </ThemeProvider>
  );
}
