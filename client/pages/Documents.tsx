import { Card } from "@/components/ui/card";
import { FileText, Download, Eye, Search } from "lucide-react";

export default function Documents() {
  const documents = [
    {
      id: 1,
      name: "Employment Agreement.pdf",
      size: "2.4 MB",
      date: "Dec 28, 2024",
      category: "Contracts",
    },
    {
      id: 2,
      name: "Performance Review 2024.docx",
      size: "1.8 MB",
      date: "Dec 25, 2024",
      category: "Reviews",
    },
    {
      id: 3,
      name: "Code of Conduct.pdf",
      size: "3.1 MB",
      date: "Dec 20, 2024",
      category: "Policies",
    },
    {
      id: 4,
      name: "Training Certificates.zip",
      size: "5.2 MB",
      date: "Dec 15, 2024",
      category: "Training",
    },
    {
      id: 5,
      name: "Benefits Summary.pdf",
      size: "1.5 MB",
      date: "Dec 10, 2024",
      category: "Benefits",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Page Title */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">My Documents</h1>
        <p className="text-slate-600 mt-2">Access and manage your documents</p>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
        <input
          type="text"
          placeholder="Search documents..."
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Documents Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {documents.map((doc) => (
          <Card
            key={doc.id}
            className="p-6 bg-white hover:shadow-md transition flex flex-col"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex gap-2">
                <button className="p-2 hover:bg-slate-100 rounded-lg transition">
                  <Eye className="w-4 h-4 text-slate-600" />
                </button>
                <button className="p-2 hover:bg-slate-100 rounded-lg transition">
                  <Download className="w-4 h-4 text-slate-600" />
                </button>
              </div>
            </div>
            <h3 className="font-semibold text-slate-900 mb-1 line-clamp-2">
              {doc.name}
            </h3>
            <p className="text-xs text-slate-500 mb-3">{doc.category}</p>
            <div className="mt-auto pt-4 border-t border-slate-200">
              <p className="text-xs text-slate-600">{doc.size}</p>
              <p className="text-xs text-slate-500">{doc.date}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
