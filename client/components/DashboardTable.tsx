import { Badge } from "@/components/ui/badge";

interface DashboardTableProps {
  columns: string[];
  data: Array<Record<string, string>>;
}

export default function DashboardTable({ columns, data }: DashboardTableProps) {
  const getStatusColor = (status: string) => {
    const statusLower = status.toLowerCase();
    if (statusLower.includes("completed")) return "bg-green-100 text-green-800";
    if (statusLower.includes("pending")) return "bg-yellow-100 text-yellow-800";
    if (statusLower.includes("in progress"))
      return "bg-blue-100 text-blue-800";
    if (statusLower.includes("failed")) return "bg-red-100 text-red-800";
    return "bg-gray-100 text-gray-800";
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-slate-200 bg-slate-50">
            {columns.map((column) => (
              <th
                key={column}
                className="px-4 py-4 text-left text-sm font-semibold text-slate-900"
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr
              key={idx}
              className="border-b border-slate-200 hover:bg-slate-50 transition-colors"
            >
              {columns.map((column) => {
                const value = row[column];
                const isStatus = column === "Status";

                return (
                  <td key={`${idx}-${column}`} className="px-4 py-4 text-sm">
                    {isStatus ? (
                      <Badge
                        variant="outline"
                        className={`${getStatusColor(value)}`}
                      >
                        {value}
                      </Badge>
                    ) : (
                      <span className="text-slate-900">{value}</span>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
