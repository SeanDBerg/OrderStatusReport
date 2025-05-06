import { Card, CardContent } from "@/components/ui/card";
import { ArrowUp, ArrowDown } from "lucide-react";
import { operationalStages } from "@/lib/mock-data";
import { formatNumber } from "@/lib/utils";

const OperationalStages = () => {
  return (
    <Card className="shadow-sm">
      <CardContent className="p-1">
        
        {/* Trend indicators */}
        <div className="grid grid-cols-2 gap-1 mt-0">
          <div className="p-1 bg-secondary/50 rounded">
            <h3 className="text-xs font-medium text-secondary-foreground mb-0">Processing Time</h3>
            <div className="text-sm font-semibold text-foreground">18.4 days</div>
            <div className="flex items-center mt-0.5">
              <span className="text-accent text-xs font-medium flex items-center">
                <ArrowUp className="h-3 w-3 mr-0.5" />
                2.3 days
              </span>
              <span className="text-muted-foreground text-xs ml-1">faster</span>
            </div>
          </div>
          
          <div className="p-2 bg-muted rounded">
            <h3 className="text-xs font-medium text-muted-foreground mb-0">Transition Rate</h3>
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

        {/* Progress bars for stages - 2-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-0.5">
          {operationalStages.map((stage, index) => (
            <div key={index}>
              <div className="flex justify-between mb-0.0">
                <span className="text-xs font-medium">{stage.name}</span>
                <span className="text-xs font-medium">{formatNumber(stage.count)}</span>
              </div>
              <div className="h-0.5 bg-secondary/30 rounded-full">
                <div 
                  className={`h-1 ${index === 0 ? 'bg-accent' : 'bg-primary'} rounded-full transition-all`}
                  style={{ width: `${stage.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
      </CardContent>
    </Card>
  );
};

export default OperationalStages;
