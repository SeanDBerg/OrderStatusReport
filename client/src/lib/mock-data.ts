export interface StatusData {
  name: string;
  value: number;
  percentage: number;
  color: string;
}

export interface MetricCard {
  title: string;
  value: number;
  percentageChange: number;
  isPositive: boolean;
  icon: string;
  comparePeriod: string;
}

export interface TrendData {
  name: string;
  active: number;
  onHold: number;
  issues: number;
}

export interface ServiceTier {
  name: string;
  value: number;
}

export interface OperationalStage {
  name: string;
  count: number;
  percentage: number;
}

export interface IssueType {
  name: string;
  count: number;
  percentage: number;
}

export interface RecentActivity {
  id: string;
  companyName: string;
  serviceTier: string;
  status: string;
  stage: string;
  lastUpdated: Date;
}

// Key metrics
export const metricCards: MetricCard[] = [
  {
    title: "Total Accounts",
    value: 2458,
    percentageChange: 7.2,
    isPositive: true,
    icon: "users",
    comparePeriod: "from last month"
  },
  {
    title: "Active Accounts",
    value: 1879,
    percentageChange: 4.5,
    isPositive: true,
    icon: "check-circle",
    comparePeriod: "from last month"
  },
  {
    title: "On Hold",
    value: 342,
    percentageChange: 8.3,
    isPositive: false,
    icon: "pause-circle",
    comparePeriod: "from last month"
  },
  {
    title: "Issues Reported",
    value: 164,
    percentageChange: 2.1,
    isPositive: false,
    icon: "alert-triangle",
    comparePeriod: "from last month"
  }
];

// Status distribution
export const statusDistribution: StatusData[] = [
  { name: "Complete", value: 983, percentage: 40, color: "bg-success" },
  { name: "In Progress", value: 614, percentage: 25, color: "bg-accent" },
  { name: "On Hold", value: 369, percentage: 15, color: "bg-warning" },
  { name: "Other", value: 492, percentage: 20, color: "bg-destructive" }
];

// Trend data
export const trendData: TrendData[] = [
  { name: "Apr 1", active: 1800, onHold: 280, issues: 100 },
  { name: "Apr 7", active: 1850, onHold: 270, issues: 95 },
  { name: "Apr 14", active: 1905, onHold: 275, issues: 105 },
  { name: "Apr 21", active: 1930, onHold: 260, issues: 100 },
  { name: "Apr 28", active: 1980, onHold: 265, issues: 95 },
  { name: "May 5", active: 2000, onHold: 280, issues: 90 },
  { name: "May 12", active: 1985, onHold: 275, issues: 95 },
  { name: "May 19", active: 2050, onHold: 270, issues: 100 }
];

// Service tiers
export const serviceTiers: ServiceTier[] = [
  { name: "Tier 1", value: 1124 },
  { name: "Tier 2", value: 782 },
  { name: "Tier 3", value: 552 }
];

// Issue types
export const issueTypes: IssueType[] = [
  { name: "Technical", count: 104, percentage: 63 },
  { name: "Customer Service", count: 60, percentage: 37 }
];

// Operational stages
export const operationalStages: OperationalStage[] = [
  { name: "Satisfied and Processing", count: 824, percentage: 33 },
  { name: "Pending Installation Agreement", count: 652, percentage: 27 },
  { name: "Installation Ready", count: 491, percentage: 20 },
  { name: "Deployment", count: 196, percentage: 8 },
  { name: "Quality Assurance", count: 147, percentage: 6 },
  { name: "Programming", count: 98, percentage: 4 },
  { name: "Order Administration", count: 25, percentage: 1 },
  { name: "Underwriting", count: 25, percentage: 1 }
];

// Recent activity
export const recentActivity: RecentActivity[] = [
  {
    id: "ACM-7291",
    companyName: "Acme Corporation",
    serviceTier: "Tier 1",
    status: "Complete",
    stage: "Satisfied and Processing",
    lastUpdated: new Date(2023, 4, 21) // May 21, 2023
  },
  {
    id: "GPI-3845",
    companyName: "Global Partners Inc.",
    serviceTier: "Tier 2",
    status: "In Progress",
    stage: "Installation Ready",
    lastUpdated: new Date(2023, 4, 20) // May 20, 2023
  },
  {
    id: "SUN-1572",
    companyName: "Sunrise Solutions",
    serviceTier: "Tier 1",
    status: "On Hold",
    stage: "Pending Installation Agreement",
    lastUpdated: new Date(2023, 4, 19) // May 19, 2023
  },
  {
    id: "MET-9268",
    companyName: "Metro Tech",
    serviceTier: "Tier 3",
    status: "New",
    stage: "Underwriting",
    lastUpdated: new Date(2023, 4, 18) // May 18, 2023
  },
  {
    id: "EAG-4037",
    companyName: "Eagle Logistics",
    serviceTier: "Tier 2",
    status: "Suspended",
    stage: "Quality Assurance",
    lastUpdated: new Date(2023, 4, 17) // May 17, 2023
  }
];
