import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();
  const [loginType, setLoginType] = useState<"user" | "admin">("user");

  // User login state
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userShowPassword, setUserShowPassword] = useState(false);
  const [userRememberMe, setUserRememberMe] = useState(false);

  // Admin login state
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [adminShowPassword, setAdminShowPassword] = useState(false);
  const [adminRememberMe, setAdminRememberMe] = useState(false);

  const handleUserLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // For frontend-only, just navigate to dashboard
    navigate("/dashboard");
  };

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // For frontend-only, navigate to admin dashboard
    // You can create an admin dashboard route later
    alert("✅ Admin logged in successfully!\n\nAdmin Dashboard will open soon.");
    // navigate("/admin"); // Uncomment when admin dashboard is ready
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 px-8 py-6">
        <div className="flex items-center gap-2">
          <span className="text-4xl font-bold" style={{ color: "#203864", fontFamily: "Playfair Display, serif" }}>SMG</span>
        </div>
      </div>

      {/* Login Container */}
      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md">
          {/* Logo Section */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-2" style={{ color: "#203864", fontFamily: "Playfair Display, serif" }}>
              SMG
            </h1>
            <h2 className="text-2xl text-slate-800 font-semibold">
              Login to your Account
            </h2>
          </div>

          {/* Tabs */}
          <div className="flex gap-4 mb-6 bg-slate-100 p-1 rounded-lg">
            <button
              onClick={() => setLoginType("user")}
              className={`flex-1 py-2 px-4 rounded-md font-semibold transition ${
                loginType === "user"
                  ? "text-white"
                  : "text-slate-600 hover:text-slate-800"
              }`}
              style={{
                backgroundColor: loginType === "user" ? "#203864" : "transparent",
              }}
            >
              User Login
            </button>
            <button
              onClick={() => setLoginType("admin")}
              className={`flex-1 py-2 px-4 rounded-md font-semibold transition ${
                loginType === "admin"
                  ? "text-white"
                  : "text-slate-600 hover:text-slate-800"
              }`}
              style={{
                backgroundColor: loginType === "admin" ? "#203864" : "transparent",
              }}
            >
              Admin Login
            </button>
          </div>

          {/* User Login Form */}
          {loginType === "user" && (
            <form onSubmit={handleUserLogin} className="bg-white rounded-lg p-8 shadow-sm border border-slate-200">
              {/* Email Input */}
              <div className="mb-6">
                <input
                  type="email"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  placeholder="Username or Email"
                  className="w-full px-4 py-3 bg-slate-100 rounded-lg text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-2 focus:bg-white transition"
                  style={{ "--tw-ring-color": "#203864" } as any}
                  required
                />
              </div>

              {/* Password Input */}
              <div className="mb-6">
                <div className="relative">
                  <input
                    type={userShowPassword ? "text" : "password"}
                    value={userPassword}
                    onChange={(e) => setUserPassword(e.target.value)}
                    placeholder="Password"
                    className="w-full px-4 py-3 bg-slate-100 rounded-lg text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-2 focus:bg-white transition"
                    style={{ "--tw-ring-color": "#203864" } as any}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setUserShowPassword(!userShowPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-500 hover:text-slate-700"
                  >
                    {userShowPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between mb-8">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={userRememberMe}
                    onChange={(e) => setUserRememberMe(e.target.checked)}
                    className="w-4 h-4 rounded border-slate-300 text-blue-600 cursor-pointer"
                  />
                  <span className="text-sm text-slate-600">Remember me</span>
                </label>
                <a
                  href="#"
                  className="text-sm font-medium hover:opacity-80"
                  style={{ color: "#203864" }}
                >
                  Forgot Password?
                </a>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full text-white font-semibold py-3 rounded-lg transition mb-4 hover:opacity-90"
                style={{ backgroundColor: "#203864" }}
              >
                Login
              </button>

              {/* Register Link */}
              <div className="text-center">
                <span className="text-slate-600">Don't have an account? </span>
                <a href="#" className="font-semibold hover:opacity-80" style={{ color: "#203864" }}>
                  Register
                </a>
              </div>
            </form>
          )}

          {/* Admin Login Form */}
          {loginType === "admin" && (
            <form onSubmit={handleAdminLogin} className="bg-white rounded-lg p-8 shadow-sm border border-slate-200">
              {/* Admin ID Input */}
              <div className="mb-6">
                <input
                  type="text"
                  value={adminEmail}
                  onChange={(e) => setAdminEmail(e.target.value)}
                  placeholder="Admin ID or Email"
                  className="w-full px-4 py-3 bg-slate-100 rounded-lg text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-2 focus:bg-white transition"
                  style={{ "--tw-ring-color": "#203864" } as any}
                  required
                />
              </div>

              {/* Password Input */}
              <div className="mb-6">
                <div className="relative">
                  <input
                    type={adminShowPassword ? "text" : "password"}
                    value={adminPassword}
                    onChange={(e) => setAdminPassword(e.target.value)}
                    placeholder="Password"
                    className="w-full px-4 py-3 bg-slate-100 rounded-lg text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-2 focus:bg-white transition"
                    style={{ "--tw-ring-color": "#203864" } as any}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setAdminShowPassword(!adminShowPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-500 hover:text-slate-700"
                  >
                    {adminShowPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between mb-8">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={adminRememberMe}
                    onChange={(e) => setAdminRememberMe(e.target.checked)}
                    className="w-4 h-4 rounded border-slate-300 text-blue-600 cursor-pointer"
                  />
                  <span className="text-sm text-slate-600">Remember me</span>
                </label>
                <a
                  href="#"
                  className="text-sm font-medium hover:opacity-80"
                  style={{ color: "#203864" }}
                >
                  Forgot Password?
                </a>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full text-white font-semibold py-3 rounded-lg transition mb-4 hover:opacity-90"
                style={{ backgroundColor: "#203864" }}
              >
                Login as Admin
              </button>

              {/* Admin Info */}
              <div className="text-center text-xs text-slate-500 p-3 bg-slate-50 rounded-lg">
                <p>For admin access, use your assigned Admin ID</p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
