import { Card, CardContent } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { statusTrendData } from "@/lib/mock-data";

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

const StatusTrend = () => {
  return (
    <Card className="shadow-sm">
      <CardContent className="p-1">
        <div className="flex justify-between items-center mb-0">
          <div>
          <h2 className="font-semibold text-sm text-foreground">Account Status Trend</h2>
          </div>
          <div className="tooltip">
            <select className="text-xs bg-secondary/50 text-secondary-foreground border border-input rounded py-0.0 px-1.5 focus:outline-none focus:ring-1 focus:ring-accent cursor-not-allowed opacity-75">
              <option>Last 30 Days</option>
            </select>
            <div className="tooltip-content">Filter disabled in demonstration mode</div>
          </div>
        </div>
        
        <div className="h-[100px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={statusTrendData}
              margin={{
                top: 0,
                right: 25,
                left: 0,
                bottom: 5,
              }}
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
                dataKey="active"
                name="Active"
                stroke="hsl(var(--chart-1))"
                activeDot={{ r: 4 }}
                strokeWidth={1}
                dot={{ r: 1.5 }}
              />
              <Line
                type="monotone"
                dataKey="onHold"
                name="On Hold"
                stroke="hsl(var(--chart-3))"
                strokeWidth={1}
                dot={{ r: 1.5 }}
              />
              <Line
                type="monotone"
                dataKey="issues"
                name="Issues"
                stroke="hsl(var(--chart-4))"
                strokeWidth={1}
                dot={{ r: 1.5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatusTrend;
