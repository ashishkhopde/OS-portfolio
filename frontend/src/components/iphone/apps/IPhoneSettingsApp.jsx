import { User, Briefcase, GraduationCap, ShieldCheck, ChevronRight, Info } from "lucide-react";

export default function IPhoneSettingsApp() {
  return (
    <div className="flex-1 min-h-0 overflow-y-auto bg-slate-100 p-4 space-y-5 text-gray-800 text-xs">
      {/* Apple ID Profile Card */}
      <div className="bg-white rounded-2xl p-4 border border-gray-200/80 shadow-2xs flex items-center gap-3.5">
        <img
          src="/images/ashish.png"
          alt="Ashish Khopde"
          className="w-14 h-14 rounded-full object-cover border border-gray-200 shrink-0 shadow-xs"
        />
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-bold text-gray-900 truncate">Ashish Khopde</h3>
          <p className="text-[11px] text-gray-500 truncate">ashishkhopde7089@gmail.com</p>
          <span className="inline-block mt-1 text-[10px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">
            MERN Stack Developer
          </span>
        </div>
      </div>

      {/* Professional Summary Group */}
      <div className="space-y-1.5">
        <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 px-3">
          Professional Summary
        </span>
        <div className="bg-white rounded-2xl p-4 border border-gray-200/80 shadow-2xs space-y-2">
          <p className="text-xs text-gray-700 leading-relaxed">
            MERN Stack Developer with <strong>9 months of professional experience</strong> building full-stack web applications using React.js, Node.js, Express.js, MongoDB, PostgreSQL, and TypeScript.
          </p>
          <p className="text-[11px] text-gray-600 leading-relaxed">
            Experienced in developing CRM systems, marketplace platforms, property listing & booking applications, stock management platforms, and lead management solutions.
          </p>
        </div>
      </div>

      {/* Work Experience Group */}
      <div className="space-y-1.5">
        <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 px-3">
          Work Experience
        </span>
        <div className="bg-white rounded-2xl border border-gray-200/80 shadow-2xs divide-y divide-gray-100 overflow-hidden">
          {/* Job 1 */}
          <div className="p-3.5 space-y-1">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold text-gray-900">MERN Stack Developer</h4>
              <span className="text-[10px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                Mar 2026 – Sep 2026
              </span>
            </div>
            <p className="text-[11px] font-medium text-gray-600">
              Quest Digiflex Private Limited — India
            </p>
            <p className="text-[11px] text-gray-500 leading-relaxed pt-1">
              Developed full-stack web applications using React, Node, Express, MongoDB, PostgreSQL. Designed RESTful APIs for CRM, marketplace, property, and lead management workflows.
            </p>
          </div>

          {/* Job 2 */}
          <div className="p-3.5 space-y-1">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold text-gray-900">MERN Stack Intern</h4>
              <span className="text-[10px] font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                Dec 2025 – Feb 2026
              </span>
            </div>
            <p className="text-[11px] font-medium text-gray-600">
              Quest Digiflex Private Limited — India
            </p>
            <p className="text-[11px] text-gray-500 leading-relaxed pt-1">
              Assisted senior engineering team with React UI components, API endpoints, authentication, and database schemas.
            </p>
          </div>
        </div>
      </div>

      {/* Education Group */}
      <div className="space-y-1.5">
        <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 px-3">
          Education
        </span>
        <div className="bg-white rounded-2xl p-3.5 border border-gray-200/80 shadow-2xs space-y-1">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold text-gray-900">B.Tech in Information Technology</h4>
            <span className="text-[10px] font-medium text-gray-500">2022 – 2026</span>
          </div>
          <p className="text-[11px] text-gray-600">
            Laxmi Narayan College of Technology (LNCT) — Bhopal, India
          </p>
        </div>
      </div>

      {/* System Version Group */}
      <div className="space-y-1.5 pb-6">
        <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 px-3">
          About Portfolio
        </span>
        <div className="bg-white rounded-2xl border border-gray-200/80 shadow-2xs divide-y divide-gray-100 overflow-hidden">
          <div className="p-3 flex items-center justify-between">
            <span className="text-gray-500">System</span>
            <span className="font-semibold text-gray-800">iOS 18 Web Edition</span>
          </div>
          <div className="p-3 flex items-center justify-between">
            <span className="text-gray-500">Framework</span>
            <span className="font-semibold text-gray-800">React 19 + Tailwind CSS + Vite</span>
          </div>
          <div className="p-3 flex items-center justify-between">
            <span className="text-gray-500">Developer</span>
            <span className="font-semibold text-gray-800">Ashish Khopde</span>
          </div>
        </div>
      </div>
    </div>
  );
}

