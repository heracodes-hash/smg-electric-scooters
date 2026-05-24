import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, ChevronLeft, LayoutDashboard, List, FileText, Shield, Building2, User, LogOut, Package, CheckSquare } from "lucide-react";
import { useState } from "react";

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
    { name: "Parts List", icon: Package, path: "/dashboard/parts" },
    { name: "List my Requests", icon: List, path: "/dashboard/requests" },
    { name: "PDI Inspection", icon: CheckSquare, path: "/dashboard/pdi" },
    { name: "My Documents", icon: FileText, path: "/dashboard/documents" },
    { name: "Policies", icon: Shield, path: "/dashboard/policies" },
    { name: "Facilities", icon: Building2, path: "/dashboard/facilities" },
  ];

  const handleLogout = () => {
    navigate("/");
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 md:hidden p-2 rounded-md text-white"
        style={{ backgroundColor: "#203864" }}
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-64 transition-transform duration-300 md:translate-x-0 z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ backgroundColor: "#203864", color: "white" }}
      >
        <div className="flex flex-col h-full">
          {/* Logo section */}
          <div className="px-6 py-8" style={{ borderBottomColor: "#1a2d4d", borderBottomWidth: "1px" }}>
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold" style={{ fontFamily: "Playfair Display, serif" }}>
                SMG
              </span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
            {/* Back Button */}
            <button
              onClick={handleBack}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-gray-300 hover:bg-opacity-50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
              <span>Back</span>
            </button>

            {/* Menu Items */}
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              const Icon = item.icon;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "text-white"
                      : "text-gray-300 hover:bg-opacity-50"
                  }`}
                  style={isActive ? { backgroundColor: "#0f1d32" } : { backgroundColor: "transparent" }}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Profile & Logout section */}
          <div className="px-4 py-4 space-y-2" style={{ borderTopColor: "#1a2d4d", borderTopWidth: "1px" }}>
            {/* Profile */}
            <Link
              to="/dashboard/profile"
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === "/dashboard/profile"
                  ? "text-white"
                  : "text-gray-300 hover:bg-opacity-50"
              }`}
              style={location.pathname === "/dashboard/profile" ? { backgroundColor: "#0f1d32" } : { backgroundColor: "transparent" }}
            >
              <User className="w-5 h-5" />
              <span>Profile</span>
            </Link>

            {/* Logout */}
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-gray-300 hover:text-red-400 transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
