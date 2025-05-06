import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { serviceTiers, issueTypes } from "@/lib/mock-data";
import { formatNumber } from "@/lib/utils";

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border border-border p-1.5 rounded-md shadow-sm text-xs">
        <p className="font-medium">{label}</p>
        <p>
          <span className="font-medium">{formatNumber(payload[0].value)}</span> accounts
        </p>
      </div>
    );
  }

  return null;
};

const ServiceTiers = () => {
  return (
    <Card className="shadow-sm">
      <CardContent className="p-3">
        <div className="mb-2">
          <h2 className="font-semibold text-sm">Service Tier Distribution</h2>
          <p className="text-xs text-muted-foreground">Accounts by service level</p>
        </div>
        <div className="h-[100px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={serviceTiers}
              margin={{
                top: 15,
                right: 10,
                left: 0,
                bottom: 5,
              }}
              barGap={2}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" strokeOpacity={0.5} />
              <XAxis 
                dataKey="name" 
                stroke="var(--muted-foreground)" 
                tick={{ fontSize: 9 }}
                tickLine={{ stroke: 'var(--border)' }}
                axisLine={{ stroke: 'var(--border)' }}
              />
              <YAxis 
                stroke="var(--muted-foreground)" 
                tick={{ fontSize: 9 }}
                tickLine={{ stroke: 'var(--border)' }}
                axisLine={{ stroke: 'var(--border)' }}
                width={15}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar 
                dataKey="value" 
                fill="hsl(var(--chart-1))" 
                radius={[2, 2, 0, 0]} 
                barSize={20}
                label={{ 
                  position: 'top', 
                  fill: 'var(--foreground)',
                  fontSize: 9,
                  offset: 5
                }}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        {/* Issue breakdown */}
        <div className="mt-3">
          <h3 className="font-medium text-xs mb-1.5">Issue Type Breakdown</h3>
          <div className="grid grid-cols-2 gap-2">
            {issueTypes.map((issue, index) => (
              <div key={index} className="bg-muted p-2 rounded text-xs">
                <h4 className="font-medium text-muted-foreground">{issue.name}</h4>
                <div className="font-semibold">{issue.count}</div>
                <div className="mt-1 h-1.5 bg-muted-foreground/20 rounded-full overflow-hidden">
                  <div className="h-full bg-accent" style={{ width: `${issue.percentage}%` }}></div>
                </div>
                <div className="text-xs text-muted-foreground mt-0.5">{issue.percentage}%</div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceTiers;
