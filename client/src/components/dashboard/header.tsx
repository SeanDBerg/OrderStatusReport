import { useTheme } from "@/components/ui/theme-provider";
import { useToast } from "@/hooks/use-toast";
import { Sun, Moon, Download, Printer } from "lucide-react";

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header = ({ toggleSidebar }: HeaderProps) => {
  const { theme, setTheme } = useTheme();
  const { toast } = useToast();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const showDemoMessage = (feature: string) => {
    toast({
      title: "Demo Mode",
      description: `${feature} is disabled in demonstration mode`,
      duration: 3000,
    });
  };

  return (
    <header className="bg-primary text-primary-foreground shadow-sm">
      <div className="container mx-auto px-3 py-2 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          {/* Logo */}
          <div className="font-bold text-base tracking-tight">AnalyticsPro</div>
          
          {/* Main navigation */}
          <nav className="hidden md:flex space-x-4 ml-4">
            <a href="#" className="px-2 py-0.5 text-white text-xs font-medium border-b border-accent">Dashboard</a>
            <div className="relative tooltip">
              <button 
                onClick={() => showDemoMessage('Reports')}
                className="px-2 py-0.5 text-gray-300 hover:text-white text-xs cursor-pointer"
              >
                Reports
              </button>
              <div className="tooltip-content">This function is disabled in demo mode</div>
            </div>
            <div className="relative tooltip">
              <button 
                onClick={() => showDemoMessage('Accounts')}
                className="px-2 py-0.5 text-gray-300 hover:text-white text-xs cursor-pointer"
              >
                Accounts
              </button>
              <div className="tooltip-content">This function is disabled in demo mode</div>
            </div>
            <div className="relative tooltip">
              <button 
                onClick={() => showDemoMessage('Settings')}
                className="px-2 py-0.5 text-gray-300 hover:text-white text-xs cursor-pointer"
              >
                Settings
              </button>
              <div className="tooltip-content">This function is disabled in demo mode</div>
            </div>
          </nav>
        </div>
        
        {/* Right side controls */}
        <div className="flex items-center space-x-3">
          {/* Theme toggle */}
          <button 
            onClick={toggleTheme}
            className="p-1 rounded-full hover:bg-secondary focus:outline-none" 
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          
          {/* Export button */}
          <div className="relative tooltip">
            <button 
              onClick={() => showDemoMessage('Download/Export')}
              className="p-1 rounded-full hover:bg-secondary focus:outline-none" 
              aria-label="Export data"
            >
              <Download className="h-4 w-4" />
            </button>
            <div className="tooltip-content">This function is disabled in demo mode</div>
          </div>
          
          {/* Print button */}
          <div className="relative tooltip">
            <button 
              onClick={() => showDemoMessage('Print')}
              className="p-1 rounded-full hover:bg-secondary focus:outline-none" 
              aria-label="Print report"
            >
              <Printer className="h-4 w-4" />
            </button>
            <div className="tooltip-content">This function is disabled in demo mode</div>
          </div>
          
          {/* User profile */}
          <div className="flex items-center tooltip">
            <span className="hidden md:inline-block mr-1 text-xs">Demo User</span>
            <div className="w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center">
              <span className="font-medium text-xs">DU</span>
            </div>
            <div className="tooltip-content">User profile disabled in demonstration mode</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
