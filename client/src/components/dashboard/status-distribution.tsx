import { Card, CardContent } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { statusDistribution } from "@/lib/mock-data";
import { formatNumber } from "@/lib/utils";

const COLORS = ['#27AE60', '#3498DB', '#F39C12', '#E74C3C'];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border border-border p-2 rounded-md shadow-sm">
        <p className="font-medium text-sm">{payload[0].name}</p>
        <p className="text-sm">
          <span className="font-medium">{payload[0].value}</span> accounts ({payload[0].payload.percentage}%)
        </p>
      </div>
    );
  }

  return null;
};

const StatusDistribution = () => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="mb-6">
          <h2 className="font-semibold text-lg">Status Distribution</h2>
          <p className="text-sm text-muted-foreground">Current account status breakdown</p>
        </div>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={statusDistribution}
                cx="50%"
                cy="50%"
                innerRadius={0}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={2}
                dataKey="value"
                nameKey="name"
              >
                {statusDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend 
                layout="vertical" 
                verticalAlign="middle" 
                align="right"
                formatter={(value, entry, index) => (
                  <span className="text-sm">{value}</span>
                )}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        {/* Status table */}
        <div className="mt-6">
          <div className="divide-y divide-border">
            {statusDistribution.map((status, index) => (
              <div key={index} className="py-3 flex justify-between items-center">
                <div className="flex items-center">
                  <div className={`w-3 h-3 rounded-full ${status.color} mr-2`}></div>
                  <span className="text-sm font-medium">{status.name}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-sm font-medium">{formatNumber(status.value)}</span>
                  <span className="text-xs text-muted-foreground ml-2">{status.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatusDistribution;
