import { Card, CardContent } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { statusDistribution } from "@/lib/mock-data";
import { formatNumber } from "@/lib/utils";

const COLORS = ['#27AE60', '#3498DB', '#F39C12', '#E74C3C'];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border border-border p-1.5 rounded-md shadow-sm text-xs">
        <p className="font-medium text-foreground">{payload[0].name}</p>
        <p className="text-foreground">
          <span className="font-medium">{payload[0].value}</span> ({payload[0].payload.percentage}%)
        </p>
      </div>
    );
  }

  return null;
};

const StatusDistribution = () => {
  return (
    <Card className="shadow-sm">
      <CardContent className="p-1">
        <div className="flex justify-between items-center mb-0">
          <div>
            <h2 className="font-semibold text-sm text-foreground">Status Distribution</h2>
          </div>
          <div className="tooltip">
            <select className="text-xs bg-secondary/50 text-secondary-foreground border border-input rounded py-0.0 px-1.5 focus:outline-none focus:ring-1 focus:ring-accent cursor-not-allowed opacity-75">
              <option>Last 30 Days</option>
            </select>
            <div className="tooltip-content">Filter disabled in demonstration mode</div>
          </div>
        </div>
        <div className="flex h-[100px]">
          <div className="w-[100px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                <Pie
                  data={statusDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={0}
                  outerRadius={45}
                  fill="#8884d8"
                  paddingAngle={1}
                  dataKey="value"
                  nameKey="name"
                >
                  {statusDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          {/* Status table */}
          <div className="flex-1 overflow-y-auto">
            <div className="grid grid-cols-2 gap-x-2 gap-y-0.5 text-xs">
              {statusDistribution.map((status, index) => (
                <div key={index} className="flex items-center py-0.5">
                  <div className={`w-2 h-2 rounded-full ${status.color} mr-1.5`}></div>
                  <span className="font-medium">{status.name}</span>
                  <span className="ml-auto font-medium">{status.percentage}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatusDistribution;
