import { Card, CardContent } from "@/components/ui/card";
import { ArrowDown, ArrowUp, Users, CheckCircle, AlertTriangle, PauseCircle } from "lucide-react";
import { formatNumber } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: number;
  percentageChange: number;
  isPositive: boolean;
  icon: string;
  comparePeriod: string;
}

const MetricCard = ({ title, value, percentageChange, isPositive, icon, comparePeriod }: MetricCardProps) => {
  const renderIcon = () => {
    switch (icon) {
      case "users":
        return <Users className="h-5 w-5 text-accent" />;
      case "check-circle":
        return <CheckCircle className="h-5 w-5 text-success" />;
      case "pause-circle":
        return <PauseCircle className="h-5 w-5 text-warning" />;
      case "alert-triangle":
        return <AlertTriangle className="h-5 w-5 text-destructive" />;
      default:
        return <Users className="h-5 w-5 text-accent" />;
    }
  };

  const getIconBgColor = () => {
    switch (icon) {
      case "users":
        return "bg-accent/10";
      case "check-circle":
        return "bg-success/10";
      case "pause-circle":
        return "bg-warning/10";
      case "alert-triangle":
        return "bg-destructive/10";
      default:
        return "bg-accent/10";
    }
  };

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
          <div className={`p-2 ${getIconBgColor()} rounded-full`}>
            {renderIcon()}
          </div>
        </div>
        <div className="mb-2">
          <span className="text-3xl font-bold">{formatNumber(value)}</span>
        </div>
        <div className="flex items-center text-sm">
          <span className={`font-medium flex items-center ${isPositive ? 'text-success' : 'text-destructive'}`}>
            {isPositive ? (
              <ArrowUp className="h-4 w-4 mr-1" />
            ) : (
              <ArrowDown className="h-4 w-4 mr-1" />
            )}
            {percentageChange}%
          </span>
          <span className="text-muted-foreground ml-2">{comparePeriod}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default MetricCard;
