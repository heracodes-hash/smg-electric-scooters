import { Card } from "@/components/ui/card";
import { LucideIcon, TrendingUp, TrendingDown } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
  trend: "up" | "down";
}

export default function StatCard({
  title,
  value,
  change,
  icon: Icon,
  trend,
}: StatCardProps) {
  const isTrendingUp = trend === "up";

  return (
    <Card className="p-6 bg-white hover:shadow-lg transition-shadow border border-slate-200">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-slate-600">{title}</p>
          <h3 className="text-2xl font-bold text-slate-900 mt-2">{value}</h3>
          <div className="flex items-center gap-1 mt-3">
            {isTrendingUp ? (
              <TrendingUp className="w-4 h-4 text-green-500" />
            ) : (
              <TrendingDown className="w-4 h-4 text-red-500" />
            )}
            <span
              className={`text-sm font-medium ${
                isTrendingUp ? "text-green-500" : "text-red-500"
              }`}
            >
              {change}
            </span>
            <span className="text-xs text-slate-500">vs last month</span>
          </div>
        </div>
        <div className="p-3 rounded-lg" style={{ backgroundColor: "#203864" }}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
    </Card>
  );
}
