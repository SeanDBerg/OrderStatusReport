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
    <Card className="shadow-sm">
      <CardContent className="p-3">
        <div className="flex justify-between items-center mb-2">
          <h2 className="font-semibold text-sm">Recent Account Activity</h2>
          <div className="tooltip">
            <button className="text-xs font-medium text-accent hover:underline focus:outline-none">
              View All
            </button>
            <div className="tooltip-content">Feature disabled in demonstration mode</div>
          </div>
        </div>
        
        {/* Activity table */}
        <div className="overflow-x-auto -mx-1.5">
          <Table className="text-xs">
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className="h-7 py-1 font-medium">Account</TableHead>
                <TableHead className="h-7 py-1 font-medium">Tier</TableHead>
                <TableHead className="h-7 py-1 font-medium">Status</TableHead>
                <TableHead className="h-7 py-1 font-medium">Stage</TableHead>
                <TableHead className="h-7 py-1 font-medium">Updated</TableHead>
                <TableHead className="h-7 py-1 font-medium text-right w-12">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentActivity.map((activity, index) => (
                <TableRow key={index} className="hover:bg-muted/50">
                  <TableCell className="py-1.5">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-5 w-5 bg-accent text-white rounded-full flex items-center justify-center">
                        <span className="font-medium text-xs">{getInitials(activity.companyName)}</span>
                      </div>
                      <div className="ml-2 leading-tight">
                        <div className="font-medium">{activity.companyName}</div>
                        <div className="text-xs text-muted-foreground">ID: {activity.id}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="py-1.5">
                    {activity.serviceTier}
                  </TableCell>
                  <TableCell className="py-1.5">
                    <span className={`px-1.5 py-0.5 text-xs font-medium rounded-full ${getStatusColor(activity.status)}`}>
                      {activity.status}
                    </span>
                  </TableCell>
                  <TableCell className="py-1.5">
                    {activity.stage}
                  </TableCell>
                  <TableCell className="py-1.5 text-muted-foreground">
                    {formatDate(activity.lastUpdated)}
                  </TableCell>
                  <TableCell className="py-1.5 text-right">
                    <div className="tooltip">
                      <button className="text-accent hover:text-accent/80 focus:outline-none text-xs">View</button>
                      <div className="tooltip-content">Feature disabled in demonstration mode</div>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        
        {/* Pagination - simplified */}
        <div className="flex items-center justify-between border-t border-border px-2 py-1.5 mt-2 text-xs">
          <p className="text-muted-foreground">
            <span className="font-medium">1-5</span> of <span className="font-medium">42</span>
          </p>
          <div className="flex items-center space-x-1">
            <div className="tooltip">
              <button className="inline-flex items-center p-1 rounded border border-input bg-card text-muted-foreground hover:bg-muted cursor-not-allowed opacity-75">
                <ChevronLeft className="h-3 w-3" />
              </button>
              <div className="tooltip-content">Feature disabled in demonstration mode</div>
            </div>
            
            <div className="tooltip">
              <button className="inline-flex items-center p-1 rounded border border-input bg-card text-muted-foreground hover:bg-muted cursor-not-allowed opacity-75">
                <ChevronRight className="h-3 w-3" />
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
