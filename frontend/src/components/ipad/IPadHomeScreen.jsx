import dayjs from "dayjs";
import { Settings, ArrowRight } from "lucide-react";

export default function IPadHomeScreen({ onOpenApp }) {
  const currentDate = dayjs().format("dddd, MMMM D");

  // Balanced 4x2 grid of apps (8 apps total: 4 on row 1, 4 on row 2)
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
    { id: "skills", name: "Terminal", icon: "/images/terminal.png" },
    { id: "photos", name: "Photos", icon: "/images/photos.png" },
  ];

  return (
    <div className="flex-1 min-h-0 flex flex-col justify-between px-6 pt-3 pb-1 text-white select-none overflow-hidden">
      {/* ─── Top iPad Wide Widgets Shelf (3 columns) ──────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 shrink-0 max-w-4xl mx-auto w-full">
        {/* Widget 1: Developer Profile Card */}
        <div
          onClick={() => onOpenApp("settings")}
          className="bg-white/20 hover:bg-white/25 backdrop-blur-xl border border-white/30 rounded-3xl p-3.5 shadow-lg flex flex-col justify-between cursor-pointer active:scale-98 transition-all h-36"
        >
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src="/images/ashish.png"
                alt="Ashish Khopde"
                className="w-11 h-11 rounded-full object-cover border-2 border-white/60 shadow-xs"
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border border-black/40" />
            </div>
            <div className="min-w-0">
              <h3 className="text-xs font-bold text-white truncate drop-shadow-xs">
                Ashish Khopde
              </h3>
              <p className="text-[11px] text-blue-200 font-medium truncate">
                MERN Stack Developer
              </p>
              <p className="text-[10px] text-white/75 truncate">Quest Digiflex</p>
            </div>
          </div>

          <div className="space-y-0.5">
            <span className="inline-block text-[9px] font-semibold bg-emerald-500/80 text-white px-2 py-0.5 rounded-full backdrop-blur-xs">
              Open to Opportunities
            </span>
            <p className="text-[10px] text-white/85 font-medium">
              India • 9 Months Experience
            </p>
          </div>
        </div>

        {/* Widget 2: Portfolio Stats & Date */}
        <div
          onClick={() => onOpenApp("skills")}
          className="bg-white/20 hover:bg-white/25 backdrop-blur-xl border border-white/30 rounded-3xl p-3.5 shadow-lg flex flex-col justify-between cursor-pointer active:scale-98 transition-all h-36"
        >
          <div>
            <p className="text-[10px] font-semibold text-white/70 uppercase tracking-wider">
              {currentDate}
            </p>
            <h4 className="text-sm font-bold text-white mt-0.5 drop-shadow-xs">
              System Metrics
            </h4>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="bg-black/25 rounded-xl p-1.5 text-center">
              <span className="text-base font-extrabold text-white block leading-none">5</span>
              <span className="text-[9px] text-white/75 font-medium">Full-Stack Apps</span>
            </div>
            <div className="bg-black/25 rounded-xl p-1.5 text-center">
              <span className="text-base font-extrabold text-emerald-400 block leading-none">8</span>
              <span className="text-[9px] text-white/75 font-medium">Tech Categories</span>
            </div>
          </div>
        </div>

        {/* Widget 3: Featured Spotlight (EKONN Light CRM) */}
        <div
          onClick={() => onOpenApp("projects")}
          className="bg-white/20 hover:bg-white/25 backdrop-blur-xl border border-white/30 rounded-3xl p-3.5 shadow-lg flex flex-col justify-between cursor-pointer active:scale-98 transition-all h-36 hidden sm:flex"
        >
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-wider text-blue-200">
              Featured App
            </span>
            <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/80 text-white">
              Live
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <img
              src="/images/ekonn.png"
              alt="EKONN"
              className="w-10 h-10 rounded-xl object-cover border border-white/30 shrink-0"
            />
            <div className="min-w-0">
              <h4 className="text-xs font-bold text-white truncate">EKONN Light CRM</h4>
              <p className="text-[10px] text-white/80 line-clamp-2 leading-tight">
                Lumina ERP Architectural Lighting Platform
              </p>
            </div>
          </div>

          <div className="flex items-center text-[10px] font-semibold text-blue-200 gap-1">
            <span>Explore Workspace</span>
            <ArrowRight size={11} />
          </div>
        </div>
      </div>

      {/* ─── Balanced iPad App Grid: 4 columns x 2 rows (Centered) ─── */}
      <div className="grid grid-cols-4 gap-y-5 gap-x-6 sm:gap-x-12 max-w-xl mx-auto w-full my-auto py-2">
        {appIcons.map((app) => (
          <button
            key={app.id}
            onClick={() => onOpenApp(app.id)}
            className="flex flex-col items-center gap-1.5 group cursor-pointer active:scale-90 transition-transform duration-150"
          >
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

            <span className="text-[11px] font-medium text-white drop-shadow-md tracking-tight">
              {app.name}
            </span>
          </button>
        ))}
      </div>

      {/* ─── iPad Floating Frosted Glass Dock ─────────────────────── */}
      <div className="bg-white/25 backdrop-blur-2xl border border-white/30 rounded-[30px] px-6 py-2.5 shadow-2xl flex items-center justify-center gap-3.5 shrink-0 max-w-md mx-auto mb-1">
        {dockIcons.map((app) => (
          <button
            key={`ipad_dock_${app.id}`}
            onClick={() => onOpenApp(app.id)}
            className="flex flex-col items-center cursor-pointer active:scale-90 transition-transform duration-150"
            title={app.name}
          >
            <div className="w-12 h-12 rounded-[22%] bg-white/25 backdrop-blur-md shadow-md flex items-center justify-center p-2 overflow-hidden border border-white/40 hover:scale-105 transition-transform">
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
