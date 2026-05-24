import { Card } from "@/components/ui/card";
import { BarChart3, TrendingUp, Users, FileText } from "lucide-react";
import DashboardTable from "@/components/DashboardTable";
import StatCard from "@/components/StatCard";

export default function Dashboard() {
  const statsData = [
    {
      title: "Total Users",
      value: "12,450",
      change: "+12%",
      icon: Users,
      trend: "up",
    },
    {
      title: "Revenue",
      value: "$54,230",
      change: "+23%",
      icon: TrendingUp,
      trend: "up",
    },
    {
      title: "Conversions",
      value: "2,845",
      change: "+8%",
      icon: BarChart3,
      trend: "up",
    },
    {
      title: "Reports",
      value: "156",
      change: "-3%",
      icon: FileText,
      trend: "down",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Page Title */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
        <p className="text-slate-600 mt-2">
          Welcome back! Here's your performance overview.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {statsData.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>

      {/* Tables Section */}
      <div className="space-y-6">
        {/* Recent Activities */}
        <Card className="p-6 bg-white">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-slate-900">
              Recent Activities
            </h2>
            <p className="text-sm text-slate-600">
              Latest updates and transactions
            </p>
          </div>
          <DashboardTable
            columns={["User", "Activity", "Date", "Status"]}
            data={[
              {
                User: "Rajesh Kumar",
                Activity: "Purchase",
                Date: "Dec 28, 2024",
                Status: "Completed",
              },
              {
                User: "Priya Sharma",
                Activity: "Registration",
                Date: "Dec 27, 2024",
                Status: "Pending",
              },
              {
                User: "Arjun Patel",
                Activity: "Refund",
                Date: "Dec 26, 2024",
                Status: "Completed",
              },
              {
                User: "Neha Singh",
                Activity: "Purchase",
                Date: "Dec 25, 2024",
                Status: "Completed",
              },
              {
                User: "Vikram Desai",
                Activity: "Support Ticket",
                Date: "Dec 24, 2024",
                Status: "In Progress",
              },
            ]}
          />
        </Card>

        {/* Sales by Region */}
        <Card className="p-6 bg-white">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-slate-900">
              Sales by Region
            </h2>
            <p className="text-sm text-slate-600">
              Performance breakdown by geographic area
            </p>
          </div>
          <DashboardTable
            columns={["Region", "Sales", "Growth", "Target", "Progress"]}
            data={[
              {
                Region: "North India",
                Sales: "₹1,25,430",
                Growth: "+18%",
                Target: "₹1,40,000",
                Progress: "90%",
              },
              {
                Region: "South India",
                Sales: "₹98,720",
                Growth: "+12%",
                Target: "₹1,00,000",
                Progress: "99%",
              },
              {
                Region: "East India",
                Sales: "₹1,56,890",
                Growth: "+25%",
                Target: "₹1,50,000",
                Progress: "105%",
              },
              {
                Region: "West India",
                Sales: "₹45,230",
                Growth: "+8%",
                Target: "₹50,000",
                Progress: "90%",
              },
              {
                Region: "Central India",
                Sales: "₹32,450",
                Growth: "+15%",
                Target: "₹35,000",
                Progress: "93%",
              },
            ]}
          />
        </Card>
      </div>
    </div>
  );
}
