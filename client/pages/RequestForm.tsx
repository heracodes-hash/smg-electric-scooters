import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function RequestForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    partName: "",
    partId: "",
    quantityRequired: "",
    priority: "Medium",
    reason: "",
    warehouseLocation: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    navigate("/dashboard/requests");
  };

  return (
    <div className="space-y-6 max-w-2xl">
      {/* Back Button */}
      <Link to="/dashboard/requests">
        <button className="flex items-center gap-2 text-slate-600 hover:text-slate-900 font-medium">
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>
      </Link>

      {/* Page Title */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Request Part</h1>
        <p className="text-slate-600 mt-2">Fill in the details below to request a new part</p>
      </div>

      {/* Form Card */}
      <Card className="p-8 bg-white border border-slate-200">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Part Name */}
          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-2">
              Part Name <span className="text-red-500">*</span>
            </label>
            <select
              name="partName"
              value={formData.partName}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-opacity-50"
              style={{ "--tw-ring-color": "#203864" } as any}
              required
            >
              <option value="">Select Part</option>
              <option value="Engine Assembly">Engine Assembly</option>
              <option value="Brake System">Brake System</option>
              <option value="Transmission Unit">Transmission Unit</option>
              <option value="Suspension Kit">Suspension Kit</option>
              <option value="Electrical Harness">Electrical Harness</option>
            </select>
          </div>

          {/* Part ID */}
          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-2">
              Part ID <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="partId"
              value={formData.partId}
              onChange={handleChange}
              placeholder="e.g., PART-001"
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-opacity-50"
              style={{ "--tw-ring-color": "#203864" } as any}
              required
            />
          </div>

          {/* Quantity Required */}
          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-2">
              Quantity Required <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="quantityRequired"
              value={formData.quantityRequired}
              onChange={handleChange}
              placeholder="0"
              min="1"
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-opacity-50"
              style={{ "--tw-ring-color": "#203864" } as any}
              required
            />
          </div>

          {/* Priority */}
          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-2">
              Priority <span className="text-red-500">*</span>
            </label>
            <select
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-opacity-50"
              style={{ "--tw-ring-color": "#203864" } as any}
              required
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>

          {/* Reason/Justification */}
          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-2">
              Reason/Justification <span className="text-red-500">*</span>
            </label>
            <textarea
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              placeholder="Enter reason for requesting..."
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-opacity-50"
              style={{ "--tw-ring-color": "#203864" } as any}
              required
            />
          </div>

          {/* Warehouse Location */}
          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-2">
              Warehouse Location <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="warehouseLocation"
              value={formData.warehouseLocation}
              onChange={handleChange}
              placeholder="e.g., Zone A-12"
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-opacity-50"
              style={{ "--tw-ring-color": "#203864" } as any}
              required
            />
          </div>

          {/* Form Actions */}
          <div className="flex gap-4 pt-6">
            <Button
              type="submit"
              className="flex-1 text-white font-semibold py-3"
              style={{ backgroundColor: "#203864" }}
            >
              Submit Request
            </Button>
            <Button
              type="button"
              className="flex-1 bg-slate-200 text-slate-900 font-semibold py-3 hover:bg-slate-300"
              onClick={() => navigate("/dashboard/requests")}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
