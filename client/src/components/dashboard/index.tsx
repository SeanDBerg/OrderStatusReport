import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Header from "./header";
import Sidebar from "./sidebar";
import Footer from "./footer";
import StatusTrend from "./status-trend";
import StatusDistribution from "./status-distribution";
import SupportTicketsTrend from "./support-tickets-trend";
import ServiceTiers from "./service-tiers";
import OperationalStages from "./operational-stages";
import RecentActivity from "./recent-activity";
import MetricCard from "./metric-card";
import { metricCards } from "@/lib/mock-data";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { toast } = useToast();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const showDemoMessage = (feature: string) => {
    toast({
      title: "Demo Mode",
      description: `${feature} is disabled in demonstration mode`,
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header toggleSidebar={toggleSidebar} />

      <div className="flex-grow flex h-full">
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

        <main className="flex-grow p-3 overflow-y-auto bg-background transition-colors duration-300">
          {/* Mobile menu button */}
          <div className="md:hidden mb-2">
            <button 
              onClick={toggleSidebar}
              className="text-foreground p-1 focus:outline-none"
              aria-label="Toggle sidebar menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Dashboard title */}
          <div className="flex flex-wrap justify-between items-center mb-1">
            <h1 className="text-lg font-bold">Account Analytics Dashboard</h1>
            <div className="flex space-x-2">
              <div className="tooltip">
                <button 
                  onClick={() => showDemoMessage('Generate Report')}
                  className="px-2 py-1 bg-accent text-accent-foreground rounded hover:bg-accent/90 text-xs font-medium focus:outline-none"
                >
                  <span className="hidden sm:inline-block">Generate</span> Report
                </button>
                <div className="tooltip-content">This function is disabled in demo mode</div>
              </div>
              <div className="tooltip">
                <button 
                  onClick={() => showDemoMessage('Share Dashboard')}
                  className="px-2 py-1 bg-card border border-border rounded text-foreground text-xs font-medium focus:outline-none"
                >
                  <span className="hidden sm:inline-block">Share</span> Dashboard
                </button>
                <div className="tooltip-content">This function is disabled in demo mode</div>
              </div>
            </div>
          </div>

          {/* Key metrics overview */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-1 mb-1">
            {metricCards.map((card, index) => (
              <MetricCard key={index} {...card} />
            ))}
          </div>

          {/* Top row: Operational Stages */}
          <div className="col-span-12">
            <OperationalStages />
          </div>

          <div className="grid grid-cols-12 gap-1">
            {/* First row: Status Trend & Distribution side by side */}
            <div className="col-span-12 grid grid-cols-2 gap-1">
              <div className="col-span-1">
                <StatusTrend />
              </div>
              <div className="col-span-1">
                <StatusDistribution />
              </div>
            </div>
            
            {/* Second row: Support Tickets Trend & Service Tier Distribution */}
            <div className="col-span-12 grid grid-cols-2 gap-1">
              <div className="col-span-1">
                <SupportTicketsTrend />
              </div>
              <div className="col-span-1">
                <ServiceTiers />
              </div>
            </div>
            

            
            {/* Third row: Recent Account Activity */}
            <div className="col-span-12">
              <RecentActivity />
            </div>
          </div>
        </main>
      </div>

      <Footer />

      {/* Mobile sidebar overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default Dashboard;
