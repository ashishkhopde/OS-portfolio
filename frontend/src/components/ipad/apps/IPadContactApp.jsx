import { Phone, Mail, MapPin, Briefcase, GraduationCap, Copy, Check, User } from "lucide-react";
import { useState } from "react";

export default function IPadContactApp() {
  const [copiedField, setCopiedField] = useState(null);

  const copyToClipboard = (text, field) => {
    navigator.clipboard?.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div className="flex-1 min-h-0 flex bg-white overflow-hidden text-gray-800">
      {/* ─── Left Sidebar: Contacts Index ───────────────────────── */}
      <div className="w-72 border-r border-gray-200 bg-gray-50/90 flex flex-col shrink-0 select-none">
        <div className="p-4 border-b border-gray-200 bg-white">
          <h3 className="text-sm font-bold text-gray-900">All Contacts</h3>
          <span className="text-[11px] text-gray-500">1 Contact Card</span>
        </div>

        <div className="p-2 space-y-1">
          <div className="flex items-center gap-3 p-3 rounded-2xl bg-blue-600 text-white shadow-xs cursor-pointer">
            <img
              src="/images/ashish.png"
              alt="Ashish Khopde"
              className="w-10 h-10 rounded-full object-cover border border-white/40 shrink-0"
            />
            <div className="min-w-0">
              <h4 className="text-xs font-bold truncate">Ashish Khopde</h4>
              <p className="text-[10px] text-blue-100 truncate">MERN Stack Developer</p>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Right Pane: Full Contact Card ───────────────────────── */}
      <div className="flex-1 min-h-0 overflow-y-auto p-8 bg-slate-50">
        <div className="max-w-xl mx-auto space-y-6 pb-8">
          {/* Main Card */}
          <div className="bg-white rounded-3xl p-6 border border-gray-200/80 shadow-2xs flex flex-col items-center text-center space-y-4">
            <div className="relative">
              <img
                src="/images/ashish.png"
                alt="Ashish Khopde"
                className="w-24 h-24 rounded-full object-cover shadow-sm border-2 border-white ring-2 ring-blue-500/30"
              />
              <span className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white" />
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900">Ashish Khopde</h2>
              <p className="text-xs font-semibold text-blue-600 mt-0.5">
                MERN Stack Developer | Full Stack Developer
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Quest Digiflex Private Limited • 9 Months Experience
              </p>
            </div>

            {/* 4 iOS Round Quick Action Buttons */}
            <div className="grid grid-cols-4 gap-4 w-full max-w-sm pt-2">
              <a
                href="tel:+917089542024"
                className="flex flex-col items-center gap-1.5 group"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-xs active:scale-90 transition-transform">
                  <img src="/icons/phone.svg" alt="Phone" className="size-5 filter brightness-0 invert" />
                </div>
                <span className="text-xs font-semibold text-gray-700">Call</span>
              </a>

              <a
                href="mailto:ashishkhopde7089@gmail.com"
                className="flex flex-col items-center gap-1.5 group"
              >
                <div className="w-12 h-12 rounded-full bg-red-500 text-white flex items-center justify-center shadow-xs active:scale-90 transition-transform">
                  <img src="/icons/mail.svg" alt="Email" className="size-5 filter brightness-0 invert" />
                </div>
                <span className="text-xs font-semibold text-gray-700">Email</span>
              </a>

              <a
                href="https://www.linkedin.com/in/ashishkhopde"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1.5 group"
              >
                <div className="w-12 h-12 rounded-full bg-[#0077b5] text-white flex items-center justify-center shadow-xs active:scale-90 transition-transform">
                  <img src="/icons/linkedin.svg" alt="LinkedIn" className="size-5 filter brightness-0 invert" />
                </div>
                <span className="text-xs font-semibold text-gray-700">LinkedIn</span>
              </a>

              <a
                href="https://github.com/ashishkhopde"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1.5 group"
              >
                <div className="w-12 h-12 rounded-full bg-[#24292e] text-white flex items-center justify-center shadow-xs active:scale-90 transition-transform">
                  <img src="/icons/github.svg" alt="GitHub" className="size-5 filter brightness-0 invert" />
                </div>
                <span className="text-xs font-semibold text-gray-700">GitHub</span>
              </a>
            </div>
          </div>

          {/* Details Box */}
          <div className="bg-white rounded-2xl border border-gray-200/80 shadow-2xs divide-y divide-gray-100 overflow-hidden text-xs">
            <div className="p-4 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-medium text-gray-400 uppercase">Phone Number</p>
                <a href="tel:+917089542024" className="text-sm font-semibold text-blue-600 hover:underline">
                  +91-7089542024
                </a>
              </div>
              <button
                onClick={() => copyToClipboard("+917089542024", "phone")}
                className="p-2 rounded-xl text-gray-400 hover:text-gray-700 hover:bg-gray-100"
              >
                {copiedField === "phone" ? <Check size={16} className="text-emerald-600" /> : <Copy size={16} />}
              </button>
            </div>

            <div className="p-4 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-medium text-gray-400 uppercase">Email Address</p>
                <a href="mailto:ashishkhopde7089@gmail.com" className="text-sm font-semibold text-blue-600 hover:underline">
                  ashishkhopde7089@gmail.com
                </a>
              </div>
              <button
                onClick={() => copyToClipboard("ashishkhopde7089@gmail.com", "email")}
                className="p-2 rounded-xl text-gray-400 hover:text-gray-700 hover:bg-gray-100"
              >
                {copiedField === "email" ? <Check size={16} className="text-emerald-600" /> : <Copy size={16} />}
              </button>
            </div>

            <div className="p-4 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-medium text-gray-400 uppercase">Current Location</p>
                <p className="text-sm font-semibold text-gray-800">India (Available for Remote / Relocation)</p>
              </div>
              <MapPin size={18} className="text-gray-400" />
            </div>
          </div>

          {/* Personal Bio Note */}
          <div className="bg-white rounded-2xl p-5 border border-gray-200/80 shadow-2xs space-y-2 text-xs">
            <h4 className="font-bold text-gray-900 text-sm">Professional Summary</h4>
            <p className="text-gray-600 leading-relaxed">
              Looking for a MERN Stack or Full Stack Developer who builds robust, scalable web applications with clean architecture and real-world third-party integrations? Let's connect!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

