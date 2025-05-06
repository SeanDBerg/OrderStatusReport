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

export interface StatusTrendData {
  name: string;
  active: number;
  onHold: number;
  issues: number;
}

export interface SupportTrendData {
  name: string;
  technicalSupport: number;
  customerService: number;
  total: number;
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
    title: "Total",
    value: 2458,
    percentageChange: 7.2,
    isPositive: true,
    icon: "users",
    comparePeriod: "last month"
  },
  {
    title: "Active",
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
    title: "Issues",
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
  { name: "Pending", value: 246, percentage: 10, color: "bg-destructive" },
  { name: "Suspended", value: 123, percentage: 5, color: "bg-muted-foreground" },
  { name: "New", value: 74, percentage: 3, color: "bg-blue-500" },
  { name: "Cancelled", value: 49, percentage: 2, color: "bg-gray-500" }
];

// Status trend data (Last 30 days)
export const statusTrendData: StatusTrendData[] = [
  { name: "May 1", active: 1900, onHold: 290, issues: 150 },
  { name: "May 2", active: 1920, onHold: 285, issues: 145 },
  { name: "May 3", active: 1915, onHold: 295, issues: 158 },
  { name: "May 4", active: 1940, onHold: 280, issues: 162 },
  { name: "May 5", active: 1935, onHold: 288, issues: 147 },
  { name: "May 6", active: 1960, onHold: 275, issues: 154 },
  { name: "May 7", active: 1955, onHold: 282, issues: 149 },
  { name: "May 8", active: 1980, onHold: 270, issues: 156 },
  { name: "May 9", active: 1975, onHold: 278, issues: 151 },
  { name: "May 10", active: 2000, onHold: 265, issues: 158 },
  { name: "May 11", active: 1995, onHold: 272, issues: 153 },
  { name: "May 12", active: 2020, onHold: 260, issues: 160 },
  { name: "May 13", active: 2015, onHold: 268, issues: 155 },
  { name: "May 14", active: 2040, onHold: 255, issues: 162 },
  { name: "May 15", active: 2035, onHold: 262, issues: 157 },
  { name: "May 16", active: 2060, onHold: 250, issues: 164 },
  { name: "May 17", active: 2055, onHold: 258, issues: 159 },
  { name: "May 18", active: 2080, onHold: 245, issues: 166 },
  { name: "May 19", active: 2075, onHold: 252, issues: 161 },
  { name: "May 20", active: 2100, onHold: 240, issues: 168 },
  { name: "May 21", active: 2095, onHold: 248, issues: 163 },
  { name: "May 22", active: 2120, onHold: 235, issues: 170 },
  { name: "May 23", active: 2115, onHold: 242, issues: 165 },
  { name: "May 24", active: 2140, onHold: 230, issues: 172 },
  { name: "May 25", active: 2135, onHold: 238, issues: 167 },
  { name: "May 26", active: 2160, onHold: 225, issues: 174 },
  { name: "May 27", active: 2155, onHold: 232, issues: 169 },
  { name: "May 28", active: 2180, onHold: 220, issues: 176 },
  { name: "May 29", active: 2175, onHold: 228, issues: 171 },
  { name: "May 30", active: 2200, onHold: 215, issues: 178 }
];

// Support tickets trend data (Last 30 days)
export const supportTrendData: SupportTrendData[] = [
  { name: "May 1", technicalSupport: 150, customerService: 140, total: 290 },
  { name: "May 2", technicalSupport: 155, customerService: 145, total: 300 },
  { name: "May 3", technicalSupport: 148, customerService: 152, total: 300 },
  { name: "May 4", technicalSupport: 162, customerService: 148, total: 310 },
  { name: "May 5", technicalSupport: 157, customerService: 153, total: 310 },
  { name: "May 6", technicalSupport: 164, customerService: 146, total: 310 },
  { name: "May 7", technicalSupport: 159, customerService: 151, total: 310 },
  { name: "May 8", technicalSupport: 166, customerService: 144, total: 310 },
  { name: "May 9", technicalSupport: 161, customerService: 149, total: 310 },
  { name: "May 10", technicalSupport: 168, customerService: 142, total: 310 },
  { name: "May 11", technicalSupport: 163, customerService: 147, total: 310 },
  { name: "May 12", technicalSupport: 170, customerService: 140, total: 310 },
  { name: "May 13", technicalSupport: 165, customerService: 145, total: 310 },
  { name: "May 14", technicalSupport: 172, customerService: 138, total: 310 },
  { name: "May 15", technicalSupport: 167, customerService: 143, total: 310 },
  { name: "May 16", technicalSupport: 174, customerService: 136, total: 310 },
  { name: "May 17", technicalSupport: 169, customerService: 141, total: 310 },
  { name: "May 18", technicalSupport: 176, customerService: 134, total: 310 },
  { name: "May 19", technicalSupport: 171, customerService: 139, total: 310 },
  { name: "May 20", technicalSupport: 178, customerService: 132, total: 310 },
  { name: "May 21", technicalSupport: 173, customerService: 137, total: 310 },
  { name: "May 22", technicalSupport: 180, customerService: 130, total: 310 },
  { name: "May 23", technicalSupport: 175, customerService: 135, total: 310 },
  { name: "May 24", technicalSupport: 182, customerService: 128, total: 310 },
  { name: "May 25", technicalSupport: 177, customerService: 133, total: 310 },
  { name: "May 26", technicalSupport: 184, customerService: 126, total: 310 },
  { name: "May 27", technicalSupport: 179, customerService: 131, total: 310 },
  { name: "May 28", technicalSupport: 186, customerService: 124, total: 310 },
  { name: "May 29", technicalSupport: 181, customerService: 129, total: 310 },
  { name: "May 30", technicalSupport: 188, customerService: 122, total: 310 }
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