import { useState } from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import Footer from "./footer";
import StatusTrend from "./status-trend";
import StatusDistribution from "./status-distribution";
import ServiceTiers from "./service-tiers";
import OperationalStages from "./operational-stages";
import RecentActivity from "./recent-activity";
import MetricCard from "./metric-card";
import { metricCards } from "@/lib/mock-data";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header toggleSidebar={toggleSidebar} />

      <div className="flex-grow flex h-full">
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

        <main className="flex-grow p-6 overflow-y-auto bg-background transition-colors duration-300">
          {/* Mobile menu button */}
          <div className="md:hidden mb-4">
            <button 
              onClick={toggleSidebar}
              className="text-foreground p-2 focus:outline-none"
              aria-label="Toggle sidebar menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Dashboard title */}
          <div className="flex flex-wrap justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Account Analytics Dashboard</h1>
            <div className="flex space-x-2">
              <div className="tooltip">
                <button className="px-3 py-1.5 bg-accent text-accent-foreground rounded hover:bg-accent/90 text-sm font-medium focus:outline-none">
                  <span className="hidden sm:inline-block">Generate</span> Report
                </button>
                <div className="tooltip-content">Report generation disabled in demonstration mode</div>
              </div>
              <div className="tooltip">
                <button className="px-3 py-1.5 bg-card border border-border rounded text-foreground text-sm font-medium focus:outline-none">
                  <span className="hidden sm:inline-block">Share</span> Dashboard
                </button>
                <div className="tooltip-content">Sharing disabled in demonstration mode</div>
              </div>
            </div>
          </div>

          {/* Key metrics overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {metricCards.map((card, index) => (
              <MetricCard key={index} {...card} />
            ))}
          </div>

          {/* Account Status Trend & Distribution */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="lg:col-span-2">
              <StatusTrend />
            </div>
            <div>
              <StatusDistribution />
            </div>
          </div>

          {/* Service Tier & Operational Stages */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div>
              <ServiceTiers />
            </div>
            <div className="lg:col-span-2">
              <OperationalStages />
            </div>
          </div>

          {/* Recent Account Activity */}
          <RecentActivity />
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
