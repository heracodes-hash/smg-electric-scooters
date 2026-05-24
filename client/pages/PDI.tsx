import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, AlertCircle } from "lucide-react";

export default function PDI() {
  const [assemblyComplete, setAssemblyComplete] = useState(false);
  const [assemblyData, setAssemblyData] = useState({
    engineerName: "",
    modelName: "",
    chassisNumber: "",
    motorNumber: "",
    batteryNumber: "",
    assemblyStatus: "Not Complete",
  });

  const [inspectionData, setInspectionData] = useState<{
    [key: number]: string;
  }>({});

  const inspectionItems = [
    { id: 1, name: "Locker ON/OFF function" },
    { id: 2, name: "Seat back and side lock function" },
    { id: 3, name: "Instrument Cluster functions/Battery Level indication" },
    { id: 4, name: "Electrical Part Check (Head light, Tail light, Horn, Indicators, USB port)" },
    { id: 5, name: "Throttle Operation Check" },
    { id: 6, name: "Switch function" },
    { id: 7, name: "Brake Sensing Function" },
    { id: 8, name: "Motor cut off while applying brake" },
    { id: 9, name: "Tail light function / Brake sensing symbol" },
    { id: 10, name: "Handle bar position / fender" },
    { id: 11, name: "Charging socket Proper Functioning" },
    { id: 12, name: "Luggage box accessories confirmation" },
    { id: 13, name: "Mirror" },
    { id: 14, name: "Charger" },
    { id: 15, name: "Tool kit" },
    { id: 16, name: "Chakori connector filment" },
    { id: 17, name: "MCB terminal wire connection filment" },
    { id: 18, name: "Front Wheel tyre (Sealing / Wobbling / Air leakage)" },
    { id: 19, name: "Rear Wheel tyre Sealing / Wobbling / Air leakage)" },
    { id: 20, name: "PP parts aesthetic injection" },
    { id: 21, name: "Battery Clamp filment" },
    { id: 22, name: "Rear shocker function / Abnormal noise on test drive" },
    { id: 23, name: "Battery charging upto 100%" },
    { id: 24, name: "Test drive minimum 5km (share remarks if any)" },
    { id: 25, name: "Any other remark not mentioned above" },
  ];

  const handleAssemblyChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setAssemblyData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAssemblySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (assemblyData.assemblyStatus === "Complete") {
      setAssemblyComplete(true);
    } else {
      alert("❌ Assembly must be marked as Complete before proceeding!");
    }
  };

  const handleInspectionChange = (itemId: number, value: string) => {
    setInspectionData((prev) => ({
      ...prev,
      [itemId]: value,
    }));
  };

  const handleSubmitPDI = (e: React.FormEvent) => {
    e.preventDefault();
    if (!assemblyComplete) {
      alert("❌ Please complete the Assembly section first!");
      return;
    }
    alert(
      "✅ PDI Inspection submitted successfully!\n\nAll checks completed."
    );
  };

  return (
    <div className="space-y-8">
      {/* Page Title */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          PDI - Pre-Delivery Inspection
        </h1>
        <p className="text-slate-600 mt-2">
          Complete vehicle assembly and perform quality checks before delivery
        </p>
      </div>

      {/* Assembly Section */}
      <Card className="p-8 bg-white border border-slate-200">
        <div className="flex items-center gap-3 mb-6">
          {assemblyComplete ? (
            <CheckCircle2 className="w-6 h-6 text-green-600" />
          ) : (
            <AlertCircle className="w-6 h-6 text-orange-600" />
          )}
          <h2 className="text-2xl font-bold text-slate-900">
            Assembly Details
          </h2>
        </div>

        <form onSubmit={handleAssemblySubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Engineer Name */}
            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-2">
                Engineer Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="engineerName"
                value={assemblyData.engineerName}
                onChange={handleAssemblyChange}
                placeholder="e.g., Rajesh Kumar"
                className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-opacity-50"
                style={{ "--tw-ring-color": "#203864" } as any}
                required
                disabled={assemblyComplete}
              />
            </div>

            {/* Model Name */}
            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-2">
                Model Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="modelName"
                value={assemblyData.modelName}
                onChange={handleAssemblyChange}
                placeholder="e.g., ProMax 500"
                className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-opacity-50"
                style={{ "--tw-ring-color": "#203864" } as any}
                required
                disabled={assemblyComplete}
              />
            </div>

            {/* Chassis Number */}
            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-2">
                Chassis Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="chassisNumber"
                value={assemblyData.chassisNumber}
                onChange={handleAssemblyChange}
                placeholder="e.g., CH-2025-001"
                className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-opacity-50"
                style={{ "--tw-ring-color": "#203864" } as any}
                required
                disabled={assemblyComplete}
              />
            </div>

            {/* Motor Number */}
            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-2">
                Motor Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="motorNumber"
                value={assemblyData.motorNumber}
                onChange={handleAssemblyChange}
                placeholder="e.g., MOT-2025-001"
                className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-opacity-50"
                style={{ "--tw-ring-color": "#203864" } as any}
                required
                disabled={assemblyComplete}
              />
            </div>

            {/* Battery Number */}
            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-2">
                Battery Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="batteryNumber"
                value={assemblyData.batteryNumber}
                onChange={handleAssemblyChange}
                placeholder="e.g., BAT-2025-001"
                className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-opacity-50"
                style={{ "--tw-ring-color": "#203864" } as any}
                required
                disabled={assemblyComplete}
              />
            </div>

            {/* Assembly Status */}
            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-2">
                Assembly Status <span className="text-red-500">*</span>
              </label>
              <select
                name="assemblyStatus"
                value={assemblyData.assemblyStatus}
                onChange={handleAssemblyChange}
                className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-opacity-50"
                style={{ "--tw-ring-color": "#203864" } as any}
                required
                disabled={assemblyComplete}
              >
                <option value="Not Complete">Not Complete</option>
                <option value="Complete">Complete</option>
              </select>
            </div>
          </div>

          {/* Submit Button */}
          {!assemblyComplete && (
            <button
              type="submit"
              className="w-full text-white font-semibold py-3 rounded-lg transition hover:opacity-90"
              style={{ backgroundColor: "#203864" }}
            >
              Confirm Assembly
            </button>
          )}

          {assemblyComplete && (
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-700 font-semibold text-center">
                ✅ Assembly section completed. Proceed with PDI Checklist.
              </p>
            </div>
          )}
        </form>
      </Card>

      {/* PDI Checklist Section */}
      {assemblyComplete && (
        <Card className="p-8 bg-white border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            PDI Inspection Checklist
          </h2>

          <form onSubmit={handleSubmitPDI} className="space-y-6">
            {/* Inspection Items Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr
                    className="text-sm font-semibold text-white"
                    style={{ backgroundColor: "#203864" }}
                  >
                    <th className="px-6 py-4 text-left">#</th>
                    <th className="px-6 py-4 text-left">Inspection Item</th>
                    <th className="px-6 py-4 text-left">Result</th>
                  </tr>
                </thead>
                <tbody>
                  {inspectionItems.map((item) => (
                    <tr
                      key={item.id}
                      className="border-b border-slate-200 hover:bg-slate-50"
                    >
                      <td className="px-6 py-4 text-slate-600 font-medium">
                        {item.id}
                      </td>
                      <td className="px-6 py-4 text-slate-700">{item.name}</td>
                      <td className="px-6 py-4">
                        <select
                          value={inspectionData[item.id] || "N/A"}
                          onChange={(e) =>
                            handleInspectionChange(item.id, e.target.value)
                          }
                          className="px-3 py-2 rounded-lg border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-opacity-50"
                          style={{ "--tw-ring-color": "#203864" } as any}
                          required
                        >
                          <option value="N/A">N/A</option>
                          <option value="Pass">Pass</option>
                          <option value="Fail">Fail</option>
                          <option value="Not Applicable">Not Applicable</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-8">
              <button
                type="button"
                className="flex-1 text-white font-semibold py-3 rounded-lg transition hover:opacity-90 bg-green-600"
              >
                Save Vehicle & Add to Batch
              </button>
              <button
                type="submit"
                className="flex-1 text-white font-semibold py-3 rounded-lg transition hover:opacity-90"
                style={{ backgroundColor: "#0066CC" }}
              >
                Generate Dispatch PDF (PASS ONLY)
              </button>
            </div>

            {/* Batch Summary Section */}
            <div className="mt-4 p-4 bg-white border border-slate-200 rounded-lg">
              <h3 className="text-sm font-semibold text-slate-900">
                Batch Summary
              </h3>
            </div>
          </form>
        </Card>
      )}
    </div>
  );
}
