import { Card, CardContent } from "@/components/ui/card";
import { ArrowUp, ArrowDown } from "lucide-react";
import { operationalStages } from "@/lib/mock-data";
import { formatNumber } from "@/lib/utils";

const OperationalStages = () => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="mb-6">
          <h2 className="font-semibold text-lg">Operational Stages</h2>
          <p className="text-sm text-muted-foreground">Current account distribution by stage</p>
        </div>
        
        {/* Progress bars for stages */}
        <div className="space-y-4">
          {operationalStages.map((stage, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">{stage.name}</span>
                <span className="text-sm font-medium">{formatNumber(stage.count)}</span>
              </div>
              <div className="h-2.5 bg-muted rounded-full">
                <div 
                  className={`h-2.5 ${index === 0 ? 'bg-success' : 'bg-accent'} rounded-full`}
                  style={{ width: `${stage.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Trend indicators */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="p-4 bg-muted rounded">
            <h3 className="text-sm font-medium text-muted-foreground mb-2">Average Processing Time</h3>
            <div className="text-lg font-semibold">18.4 days</div>
            <div className="flex items-center mt-1">
              <span className="text-success text-xs font-medium flex items-center">
                <ArrowUp className="h-4 w-4 mr-1" />
                2.3 days
              </span>
              <span className="text-muted-foreground text-xs ml-1">faster than last month</span>
            </div>
          </div>
          
          <div className="p-4 bg-muted rounded">
            <h3 className="text-sm font-medium text-muted-foreground mb-2">Stage Transition Rate</h3>
            <div className="text-lg font-semibold">9.2%</div>
            <div className="flex items-center mt-1">
              <span className="text-success text-xs font-medium flex items-center">
                <ArrowUp className="h-4 w-4 mr-1" />
                1.4%
              </span>
              <span className="text-muted-foreground text-xs ml-1">from last month</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default OperationalStages;
