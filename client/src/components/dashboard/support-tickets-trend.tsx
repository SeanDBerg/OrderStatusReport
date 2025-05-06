
import { Card, CardContent } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { trendData } from "@/lib/mock-data";

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border border-border p-1.5 rounded-md shadow-sm text-xs">
        <p className="font-medium text-foreground">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} style={{ color: entry.color }}>
            <span className="text-foreground">{entry.name}:</span> {entry.value}
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
        <div className="flex justify-between items-center mb-2">
          <div>
            <h2 className="font-semibold text-sm">Support Ticket Trends</h2>
            <p className="text-xs text-muted-foreground">Support tickets over time</p>
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
            <LineChart
              data={trendData}
              margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" strokeOpacity={0.5} />
              <XAxis 
                dataKey="name"
                stroke="var(--muted-foreground)"
                tick={{ fontSize: 9, fill: 'var(--muted-foreground)' }}
                tickLine={{ stroke: 'var(--border)' }}
                axisLine={{ stroke: 'var(--border)' }}
                interval={2}
              />
              <YAxis
                stroke="var(--muted-foreground)"
                tick={{ fontSize: 9, fill: 'var(--muted-foreground)' }}
                tickLine={{ stroke: 'var(--border)' }}
                axisLine={{ stroke: 'var(--border)' }}
                width={25}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend 
                iconSize={8} 
                wrapperStyle={{ fontSize: '10px' }}
                formatter={(value) => <span style={{ color: 'var(--muted-foreground)' }}>{value}</span>}
              />
              <Line
                type="monotone"
                dataKey="technicalSupport"
                name="Technical Support"
                stroke="hsl(var(--chart-1))"
                strokeWidth={1.5}
                dot={{ r: 2.5 }}
              />
              <Line
                type="monotone"
                dataKey="customerService"
                name="Customer Service"
                stroke="hsl(var(--chart-4))"
                strokeWidth={1.5}
                dot={{ r: 2.5 }}
              />
              <Line
                type="monotone"
                dataKey="total"
                name="Total Tickets"
                stroke="hsl(var(--chart-2))"
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
