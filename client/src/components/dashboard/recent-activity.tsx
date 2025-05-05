import { Card, CardContent } from "@/components/ui/card";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { recentActivity } from "@/lib/mock-data";
import { formatDate, getInitials, getStatusColor } from "@/lib/utils";

const RecentActivity = () => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-semibold text-lg">Recent Account Activity</h2>
          <div className="tooltip">
            <button className="text-sm font-medium text-accent hover:underline focus:outline-none">
              View All
            </button>
            <div className="tooltip-content">Feature disabled in demonstration mode</div>
          </div>
        </div>
        
        {/* Activity table */}
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Account</TableHead>
                <TableHead>Service Tier</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Stage</TableHead>
                <TableHead>Last Updated</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentActivity.map((activity, index) => (
                <TableRow key={index} className="hover:bg-muted/50">
                  <TableCell>
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-8 w-8 bg-accent text-white rounded-full flex items-center justify-center">
                        <span className="font-medium text-sm">{getInitials(activity.companyName)}</span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium">{activity.companyName}</div>
                        <div className="text-sm text-muted-foreground">ID: {activity.id}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{activity.serviceTier}</span>
                  </TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(activity.status)}`}>
                      {activity.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{activity.stage}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm text-muted-foreground">{formatDate(activity.lastUpdated)}</span>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="tooltip">
                      <button className="text-accent hover:text-accent/80 focus:outline-none">View</button>
                      <div className="tooltip-content">Feature disabled in demonstration mode</div>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        
        {/* Pagination */}
        <div className="flex items-center justify-between border-t border-border px-4 py-3 sm:px-6 mt-4">
          <div className="flex items-center">
            <p className="text-sm text-muted-foreground">
              Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of <span className="font-medium">42</span> results
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="tooltip">
              <button className="relative inline-flex items-center px-2 py-2 rounded-md border border-input bg-card text-sm font-medium text-muted-foreground hover:bg-muted cursor-not-allowed opacity-75">
                <span className="sr-only">Previous</span>
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="tooltip-content">Feature disabled in demonstration mode</div>
            </div>
            
            <div className="tooltip">
              <button className="relative inline-flex items-center px-2 py-2 rounded-md border border-input bg-card text-sm font-medium text-muted-foreground hover:bg-muted cursor-not-allowed opacity-75">
                <span className="sr-only">Next</span>
                <ChevronRight className="h-5 w-5" />
              </button>
              <div className="tooltip-content">Feature disabled in demonstration mode</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentActivity;
