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
  const transformedData = [
    { name: 'T1', technical: serviceTiers[0].technical, customer: serviceTiers[0].customerService },
    { name: 'T2', technical: serviceTiers[1].technical, customer: serviceTiers[1].customerService },
    { name: 'T3', technical: serviceTiers[2].technical, customer: serviceTiers[2].customerService }
  ];

  return (
    <Card className="shadow-sm">
      <CardContent className="p-3">
        <div className="flex justify-between items-center mb-2">
          <div>
            <h2 className="font-semibold text-sm">Service Tier Distribution</h2>
            <p className="text-xs text-muted-foreground">Accounts by service level & issue type</p>
          </div>
          <div className="tooltip">
            <select className="text-xs bg-muted border border-input rounded py-0.0 px-1.5 focus:outline-none focus:ring-1 focus:ring-accent cursor-not-allowed opacity-75">
              <option>Last 30 Days</option>
            </select>
            <div className="tooltip-content">Filter disabled in demonstration mode</div>
          </div>
        </div>
        <div className="h-[120px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={transformedData}
              margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
              barGap={2}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" strokeOpacity={0.5} />
              <XAxis 
                dataKey="name"
                stroke="var(--muted-foreground)" 
                tick={{ fontSize: 10, fill: 'var(--muted-foreground)' }}
                tickLine={{ stroke: 'var(--border)' }}
                axisLine={{ stroke: 'var(--border)' }}
              />
              <YAxis 
                stroke="var(--muted-foreground)" 
                tick={{ fontSize: 9, fill: 'var(--muted-foreground)' }}
                tickLine={{ stroke: 'var(--border)' }}
                axisLine={{ stroke: 'var(--border)' }}
                width={25}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend iconSize={8} wrapperStyle={{ fontSize: '10px', color: 'var(--muted-foreground)' }} />
              <Bar 
                dataKey="technical"
                name="Technical Support"
                fill="hsl(var(--chart-1))"
                barSize={15}
              />
              <Bar 
                dataKey="customer"
                name="Customer Service"
                fill="hsl(var(--chart-4))"
                barSize={15}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceTiers;