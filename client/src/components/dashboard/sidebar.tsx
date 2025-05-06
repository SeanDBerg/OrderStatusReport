import { Filter } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  return (
    <aside 
      className={`${isOpen ? 'fixed top-0 left-0 h-full z-30' : 'hidden'} md:block md:static md:h-auto md:z-auto w-50 bg-card dark:bg-card border-r border-border overflow-y-auto transition-colors duration-300`}
    >
      <div className="p-3">
        <h3 className="font-semibold text-sm mb-2">Filters</h3>
        
        {/* Date range */}
        <div className="mb-3">
          <label className="block text-xs font-medium mb-1">Date Range</label>
          <div className="relative tooltip">
            <select className="block w-full px-2 py-1 bg-muted border border-input rounded-md text-xs cursor-not-allowed opacity-75">
              <option>Last 30 days</option>
            </select>
            <div className="tooltip-content">Filter disabled in demonstration mode</div>
          </div>
        </div>
        
        {/* Service Tier */}
        <div className="mb-3">
          <label className="block text-xs font-medium mb-1">Service Tier</label>
          <div className="space-y-1">
            <div className="flex items-center">
              <input id="tier1" name="tier" type="checkbox" checked readOnly className="h-3 w-3 text-accent focus:ring-accent cursor-not-allowed opacity-75" />
              <label htmlFor="tier1" className="ml-1.5 text-xs">Tier 1</label>
            </div>
            <div className="flex items-center">
              <input id="tier2" name="tier" type="checkbox" checked readOnly className="h-3 w-3 text-accent focus:ring-accent cursor-not-allowed opacity-75" />
              <label htmlFor="tier2" className="ml-1.5 text-xs">Tier 2</label>
            </div>
            <div className="flex items-center">
              <input id="tier3" name="tier" type="checkbox" checked readOnly className="h-3 w-3 text-accent focus:ring-accent cursor-not-allowed opacity-75" />
              <label htmlFor="tier3" className="ml-1.5 text-xs">Tier 3</label>
            </div>
          </div>
        </div>
        
        {/* Account Status */}
        <div className="mb-3">
          <label className="block text-xs font-medium mb-1">Account Status</label>
          <div className="grid grid-cols-2 gap-x-2 gap-y-1">
            <div className="flex items-center">
              <input id="status-complete" name="status" type="checkbox" checked readOnly className="h-3 w-3 text-accent focus:ring-accent cursor-not-allowed opacity-75" />
              <label htmlFor="status-complete" className="ml-1.5 text-xs">Complete</label>
            </div>
            <div className="flex items-center">
              <input id="status-in-progress" name="status" type="checkbox" checked readOnly className="h-3 w-3 text-accent focus:ring-accent cursor-not-allowed opacity-75" />
              <label htmlFor="status-in-progress" className="ml-1.5 text-xs">In Progress</label>
            </div>
            <div className="flex items-center">
              <input id="status-hold" name="status" type="checkbox" checked readOnly className="h-3 w-3 text-accent focus:ring-accent cursor-not-allowed opacity-75" />
              <label htmlFor="status-hold" className="ml-1.5 text-xs">On Hold</label>
            </div>
            <div className="flex items-center">
              <input id="status-pending" name="status" type="checkbox" checked readOnly className="h-3 w-3 text-accent focus:ring-accent cursor-not-allowed opacity-75" />
              <label htmlFor="status-pending" className="ml-1.5 text-xs">Pending</label>
            </div>
            <div className="flex items-center">
              <input id="status-new" name="status" type="checkbox" checked readOnly className="h-3 w-3 text-accent focus:ring-accent cursor-not-allowed opacity-75" />
              <label htmlFor="status-new" className="ml-1.5 text-xs">New</label>
            </div>
            <div className="flex items-center">
              <input id="status-suspended" name="status" type="checkbox" checked readOnly className="h-3 w-3 text-accent focus:ring-accent cursor-not-allowed opacity-75" />
              <label htmlFor="status-suspended" className="ml-1.5 text-xs">Suspended</label>
            </div>
          </div>
        </div>
        
        {/* Issue Type */}
        <div className="mb-3">
          <label className="block text-xs font-medium mb-1">Issue Type</label>
          <div className="space-y-1">
            <div className="flex items-center">
              <input id="technical" name="issue" type="checkbox" checked readOnly className="h-3 w-3 text-accent focus:ring-accent cursor-not-allowed opacity-75" />
              <label htmlFor="technical" className="ml-1.5 text-xs">Technical</label>
            </div>
            <div className="flex items-center">
              <input id="customer" name="issue" type="checkbox" checked readOnly className="h-3 w-3 text-accent focus:ring-accent cursor-not-allowed opacity-75" />
              <label htmlFor="customer" className="ml-1.5 text-xs">Customer Service</label>
            </div>
          </div>
        </div>
        
        {/* Reset button */}
        <div className="tooltip w-full">
          <button className="w-full py-1 px-2 bg-muted hover:bg-muted/80 dark:bg-muted dark:hover:bg-secondary rounded-md transition-colors cursor-not-allowed opacity-75 flex items-center justify-center gap-1.5 text-xs">
            <Filter className="h-3 w-3" />
            <span>Reset Filters</span>
          </button>
          <div className="tooltip-content">Reset disabled in demonstration mode</div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
