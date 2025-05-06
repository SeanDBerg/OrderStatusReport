
import { Card, CardContent } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { trendData } from "@/lib/mock-data";

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border border-border p-1.5 rounded-md shadow-sm text-xs">
        <p className="font-medium">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} style={{ color: entry.color }}>
            {entry.name}: {entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const SupportTicketsTrend = () => {
  return (
    <Card className="shadow-sm">
      <CardContent className="p-3">
        <div className="mb-2">
          <h2 className="font-semibold text-sm">Support Ticket Trends</h2>
          <p className="text-xs text-muted-foreground">Technical vs Customer Service tickets over time</p>
        </div>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={trendData}
              margin={{ top: 10, right: 30, left: 20, bottom: 20 }}
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
                tick={{ fontSize: 10, fill: 'var(--muted-foreground)' }}
                tickLine={{ stroke: 'var(--border)' }}
                axisLine={{ stroke: 'var(--border)' }}
                width={35}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend iconSize={8} wrapperStyle={{ fontSize: '10px', color: 'var(--muted-foreground)' }} />
              <Line
                type="monotone"
                dataKey="issues"
                name="Technical Support"
                stroke="hsl(var(--chart-1))"
                strokeWidth={1.5}
                dot={{ r: 2.5 }}
              />
              <Line
                type="monotone"
                dataKey="onHold"
                name="Customer Service"
                stroke="hsl(var(--chart-4))"
                strokeWidth={1.5}
                dot={{ r: 2.5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default SupportTicketsTrend;
