import { Card } from "@/components/ui/card";
import { Building2, MapPin, Phone, Mail, Users, Clock } from "lucide-react";

export default function Facilities() {
  const facilities = [
    {
      id: 1,
      name: "Main Office - Mumbai",
      location: "Bandra, Mumbai, Maharashtra",
      contact: "+91 98765 43210",
      email: "main@smg.com",
      capacity: "250",
      hours: "8:00 AM - 6:00 PM",
    },
    {
      id: 2,
      name: "Branch Office - Bangalore",
      location: "Whitefield, Bangalore, Karnataka",
      contact: "+91 98765 43211",
      email: "branch@smg.com",
      capacity: "100",
      hours: "9:00 AM - 5:00 PM",
    },
    {
      id: 3,
      name: "Cafeteria & Lounge",
      location: "Ground Floor, Main Building",
      contact: "+91 98765 43212",
      email: "cafe@smg.com",
      capacity: "80",
      hours: "7:00 AM - 7:00 PM",
    },
    {
      id: 4,
      name: "Meeting Room A",
      location: "3rd Floor, Main Office",
      contact: "Ext. 2001",
      email: "meetingrooms@smg.com",
      capacity: "20",
      hours: "Available 24/7",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Page Title */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Facilities</h1>
        <p className="text-slate-600 mt-2">
          View information about company facilities
        </p>
      </div>

      {/* Facilities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {facilities.map((facility) => (
          <Card key={facility.id} className="p-6 bg-white hover:shadow-md transition">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <Building2 className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {facility.name}
                </h3>
              </div>
            </div>

            <div className="space-y-3">
              {/* Location */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs font-medium text-slate-600 uppercase">
                    Location
                  </p>
                  <p className="text-slate-900">{facility.location}</p>
                </div>
              </div>

              {/* Contact */}
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs font-medium text-slate-600 uppercase">
                    Contact
                  </p>
                  <p className="text-slate-900">{facility.contact}</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs font-medium text-slate-600 uppercase">
                    Email
                  </p>
                  <p className="text-slate-900 break-all">{facility.email}</p>
                </div>
              </div>

              {/* Capacity */}
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs font-medium text-slate-600 uppercase">
                    Capacity
                  </p>
                  <p className="text-slate-900">{facility.capacity} people</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs font-medium text-slate-600 uppercase">
                    Operating Hours
                  </p>
                  <p className="text-slate-900">{facility.hours}</p>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
