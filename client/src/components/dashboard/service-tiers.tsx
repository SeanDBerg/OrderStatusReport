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
    { name: 'T1', value: serviceTiers[0].technical, type: 'Technical' },
    { name: 'T1', value: serviceTiers[0].customerService, type: 'Customer Service' },
    { name: 'T2', value: serviceTiers[1].technical, type: 'Technical' },
    { name: 'T2', value: serviceTiers[1].customerService, type: 'Customer Service' },
    { name: 'T3', value: serviceTiers[2].technical, type: 'Technical' },
    { name: 'T3', value: serviceTiers[2].customerService, type: 'Customer Service' }
  ];

  return (
    <Card className="shadow-sm">
      <CardContent className="p-3">
        <div className="mb-2">
          <h2 className="font-semibold text-sm">Service Tier Distribution</h2>
          <p className="text-xs text-muted-foreground">Accounts by service level & issue type</p>
        </div>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={transformedData}
              margin={{ top: 10, right: 30, left: 20, bottom: 20 }}
              barGap={2}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" strokeOpacity={0.5} />
              <XAxis 
                dataKey="name" 
                stroke="var(--muted-foreground)" 
                tick={{ fontSize: 10 }}
                tickLine={{ stroke: 'var(--border)' }}
                axisLine={{ stroke: 'var(--border)' }}
              />
              <YAxis 
                stroke="var(--muted-foreground)" 
                tick={{ fontSize: 10 }}
                tickLine={{ stroke: 'var(--border)' }}
                axisLine={{ stroke: 'var(--border)' }}
                width={35}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend iconSize={8} wrapperStyle={{ fontSize: '10px' }} />
              <Bar 
                dataKey="value"
                fill={(data) => data.type === 'Technical' ? 'hsl(var(--chart-1))' : 'hsl(var(--chart-4))'}
                name={(data) => data.type}
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