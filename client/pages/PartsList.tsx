import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Plus } from "lucide-react";

export default function PartsList() {
  const parts = [
    {
      id: "PART-001",
      partName: "Engine Assembly",
      category: "Engines",
      quantity: 5,
      location: "Zone A-12",
      status: "In Stock",
    },
    {
      id: "PART-002",
      partName: "Brake System",
      category: "Brakes",
      quantity: 3,
      location: "Zone B-5",
      status: "Low Stock",
    },
    {
      id: "PART-003",
      partName: "Transmission Unit",
      category: "Transmission",
      quantity: 2,
      location: "Zone C-8",
      status: "In Stock",
    },
    {
      id: "PART-004",
      partName: "Suspension Kit",
      category: "Suspension",
      quantity: 0,
      location: "Zone A-3",
      status: "Out of Stock",
    },
    {
      id: "PART-005",
      partName: "Electrical Harness",
      category: "Electrical",
      quantity: 12,
      location: "Zone D-2",
      status: "In Stock",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Stock":
        return "bg-green-100 text-green-800";
      case "Low Stock":
        return "bg-yellow-100 text-yellow-800";
      case "Out of Stock":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Title */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Parts List</h1>
        <p className="text-slate-600 mt-2">Manage and view all available parts</p>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search parts..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-opacity-50"
            style={{ "--tw-ring-color": "#203864" } as any}
          />
        </div>
        <Button
          className="flex items-center gap-2 text-white"
          style={{ backgroundColor: "#203864" }}
        >
          <Plus className="w-5 h-5" />
          Add Part
        </Button>
      </div>

      {/* Parts Table */}
      <Card className="p-0 bg-white border border-slate-200">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr
                className="text-sm font-semibold text-white"
                style={{ backgroundColor: "#203864" }}
              >
                <th className="px-6 py-4 text-left">Part ID</th>
                <th className="px-6 py-4 text-left">Part Name</th>
                <th className="px-6 py-4 text-left">Category</th>
                <th className="px-6 py-4 text-left">Quantity</th>
                <th className="px-6 py-4 text-left">Location</th>
                <th className="px-6 py-4 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {parts.map((part, idx) => (
                <tr
                  key={idx}
                  className="border-b border-slate-200 hover:bg-slate-50 transition-colors"
                >
                  <td className="px-6 py-4 text-sm text-slate-900 font-medium">
                    {part.id}
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-900">
                    {part.partName}
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">
                    {part.category}
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-900">
                    {part.quantity}
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">
                    {part.location}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                        part.status
                      )}`}
                    >
                      {part.status}
                    </span>
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
