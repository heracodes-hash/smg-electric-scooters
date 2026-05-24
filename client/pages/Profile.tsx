import { Card } from "@/components/ui/card";
import { User, Mail, Phone, MapPin, Calendar, Building2, Edit2 } from "lucide-react";

export default function Profile() {
  const userInfo = {
    name: "Rajesh Kumar",
    email: "rajesh.kumar@smg.com",
    phone: "+91 98765 43210",
    location: "Mumbai, India",
    joinDate: "January 15, 2022",
    department: "Engineering",
    position: "Senior Developer",
    avatar: "R",
  };

  return (
    <div className="space-y-6 max-w-2xl">
      {/* Page Title */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">My Profile</h1>
        <p className="text-slate-600 mt-2">Manage your profile information</p>
      </div>

      {/* Profile Header Card */}
      <Card className="p-8 bg-white">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
          <div className="flex items-start gap-6">
            <div className="w-24 h-24 rounded-full flex items-center justify-center text-white text-3xl font-bold" style={{ backgroundColor: "#203864" }}>
              {userInfo.avatar}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-1">
                {userInfo.name}
              </h2>
              <p className="text-slate-600 mb-3">{userInfo.position}</p>
              <div className="inline-block px-3 py-1 text-sm font-medium rounded-full" style={{ backgroundColor: "#203864", color: "white" }}>
                {userInfo.department}
              </div>
            </div>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 text-white rounded-lg transition" style={{ backgroundColor: "#203864" }}>
            <Edit2 className="w-4 h-4" />
            Edit Profile
          </button>
        </div>
      </Card>

      {/* Contact Information */}
      <Card className="p-6 bg-white">
        <h3 className="text-lg font-bold text-slate-900 mb-6">Contact Information</h3>
        <div className="space-y-4">
          {/* Email */}
          <div className="flex items-center gap-4 pb-4 border-b border-slate-200">
            <div className="p-3 rounded-lg" style={{ backgroundColor: "rgba(32, 56, 100, 0.1)" }}>
              <Mail className="w-6 h-6" style={{ color: "#203864" }} />
            </div>
            <div className="flex-1">
              <p className="text-xs font-medium text-slate-600 uppercase">Email</p>
              <p className="text-slate-900">{userInfo.email}</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4 pb-4 border-b border-slate-200">
            <div className="p-3 bg-green-100 rounded-lg">
              <Phone className="w-6 h-6 text-green-600" />
            </div>
            <div className="flex-1">
              <p className="text-xs font-medium text-slate-600 uppercase">Phone</p>
              <p className="text-slate-900">{userInfo.phone}</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-4 pb-4 border-b border-slate-200">
            <div className="p-3 bg-purple-100 rounded-lg">
              <MapPin className="w-6 h-6 text-purple-600" />
            </div>
            <div className="flex-1">
              <p className="text-xs font-medium text-slate-600 uppercase">Location</p>
              <p className="text-slate-900">{userInfo.location}</p>
            </div>
          </div>

          {/* Join Date */}
          <div className="flex items-center gap-4">
            <div className="p-3 bg-orange-100 rounded-lg">
              <Calendar className="w-6 h-6 text-orange-600" />
            </div>
            <div className="flex-1">
              <p className="text-xs font-medium text-slate-600 uppercase">
                Join Date
              </p>
              <p className="text-slate-900">{userInfo.joinDate}</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Employment Details */}
      <Card className="p-6 bg-white">
        <h3 className="text-lg font-bold text-slate-900 mb-6">Employment Details</h3>
        <div className="space-y-4">
          {/* Department */}
          <div className="flex items-center gap-4 pb-4 border-b border-slate-200">
            <div className="p-3 bg-indigo-100 rounded-lg">
              <Building2 className="w-6 h-6 text-indigo-600" />
            </div>
            <div className="flex-1">
              <p className="text-xs font-medium text-slate-600 uppercase">
                Department
              </p>
              <p className="text-slate-900">{userInfo.department}</p>
            </div>
          </div>

          {/* Position */}
          <div className="flex items-center gap-4">
            <div className="p-3 bg-teal-100 rounded-lg">
              <User className="w-6 h-6 text-teal-600" />
            </div>
            <div className="flex-1">
              <p className="text-xs font-medium text-slate-600 uppercase">
                Position
              </p>
              <p className="text-slate-900">{userInfo.position}</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
