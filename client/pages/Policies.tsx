import { Card } from "@/components/ui/card";
import { Shield, ExternalLink, CheckCircle } from "lucide-react";

export default function Policies() {
  const policies = [
    {
      id: 1,
      title: "Code of Conduct",
      description: "Guidelines for professional behavior and ethics at work",
      status: "Acknowledged",
      date: "Dec 20, 2024",
    },
    {
      id: 2,
      title: "Privacy Policy",
      description: "How we handle and protect your personal information",
      status: "Acknowledged",
      date: "Dec 19, 2024",
    },
    {
      id: 3,
      title: "Data Security Policy",
      description: "Standards for protecting company and client data",
      status: "Pending",
      date: "Dec 25, 2024",
    },
    {
      id: 4,
      title: "Work From Home Policy",
      description: "Guidelines and requirements for remote work arrangements",
      status: "Acknowledged",
      date: "Dec 18, 2024",
    },
    {
      id: 5,
      title: "Leave and Absence Policy",
      description: "Policies regarding vacation, sick leave, and absences",
      status: "Acknowledged",
      date: "Dec 15, 2024",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Page Title */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Policies</h1>
        <p className="text-slate-600 mt-2">
          Review and acknowledge company policies
        </p>
      </div>

      {/* Policies List */}
      <div className="space-y-4">
        {policies.map((policy) => (
          <Card
            key={policy.id}
            className="p-6 bg-white hover:shadow-md transition"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4 flex-1">
                <div className="p-3 bg-purple-100 rounded-lg mt-1">
                  <Shield className="w-5 h-5 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">
                    {policy.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-2">
                    {policy.description}
                  </p>
                  <p className="text-xs text-slate-500">
                    Last updated: {policy.date}
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-3">
                <div className="flex items-center gap-2">
                  {policy.status === "Acknowledged" ? (
                    <>
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-sm font-medium text-green-600">
                        {policy.status}
                      </span>
                    </>
                  ) : (
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm font-medium rounded-full">
                      {policy.status}
                    </span>
                  )}
                </div>
                <button className="flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Read <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
