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
  technical?: number;
  customerService?: number;
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
  },
  {
    title: "In Progress",
    value: 629,
    percentageChange: 7.2,
    isPositive: true,
    icon: "activity",
    comparePeriod: "from last month"
  },
  {
    title: "New Today",
    value: 43,
    percentageChange: 10.5,
    isPositive: true,
    icon: "plus-circle",
    comparePeriod: "vs yesterday"
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
  { name: "May 1", active: 1800, onHold: 280, issues: 100 },
  { name: "May 2", active: 1820, onHold: 275, issues: 98 },
  { name: "May 3", active: 1850, onHold: 270, issues: 95 },
  { name: "May 4", active: 1870, onHold: 272, issues: 97 },
  { name: "May 5", active: 1900, onHold: 275, issues: 99 },
  { name: "May 6", active: 1920, onHold: 270, issues: 96 },
  { name: "May 7", active: 1940, onHold: 268, issues: 94 },
  { name: "May 8", active: 1960, onHold: 265, issues: 93 },
  { name: "May 9", active: 1980, onHold: 270, issues: 95 },
  { name: "May 10", active: 2000, onHold: 275, issues: 98 },
  { name: "May 11", active: 2020, onHold: 272, issues: 96 },
  { name: "May 12", active: 2040, onHold: 268, issues: 94 },
  { name: "May 13", active: 2060, onHold: 265, issues: 92 },
  { name: "May 14", active: 2050, onHold: 270, issues: 95 }
];

// Service tiers
export const serviceTiers: ServiceTier[] = [
  { name: "Tier 1", value: 1124, technical: 721, customerService: 403 },
  { name: "Tier 2", value: 782, technical: 489, customerService: 293 },
  { name: "Tier 3", value: 552, technical: 302, customerService: 250 }
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
