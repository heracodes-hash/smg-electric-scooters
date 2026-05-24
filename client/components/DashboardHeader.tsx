import { Bell, Mail, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function DashboardHeader() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="bg-white border-b border-slate-200 px-6 md:px-8 py-4 flex items-center justify-between">
      {/* Left side - empty for now */}
      <div />

      {/* Right side - Icons and user menu */}
      <div className="flex items-center gap-6">
        {/* Notification Bell */}
        <button className="text-slate-600 hover:text-slate-800 transition">
          <Bell className="w-6 h-6" />
        </button>

        {/* Mail */}
        <button className="text-slate-600 hover:text-slate-800 transition">
          <Mail className="w-6 h-6" />
        </button>

        {/* User Avatar & Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-2 hover:bg-slate-100 px-3 py-2 rounded-lg transition"
          >
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold" style={{ backgroundColor: "#203864" }}>
              R
            </div>
            <ChevronDown className="w-4 h-4 text-slate-600" />
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-slate-200 z-50">
              <a
                href="#"
                className="block px-4 py-2 text-slate-700 hover:bg-slate-100 first:rounded-t-lg"
              >
                My Profile
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-slate-700 hover:bg-slate-100"
              >
                Settings
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-slate-700 hover:bg-slate-100"
              >
                Help & Support
              </a>
              <hr className="my-1" />
              <a
                href="#"
                className="block px-4 py-2 text-red-600 hover:bg-red-50 last:rounded-b-lg"
              >
                Logout
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
