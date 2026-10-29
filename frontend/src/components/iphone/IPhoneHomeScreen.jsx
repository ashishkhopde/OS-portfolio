import dayjs from "dayjs";
import { Settings, Sparkles, MapPin, Briefcase } from "lucide-react";

export default function IPhoneHomeScreen({ onOpenApp }) {
  const currentDate = dayjs().format("dddd, MMM D");

  const appIcons = [
    { id: "projects", name: "Projects", icon: "/images/finder.png" },
    { id: "safari", name: "Safari", icon: "/images/safari.png" },
    { id: "resume", name: "Resume", icon: "/images/pdf.png" },
    { id: "skills", name: "Terminal", icon: "/images/terminal.png" },
    { id: "contact", name: "Contact", icon: "/images/contact.png" },
    { id: "photos", name: "Photos", icon: "/images/photos.png" },
    { id: "archive", name: "Archive", icon: "/images/trash.png" },
    { id: "settings", name: "Settings", icon: null, isSettings: true },
  ];

  const dockIcons = [
    { id: "contact", name: "Contact", icon: "/images/contact.png" },
    { id: "safari", name: "Safari", icon: "/images/safari.png" },
    { id: "projects", name: "Projects", icon: "/images/finder.png" },
    { id: "resume", name: "Resume", icon: "/images/pdf.png" },
  ];

  return (
    <div className="flex-1 min-h-0 flex flex-col justify-between px-4 pt-2 pb-1 text-white select-none overflow-y-auto">
      {/* ─── Top iOS 18 Widgets Area ──────────────────────────────── */}
      <div className="grid grid-cols-2 gap-3 shrink-0">
        {/* Left Widget: Ashish Khopde Developer Card */}
        <div
          onClick={() => onOpenApp("settings")}
          className="bg-white/20 hover:bg-white/25 backdrop-blur-xl border border-white/30 rounded-3xl p-3.5 shadow-lg flex flex-col justify-between cursor-pointer active:scale-98 transition-all h-36"
        >
          <div className="flex items-center gap-2">
            <div className="relative">
              <img
                src="/images/ashish.png"
                alt="Ashish Khopde"
                className="w-10 h-10 rounded-full object-cover border border-white/50 shadow-xs"
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border border-black/40" />
            </div>
            <div className="min-w-0">
              <h3 className="text-xs font-bold text-white truncate drop-shadow-xs">
                Ashish Khopde
              </h3>
              <p className="text-[10px] text-blue-200 font-medium truncate">
                MERN Developer
              </p>
            </div>
          </div>

          <div className="space-y-0.5">
            <span className="inline-block text-[9px] font-semibold bg-emerald-500/80 text-white px-2 py-0.5 rounded-full backdrop-blur-xs">
              Open to Roles
            </span>
            <p className="text-[10px] text-white/80 line-clamp-2 leading-tight">
              Quest Digiflex • 9 Mos Exp
            </p>
          </div>
        </div>

        {/* Right Widget: Portfolio Stats */}
        <div
          onClick={() => onOpenApp("projects")}
          className="bg-white/20 hover:bg-white/25 backdrop-blur-xl border border-white/30 rounded-3xl p-3.5 shadow-lg flex flex-col justify-between cursor-pointer active:scale-98 transition-all h-36"
        >
          <div>
            <p className="text-[10px] font-semibold text-white/70 uppercase tracking-wider">
              {currentDate}
            </p>
            <h4 className="text-sm font-bold text-white mt-0.5 drop-shadow-xs">
              Live Portfolio
            </h4>
          </div>

          <div className="grid grid-cols-2 gap-1.5 pt-1">
            <div className="bg-black/20 rounded-xl p-1.5 text-center">
              <span className="text-base font-extrabold text-white block leading-none">5</span>
              <span className="text-[9px] text-white/75 font-medium">Projects</span>
            </div>
            <div className="bg-black/20 rounded-xl p-1.5 text-center">
              <span className="text-base font-extrabold text-emerald-400 block leading-none">9m</span>
              <span className="text-[9px] text-white/75 font-medium">Exp</span>
            </div>
          </div>
        </div>
      </div>

      {/* ─── iOS App Icons Grid (4 columns) ───────────────────────── */}
      <div className="grid grid-cols-4 gap-y-5 gap-x-3 my-auto py-4">
        {appIcons.map((app) => (
          <button
            key={app.id}
            onClick={() => onOpenApp(app.id)}
            className="flex flex-col items-center gap-1.5 group cursor-pointer active:scale-90 transition-transform duration-150"
          >
            {/* iOS App Squircle */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-[22%] bg-white/20 backdrop-blur-md shadow-md flex items-center justify-center p-2.5 overflow-hidden border border-white/30 group-hover:scale-105 transition-transform duration-200">
              {app.isSettings ? (
                <div className="w-full h-full rounded-xl bg-gradient-to-tr from-gray-600 via-gray-500 to-gray-400 flex items-center justify-center shadow-inner">
                  <Settings size={28} className="text-gray-100" />
                </div>
              ) : (
                <img
                  src={app.icon}
                  alt={app.name}
                  className="w-full h-full object-contain drop-shadow-xs"
                />
              )}
            </div>

            {/* App Label */}
            <span className="text-[11px] font-medium text-white drop-shadow-md tracking-tight">
              {app.name}
            </span>
          </button>
        ))}
      </div>

      {/* ─── Pagination Dots ──────────────────────────────────────── */}
      <div className="flex items-center justify-center gap-1.5 my-1 shrink-0">
        <span className="w-1.5 h-1.5 rounded-full bg-white shadow-xs" />
        <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
      </div>

      {/* ─── iOS Translucent Frosted Glass Dock ───────────────────── */}
      <div className="bg-white/25 backdrop-blur-2xl border border-white/30 rounded-[32px] p-3 shadow-2xl flex justify-around items-center shrink-0 mb-1">
        {dockIcons.map((app) => (
          <button
            key={`dock_${app.id}`}
            onClick={() => onOpenApp(app.id)}
            className="flex flex-col items-center cursor-pointer active:scale-90 transition-transform duration-150"
            title={app.name}
          >
            <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-[22%] bg-white/25 backdrop-blur-md shadow-md flex items-center justify-center p-2 overflow-hidden border border-white/40 hover:scale-105 transition-transform">
              <img
                src={app.icon}
                alt={app.name}
                className="w-full h-full object-contain drop-shadow-xs"
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

