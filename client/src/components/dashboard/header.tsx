import { useTheme } from "@/components/ui/theme-provider";
import { Sun, Moon, Download, Printer } from "lucide-react";

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header = ({ toggleSidebar }: HeaderProps) => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <div className="font-bold text-xl tracking-tight">AnalyticsPro</div>
          
          {/* Main navigation */}
          <nav className="hidden md:flex space-x-6 ml-8">
            <a href="#" className="px-2 py-1 text-white font-medium border-b-2 border-accent">Dashboard</a>
            <div className="tooltip px-2 py-1 text-gray-300 hover:text-white">
              Reports
              <div className="tooltip-content">Disabled in demonstration mode</div>
            </div>
            <div className="tooltip px-2 py-1 text-gray-300 hover:text-white">
              Accounts
              <div className="tooltip-content">Disabled in demonstration mode</div>
            </div>
            <div className="tooltip px-2 py-1 text-gray-300 hover:text-white">
              Settings
              <div className="tooltip-content">Disabled in demonstration mode</div>
            </div>
          </nav>
        </div>
        
        {/* Right side controls */}
        <div className="flex items-center space-x-5">
          {/* Theme toggle */}
          <button 
            onClick={toggleTheme}
            className="p-1 rounded-full hover:bg-secondary focus:outline-none" 
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
          </button>
          
          {/* Export button */}
          <div className="tooltip">
            <button className="p-1 rounded-full hover:bg-secondary focus:outline-none" aria-label="Export data">
              <Download className="h-6 w-6" />
            </button>
            <div className="tooltip-content">Export disabled in demonstration mode</div>
          </div>
          
          {/* Print button */}
          <div className="tooltip">
            <button className="p-1 rounded-full hover:bg-secondary focus:outline-none" aria-label="Print report">
              <Printer className="h-6 w-6" />
            </button>
            <div className="tooltip-content">Print disabled in demonstration mode</div>
          </div>
          
          {/* User profile */}
          <div className="flex items-center tooltip">
            <span className="hidden md:inline-block mr-2 text-sm">Demo User</span>
            <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center">
              <span className="font-medium text-sm">DU</span>
            </div>
            <div className="tooltip-content">User profile disabled in demonstration mode</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
