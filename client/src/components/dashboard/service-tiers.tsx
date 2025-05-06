import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { serviceTiers } from "@/lib/mock-data";
import { formatNumber } from "@/lib/utils";

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border border-border p-1.5 rounded-md shadow-sm text-xs">
        <p className="font-medium">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} style={{ color: entry.color }}>
            {entry.name}: {formatNumber(entry.value)}
          </p>
        ))}
      </div>
    );
  }

  return null;
};

const ServiceTiers = () => {
  // Transform data for the stacked bar chart
  const transformedData = serviceTiers.map(tier => ({
    name: tier.name,
    Technical: tier.technical,
    "Customer Service": tier.customerService
  }));

  return (
    <Card className="shadow-sm">
      <CardContent className="p-3">
        <div className="mb-2">
          <h2 className="font-semibold text-sm">Service Tier Distribution</h2>
          <p className="text-xs text-muted-foreground">Accounts by service level & issue type</p>
        </div>
        <div className="h-[120px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={transformedData}
              margin={{
                top: 10,
                right: 0,
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
              <Legend iconSize={8} wrapperStyle={{ fontSize: '8px' }} verticalAlign="top" height={20} />
              <Bar 
                dataKey="Technical" 
                stackId="a"
                fill="hsl(var(--chart-1))" 
                radius={[0, 0, 0, 0]} 
                barSize={15}
              />
              <Bar 
                dataKey="Customer Service" 
                stackId="a"
                fill="hsl(var(--chart-4))" 
                radius={[2, 2, 0, 0]} 
                barSize={15}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        {/* Tier details */}
        <div className="mt-2">
          <div className="grid grid-cols-3 gap-1 text-xs">
            {serviceTiers.map((tier, index) => (
              <div key={index} className="bg-muted p-1.5 rounded">
                <h4 className="font-medium text-center">{tier.name}</h4>
                <div className="flex justify-between text-[9px] mt-1">
                  <div>
                    <span className="font-medium block">Technical</span>
                    <span className="text-accent">{formatNumber(tier.technical || 0)}</span>
                  </div>
                  <div>
                    <span className="font-medium block">Customer</span>
                    <span className="text-accent">{formatNumber(tier.customerService || 0)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceTiers;
