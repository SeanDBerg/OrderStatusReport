import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { serviceTiers, issueTypes } from "@/lib/mock-data";
import { formatNumber } from "@/lib/utils";

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border border-border p-2 rounded-md shadow-sm">
        <p className="font-medium text-sm">{label}</p>
        <p className="text-sm">
          <span className="font-medium">{formatNumber(payload[0].value)}</span> accounts
        </p>
      </div>
    );
  }

  return null;
};

const ServiceTiers = () => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="mb-6">
          <h2 className="font-semibold text-lg">Service Tier Distribution</h2>
          <p className="text-sm text-muted-foreground">Accounts by service level</p>
        </div>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={serviceTiers}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="name" stroke="var(--muted-foreground)" />
              <YAxis stroke="var(--muted-foreground)" />
              <Tooltip content={<CustomTooltip />} />
              <Bar 
                dataKey="value" 
                fill="hsl(var(--chart-1))" 
                radius={[4, 4, 0, 0]} 
                barSize={40}
                label={{ 
                  position: 'top', 
                  fill: 'var(--foreground)',
                  fontSize: 12
                }}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        {/* Issue breakdown */}
        <div className="mt-6">
          <h3 className="font-medium text-base mb-3">Issue Type Breakdown</h3>
          <div className="grid grid-cols-2 gap-4">
            {issueTypes.map((issue, index) => (
              <div key={index} className="bg-muted p-4 rounded">
                <h4 className="text-sm font-medium text-muted-foreground mb-1">{issue.name}</h4>
                <div className="text-lg font-semibold">{issue.count}</div>
                <div className="mt-1 h-2 bg-muted-foreground/20 rounded-full overflow-hidden">
                  <div className="h-full bg-accent" style={{ width: `${issue.percentage}%` }}></div>
                </div>
                <div className="text-xs text-muted-foreground mt-1">{issue.percentage}% of total</div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceTiers;
