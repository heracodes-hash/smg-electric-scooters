import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, Filter, Plus } from "lucide-react";
import { Link } from "react-router-dom";

export default function Requests() {
  const requests = [
    {
      id: "REQ001",
      partName: "Engine Assembly",
      partId: "PART-001",
      quantity: 5,
      priority: "High",
      status: "Approved",
      requestDate: "Dec 28, 2024",
    },
    {
      id: "REQ002",
      partName: "Brake System",
      partId: "PART-002",
      quantity: 3,
      priority: "Medium",
      status: "Pending",
      requestDate: "Dec 26, 2024",
    },
    {
      id: "REQ003",
      partName: "Transmission Unit",
      partId: "PART-003",
      quantity: 2,
      priority: "Low",
      status: "Pending",
      requestDate: "Dec 24, 2024",
    },
    {
      id: "REQ004",
      partName: "Suspension Kit",
      partId: "PART-004",
      quantity: 1,
      priority: "High",
      status: "Approved",
      requestDate: "Dec 20, 2024",
    },
    {
      id: "REQ005",
      partName: "Electrical Harness",
      partId: "PART-005",
      quantity: 10,
      priority: "Medium",
      status: "Rejected",
      requestDate: "Dec 18, 2024",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "approved":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "rejected":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority.toLowerCase()) {
      case "high":
        return "text-red-600";
      case "medium":
        return "text-orange-600";
      case "low":
        return "text-green-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Title */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">My Requests</h1>
        <p className="text-slate-600 mt-2">View and manage your part requests</p>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search by Part ID or Name..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-opacity-50"
            style={{ "--tw-ring-color": "#203864" } as any}
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50">
          <Filter className="w-5 h-5" />
          Filter
        </button>
        <Link to="/dashboard/request">
          <Button
            className="flex items-center gap-2 text-white"
            style={{ backgroundColor: "#203864" }}
          >
            <Plus className="w-5 h-5" />
            New Request
          </Button>
        </Link>
      </div>

      {/* Requests Table */}
      <Card className="p-0 bg-white border border-slate-200">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr
                className="text-sm font-semibold text-white"
                style={{ backgroundColor: "#203864" }}
              >
                <th className="px-6 py-4 text-left">Request ID</th>
                <th className="px-6 py-4 text-left">Part ID</th>
                <th className="px-6 py-4 text-left">Part Name</th>
                <th className="px-6 py-4 text-left">Quantity</th>
                <th className="px-6 py-4 text-left">Priority</th>
                <th className="px-6 py-4 text-left">Status</th>
                <th className="px-6 py-4 text-left">Request Date</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((request, idx) => (
                <tr
                  key={idx}
                  className="border-b border-slate-200 hover:bg-slate-50 transition-colors"
                >
                  <td className="px-6 py-4 text-sm text-slate-900 font-medium">
                    {request.id}
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-900">
                    {request.partId}
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-900">
                    {request.partName}
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-900">
                    {request.quantity}
                  </td>
                  <td className={`px-6 py-4 text-sm font-medium ${getPriorityColor(request.priority)}`}>
                    {request.priority}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                        request.status
                      )}`}
                    >
                      {request.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">
                    {request.requestDate}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
