import { useState } from "react";
import IPhoneStatusBar from "./IPhoneStatusBar";
import IPhoneHomeScreen from "./IPhoneHomeScreen";
import IPhoneSafariApp from "./apps/IPhoneSafariApp";
import IPhoneProjectsApp from "./apps/IPhoneProjectsApp";
import IPhoneResumeApp from "./apps/IPhoneResumeApp";
import IPhoneSkillsApp from "./apps/IPhoneSkillsApp";
import IPhoneContactApp from "./apps/IPhoneContactApp";
import IPhonePhotosApp from "./apps/IPhonePhotosApp";
import IPhoneArchiveApp from "./apps/IPhoneArchiveApp";
import IPhoneSettingsApp from "./apps/IPhoneSettingsApp";
import { ChevronLeft, Monitor, X } from "lucide-react";

export default function IPhoneView({ isDesktopFrame = false, onSwitchToDesktop }) {
  const [activeApp, setActiveApp] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const appTitles = {
    safari: "Safari",
    projects: "My Projects",
    resume: "Resume",
    skills: "Terminal",
    contact: "Contact",
    photos: "Photos",
    archive: "Archive",
    settings: "Settings",
  };

  const handleOpenApp = (appId) => {
    setActiveApp(appId);
  };

  const handleGoHome = () => {
    setActiveApp(null);
  };

  const handleOpenProjectInSafari = (project) => {
    setSelectedProject(project);
    setActiveApp("safari");
  };

  // Main iPhone screen content
  const screenContent = (
    <div
      className="relative w-full h-full flex-1 min-h-0 flex flex-col overflow-hidden bg-cover bg-center select-none"
      style={{ backgroundImage: "url('/images/wallpaper.png')" }}
    >
      {/* Background Dim / Tint overlay */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />

      {/* iOS Top Status Bar + Dynamic Island */}
      <IPhoneStatusBar isDesktopFrame={isDesktopFrame} />

      {/* Screen Body: Active App View OR Home Screen */}
      <div className="relative z-10 flex-1 min-h-0 flex flex-col overflow-hidden">
        {activeApp ? (
          /* ─── Active App Container ─── */
          <div className="flex-1 min-h-0 flex flex-col bg-white overflow-hidden animate-slideUp">
            {/* iOS App Navigation Header */}
            <div className="h-11 px-3 bg-gray-50/95 border-b border-gray-200/90 flex items-center justify-between text-gray-800 shrink-0 select-none">
              <button
                onClick={handleGoHome}
                className="flex items-center gap-0.5 text-blue-600 font-medium text-xs hover:text-blue-800 active:scale-95 transition-all cursor-pointer"
              >
                <ChevronLeft size={18} />
                <span>Home</span>
              </button>

              <h2 className="text-xs font-bold text-gray-900 tracking-tight">
                {appTitles[activeApp] || "App"}
              </h2>

              <button
                onClick={handleGoHome}
                className="w-6 h-6 rounded-full bg-gray-200/80 hover:bg-gray-300 text-gray-600 flex items-center justify-center cursor-pointer transition-colors"
                title="Close App"
              >
                <X size={13} />
              </button>
            </div>

            {/* App View Content */}
            <div className="flex-1 min-h-0 flex flex-col overflow-hidden">
              {activeApp === "safari" && (
                <IPhoneSafariApp
                  initialProject={selectedProject}
                  onSelectProject={setSelectedProject}
                />
              )}
              {activeApp === "projects" && (
                <IPhoneProjectsApp onOpenInSafari={handleOpenProjectInSafari} />
              )}
              {activeApp === "resume" && <IPhoneResumeApp />}
              {activeApp === "skills" && <IPhoneSkillsApp />}
              {activeApp === "contact" && <IPhoneContactApp />}
              {activeApp === "photos" && <IPhonePhotosApp />}
              {activeApp === "archive" && <IPhoneArchiveApp />}
              {activeApp === "settings" && <IPhoneSettingsApp />}
            </div>
          </div>
        ) : (
          /* ─── iOS Home Screen ─── */
          <IPhoneHomeScreen onOpenApp={handleOpenApp} />
        )}
      </div>

      {/* ─── iOS Home Bar Indicator ─────────────────────────────── */}
      <div
        onClick={handleGoHome}
        className="w-full py-2 flex items-center justify-center cursor-pointer z-30 shrink-0 select-none group"
        title="Tap to return to Home"
      >
        <div
          className={`w-36 h-1 rounded-full transition-all group-hover:scale-105 ${
            activeApp ? "bg-gray-400 group-hover:bg-gray-600" : "bg-white/80 group-hover:bg-white"
          }`}
        />
      </div>
    </div>
  );

  // If in desktop preview mode, wrap inside a sleek iPhone 16 Pro device frame
  if (isDesktopFrame) {
    return (
      <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-xl flex flex-col items-center justify-center p-3 animate-fadeIn">
        {/* Desktop Top Toolbar: Device switcher */}
        <div className="flex items-center gap-3 mb-3 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-white text-xs">
          <span className="font-semibold text-emerald-400">📱 iPhone 16 Pro View</span>
          <span className="text-white/40">•</span>
          {onSwitchToDesktop && (
            <button
              onClick={onSwitchToDesktop}
              className="flex items-center gap-1.5 text-white/90 hover:text-white hover:underline cursor-pointer transition-colors"
            >
              <Monitor size={14} />
              <span>Switch to Mac Desktop</span>
            </button>
          )}
        </div>

        {/* iPhone 16 Pro Device Frame */}
        <div className="relative w-[375px] h-[812px] max-h-[92vh] max-w-[95vw] rounded-[52px] bg-black p-3 shadow-2xl ring-1 ring-white/20 border-4 border-gray-800 flex flex-col overflow-hidden">
          {/* Outer Titanium Bezel highlights */}
          <div className="absolute inset-0 rounded-[48px] pointer-events-none ring-1 ring-white/10" />

          {/* Screen area with curved inner corners */}
          <div className="w-full h-full rounded-[42px] overflow-hidden flex flex-col bg-black">
            {screenContent}
          </div>
        </div>
      </div>
    );
  }

  // Full-screen native mobile view on mobile devices
  return (
    <div className="w-full h-full flex-1 min-h-0 flex flex-col overflow-hidden">
      {screenContent}
    </div>
  );
}
