import { Card, CardContent } from "@/components/ui/card";
import { ArrowDown, ArrowUp, Users, CheckCircle, AlertTriangle, PauseCircle, Activity, PlusCircle } from "lucide-react";
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
        return <Users className="h-3.5 w-3.5 text-accent" />;
      case "check-circle":
        return <CheckCircle className="h-3.5 w-3.5 text-success" />;
      case "pause-circle":
        return <PauseCircle className="h-3.5 w-3.5 text-warning" />;
      case "alert-triangle":
        return <AlertTriangle className="h-3.5 w-3.5 text-destructive" />;
      case "activity":
        return <Activity className="h-3.5 w-3.5 text-accent" />;
      case "plus-circle":
        return <PlusCircle className="h-3.5 w-3.5 text-success" />;
      default:
        return <Users className="h-3.5 w-3.5 text-accent" />;
    }
  };

  const getIconBgColor = () => {
    switch (icon) {
      case "users":
        return "bg-accent/10";
      case "check-circle":
      case "plus-circle":
        return "bg-success/10";
      case "pause-circle":
        return "bg-warning/10";
      case "alert-triangle":
        return "bg-destructive/10";
      case "activity":
        return "bg-accent/10";
      default:
        return "bg-accent/10";
    }
  };

  return (
    <Card className="shadow-sm">
      <CardContent className="p-3">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xs font-medium text-muted-foreground">{title}</h3>
          <div className={`p-1 ${getIconBgColor()} rounded-full`}>
            {renderIcon()}
          </div>
        </div>
        <div className="mb-1">
          <span className="text-xl font-bold">{formatNumber(value)}</span>
        </div>
        <div className="flex items-center text-xs">
          <span className={`font-medium flex items-center ${isPositive ? 'text-success' : 'text-destructive'}`}>
            {isPositive ? (
              <ArrowUp className="h-3 w-3 mr-0.5" />
            ) : (
              <ArrowDown className="h-3 w-3 mr-0.5" />
            )}
            {percentageChange}%
          </span>
          <span className="text-muted-foreground ml-1">{comparePeriod}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default MetricCard;
