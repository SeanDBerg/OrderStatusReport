import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "@/components/ui/theme-provider";

console.log("🚀 Main.tsx executing");

const rootElement = document.getElementById("root");
if (!rootElement) {
  console.error("❌ Could not find #root element in DOM");
} else {
  console.log("✅ #root element found");
  try {
    console.log("🔄 Creating React root and rendering...");
    const root = createRoot(rootElement);
    root.render(
      <ThemeProvider defaultTheme="dark" storageKey="analytics-dashboard-theme">
        <App />
      </ThemeProvider>
    );
    console.log("✅ React app rendered successfully");
  } catch (error) {
    console.error("❌ Error rendering React app:", error);
  }
}
