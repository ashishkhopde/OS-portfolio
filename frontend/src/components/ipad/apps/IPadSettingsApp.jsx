import { useState } from "react";
import { User, Briefcase, GraduationCap, Code2, Info, ChevronRight, Check } from "lucide-react";

export default function IPadSettingsApp() {
  const [selectedSection, setSelectedSection] = useState("summary");

  const sections = [
    { id: "summary", name: "Professional Summary", icon: User },
    { id: "experience", name: "Work Experience", icon: Briefcase },
    { id: "education", name: "Education", icon: GraduationCap },
    { id: "skills", name: "Target Roles & Tech", icon: Code2 },
    { id: "system", name: "About iPadOS Portfolio", icon: Info },
  ];

  return (
    <div className="flex-1 min-h-0 flex bg-white overflow-hidden text-gray-800 text-xs">
      {/* ─── Left Sidebar: Settings Menu ────────────────────────── */}
      <div className="w-72 border-r border-gray-200 bg-gray-50/90 flex flex-col shrink-0 select-none">
        {/* Profile Card */}
        <div className="p-4 border-b border-gray-200 bg-white flex items-center gap-3">
          <img
            src="/images/ashish.png"
            alt="Ashish Khopde"
            className="w-12 h-12 rounded-full object-cover border border-gray-200 shrink-0 shadow-xs"
          />
          <div className="min-w-0">
            <h4 className="text-xs font-bold text-gray-900 truncate">Ashish Khopde</h4>
            <p className="text-[10px] text-gray-500 truncate">ashishkhopde7089@gmail.com</p>
            <span className="inline-block mt-0.5 text-[9px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
              MERN Developer
            </span>
          </div>
        </div>

        {/* Section List */}
        <div className="p-2 space-y-1">
          {sections.map((sec) => {
            const Icon = sec.icon;
            const isSelected = selectedSection === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => setSelectedSection(sec.id)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl font-medium cursor-pointer transition-colors text-left ${
                  isSelected
                    ? "bg-blue-600 text-white font-bold shadow-xs"
                    : "text-gray-700 hover:bg-gray-200/70"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon size={16} />
                  <span>{sec.name}</span>
                </div>
                <ChevronRight size={13} className={isSelected ? "text-white" : "text-gray-400"} />
              </button>
            );
          })}
        </div>
      </div>

      {/* ─── Right Detail Pane: Settings Details ─────────────────── */}
      <div className="flex-1 min-h-0 overflow-y-auto p-8 bg-slate-50">
        <div className="max-w-xl mx-auto space-y-6 pb-8">
          {selectedSection === "summary" && (
            <div className="bg-white rounded-3xl p-6 border border-gray-200/80 shadow-2xs space-y-4">
              <h3 className="text-base font-bold text-gray-900">Professional Summary</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                MERN Stack Developer with <strong>9 months of professional experience</strong> building full-stack web applications using React.js, Node.js, Express.js, MongoDB, PostgreSQL, and TypeScript.
              </p>
              <p className="text-xs text-gray-600 leading-relaxed">
                Experienced in developing CRM systems, marketplace platforms, property listing & booking applications, stock management platforms, and lead management solutions. Hands-on experience with PostgreSQL, Redis, WebSockets, Docker, JWT authentication, role-based access control, payment gateway integration, Meta Lead Ads API, and RTO API integration.
              </p>
            </div>
          )}

          {selectedSection === "experience" && (
            <div className="space-y-4">
              <h3 className="text-base font-bold text-gray-900">Professional Experience</h3>

              <div className="bg-white rounded-3xl p-6 border border-gray-200/80 shadow-2xs space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-gray-900">MERN Stack Developer</h4>
                  <span className="text-[11px] font-bold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-md">
                    March 2026 – September 2026
                  </span>
                </div>
                <p className="text-xs font-semibold text-gray-600">
                  Quest Digiflex Private Limited — India
                </p>
                <ul className="space-y-1.5 text-xs text-gray-600 pl-1 leading-relaxed">
                  <li>• Developed and maintained full-stack web applications using React.js, Node.js, Express.js, MongoDB, PostgreSQL, and TypeScript.</li>
                  <li>• Designed and integrated RESTful APIs for CRM, marketplace, property management, lead management, and booking workflows.</li>
                  <li>• Implemented JWT authentication, role-based access control (RBAC), and permission-based functionality.</li>
                  <li>• Integrated third-party services including Meta Lead Ads API, RTO vehicle verification API, and payment gateways.</li>
                  <li>• Used Redis for caching, WebSockets for real-time functionality, and Docker for containerized development.</li>
                </ul>
              </div>

              <div className="bg-white rounded-3xl p-6 border border-gray-200/80 shadow-2xs space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-gray-900">MERN Stack Intern</h4>
                  <span className="text-[11px] font-semibold text-gray-500 bg-gray-100 px-2.5 py-0.5 rounded-md">
                    December 2025 – February 2026
                  </span>
                </div>
                <p className="text-xs font-semibold text-gray-600">
                  Quest Digiflex Private Limited — India
                </p>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Assisted in building responsive frontend modules, testing RESTful APIs using Postman, and managing database queries with MongoDB and PostgreSQL.
                </p>
              </div>
            </div>
          )}

          {selectedSection === "education" && (
            <div className="bg-white rounded-3xl p-6 border border-gray-200/80 shadow-2xs space-y-4">
              <h3 className="text-base font-bold text-gray-900">Education & Academics</h3>

              <div className="space-y-2 border-b border-gray-100 pb-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-gray-900">B.Tech in Information Technology</h4>
                  <span className="text-xs font-medium text-gray-500">2022 – 2026</span>
                </div>
                <p className="text-xs text-gray-600 font-medium">
                  Laxmi Narayan College of Technology (LNCT) — Bhopal, India
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-gray-900">Class XII (CBSE)</h4>
                  <span className="text-xs font-medium text-gray-500">2021 – 2022</span>
                </div>
                <p className="text-xs text-gray-600 font-medium">
                  Vidya Vijay Bal Mandir — India
                </p>
              </div>
            </div>
          )}

          {selectedSection === "skills" && (
            <div className="bg-white rounded-3xl p-6 border border-gray-200/80 shadow-2xs space-y-4">
              <h3 className="text-base font-bold text-gray-900">Target Roles</h3>
              <div className="flex flex-wrap gap-2">
                {["MERN Stack Developer", "Full Stack Developer", "React.js Developer", "Node.js Backend Developer", "Junior Software Engineer"].map((role) => (
                  <span key={role} className="bg-blue-50 text-blue-700 font-medium px-3 py-1 rounded-xl text-xs border border-blue-100">
                    {role}
                  </span>
                ))}
              </div>
            </div>
          )}

          {selectedSection === "system" && (
            <div className="bg-white rounded-3xl border border-gray-200/80 shadow-2xs divide-y divide-gray-100 overflow-hidden text-xs">
              <div className="p-4 flex items-center justify-between">
                <span className="text-gray-500">Operating System</span>
                <span className="font-bold text-gray-900">iPadOS 18 Web Edition</span>
              </div>
              <div className="p-4 flex items-center justify-between">
                <span className="text-gray-500">Device Simulator</span>
                <span className="font-bold text-gray-900">iPad Pro 13-inch (M4)</span>
              </div>
              <div className="p-4 flex items-center justify-between">
                <span className="text-gray-500">Tech Stack</span>
                <span className="font-bold text-gray-900">React 19, Tailwind CSS, Vite</span>
              </div>
              <div className="p-4 flex items-center justify-between">
                <span className="text-gray-500">Author & Developer</span>
                <span className="font-bold text-gray-900">Ashish Khopde</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

