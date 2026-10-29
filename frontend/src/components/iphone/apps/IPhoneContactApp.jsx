import { socials } from "#constants";
import { MapPin, Briefcase, GraduationCap, Copy, Check } from "lucide-react";
import { useState } from "react";

export default function IPhoneContactApp() {
  const [copiedField, setCopiedField] = useState(null);

  const copyToClipboard = (text, field) => {
    navigator.clipboard?.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div className="flex-1 min-h-0 overflow-y-auto bg-slate-50 p-4 space-y-4">
      {/* Profile Header Card */}
      <div className="bg-white rounded-3xl p-5 border border-gray-200/80 shadow-2xs flex flex-col items-center text-center space-y-3">
        <div className="relative">
          <img
            src="/images/ashish.png"
            alt="Ashish Khopde"
            className="w-20 h-20 rounded-full object-cover shadow-sm border-2 border-white ring-2 ring-blue-500/30"
          />
          <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white" />
        </div>

        <div>
          <h3 className="text-lg font-bold text-gray-900">Ashish Khopde</h3>
          <p className="text-xs font-semibold text-blue-600 mt-0.5">
            MERN Stack Developer | Full Stack Developer
          </p>
          <p className="text-[11px] text-gray-500 mt-1">
            Quest Digiflex Private Limited • 9 Months Experience
          </p>
        </div>

        {/* 4 iOS Circle Quick Actions */}
        <div className="grid grid-cols-4 gap-3 w-full pt-2">
          {/* Call */}
          <a
            href="tel:+917089542024"
            className="flex flex-col items-center gap-1 group"
          >
            <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-xs active:scale-90 transition-transform">
              <img src="/icons/phone.svg" alt="Phone" className="size-5 filter brightness-0 invert" />
            </div>
            <span className="text-[10px] font-semibold text-gray-700">Call</span>
          </a>

          {/* Email */}
          <a
            href="mailto:ashishkhopde7089@gmail.com"
            className="flex flex-col items-center gap-1 group"
          >
            <div className="w-12 h-12 rounded-full bg-red-500 text-white flex items-center justify-center shadow-xs active:scale-90 transition-transform">
              <img src="/icons/mail.svg" alt="Email" className="size-5 filter brightness-0 invert" />
            </div>
            <span className="text-[10px] font-semibold text-gray-700">Email</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/ashishkhopde"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 group"
          >
            <div className="w-12 h-12 rounded-full bg-[#0077b5] text-white flex items-center justify-center shadow-xs active:scale-90 transition-transform">
              <img src="/icons/linkedin.svg" alt="LinkedIn" className="size-5 filter brightness-0 invert" />
            </div>
            <span className="text-[10px] font-semibold text-gray-700">LinkedIn</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/ashishkhopde"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 group"
          >
            <div className="w-12 h-12 rounded-full bg-[#24292e] text-white flex items-center justify-center shadow-xs active:scale-90 transition-transform">
              <img src="/icons/github.svg" alt="GitHub" className="size-5 filter brightness-0 invert" />
            </div>
            <span className="text-[10px] font-semibold text-gray-700">GitHub</span>
          </a>
        </div>
      </div>

      {/* Details Group */}
      <div className="bg-white rounded-2xl border border-gray-200/80 shadow-2xs divide-y divide-gray-100 overflow-hidden text-xs">
        {/* Phone Item */}
        <div className="p-3.5 flex items-center justify-between">
          <div>
            <p className="text-[10px] font-medium text-gray-400 uppercase">Mobile Phone</p>
            <a href="tel:+917089542024" className="text-xs font-semibold text-blue-600 hover:underline">
              +91-7089542024
            </a>
          </div>
          <button
            onClick={() => copyToClipboard("+917089542024", "phone")}
            className="p-1.5 rounded-lg text-gray-400 hover:text-gray-700 transition-colors"
          >
            {copiedField === "phone" ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
          </button>
        </div>

        {/* Email Item */}
        <div className="p-3.5 flex items-center justify-between">
          <div>
            <p className="text-[10px] font-medium text-gray-400 uppercase">Email Address</p>
            <a href="mailto:ashishkhopde7089@gmail.com" className="text-xs font-semibold text-blue-600 hover:underline">
              ashishkhopde7089@gmail.com
            </a>
          </div>
          <button
            onClick={() => copyToClipboard("ashishkhopde7089@gmail.com", "email")}
            className="p-1.5 rounded-lg text-gray-400 hover:text-gray-700 transition-colors"
          >
            {copiedField === "email" ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
          </button>
        </div>

        {/* Location Item */}
        <div className="p-3.5 flex items-center justify-between">
          <div>
            <p className="text-[10px] font-medium text-gray-400 uppercase">Location</p>
            <p className="text-xs font-medium text-gray-800">India (Available for Remote & Relocation)</p>
          </div>
          <MapPin size={16} className="text-gray-400" />
        </div>
      </div>

      {/* About Note */}
      <div className="bg-white rounded-2xl p-4 border border-gray-200/80 shadow-2xs space-y-2 text-xs">
        <h4 className="font-bold text-gray-900">About Ashish</h4>
        <p className="text-gray-600 leading-relaxed text-[11px]">
          Looking for a MERN Stack or Full Stack Developer who builds robust, scalable web applications with clean architecture and real-world third-party integrations? Let's connect!
        </p>
      </div>
    </div>
  );
}
