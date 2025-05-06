import { Card, CardContent } from "@/components/ui/card";
import { ArrowUp, ArrowDown } from "lucide-react";
import { operationalStages } from "@/lib/mock-data";
import { formatNumber } from "@/lib/utils";

const OperationalStages = () => {
  return (
    <Card className="shadow-sm">
      <CardContent className="p-3">
        <div className="flex justify-between items-center mb-2">
          <div>
            <h2 className="font-semibold text-sm">Operational Stages</h2>
            <p className="text-xs text-muted-foreground">Current account distribution by stage</p>
          </div>
          <div className="tooltip">
            <select className="text-xs bg-muted border border-input rounded py-0.0 px-1.5 focus:outline-none focus:ring-1 focus:ring-accent cursor-not-allowed opacity-75">
              <option>Last 30 Days</option>
            </select>
            <div className="tooltip-content">Filter disabled in demonstration mode</div>
          </div>
        </div>
        
        {/* Progress bars for stages - 2-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1.5">
          {operationalStages.map((stage, index) => (
            <div key={index}>
              <div className="flex justify-between mb-0.5">
                <span className="text-xs font-medium">{stage.name}</span>
                <span className="text-xs font-medium">{formatNumber(stage.count)}</span>
              </div>
              <div className="h-1.5 bg-muted rounded-full">
                <div 
                  className={`h-1.5 ${index === 0 ? 'bg-success' : 'bg-accent'} rounded-full`}
                  style={{ width: `${stage.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Trend indicators */}
        <div className="grid grid-cols-2 gap-3 mt-3">
          <div className="p-2 bg-muted rounded">
            <h3 className="text-xs font-medium text-muted-foreground mb-1">Avg Processing Time</h3>
            <div className="text-sm font-semibold">18.4 days</div>
            <div className="flex items-center mt-0.5">
              <span className="text-success text-xs font-medium flex items-center">
                <ArrowUp className="h-3 w-3 mr-0.5" />
                2.3 days
              </span>
              <span className="text-muted-foreground text-xs ml-1">faster</span>
            </div>
          </div>
          
          <div className="p-2 bg-muted rounded">
            <h3 className="text-xs font-medium text-muted-foreground mb-1">Stage Transition Rate</h3>
            <div className="text-sm font-semibold">9.2%</div>
            <div className="flex items-center mt-0.5">
              <span className="text-success text-xs font-medium flex items-center">
                <ArrowUp className="h-3 w-3 mr-0.5" />
                1.4%
              </span>
              <span className="text-muted-foreground text-xs ml-1">vs last month</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default OperationalStages;
