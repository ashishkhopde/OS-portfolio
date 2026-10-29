import { useState } from "react";
import IPadStatusBar from "./IPadStatusBar";
import IPadHomeScreen from "./IPadHomeScreen";
import IPadSafariApp from "./apps/IPadSafariApp";
import IPadProjectsApp from "./apps/IPadProjectsApp";
import IPadResumeApp from "./apps/IPadResumeApp";
import IPadSkillsApp from "./apps/IPadSkillsApp";
import IPadContactApp from "./apps/IPadContactApp";
import IPadPhotosApp from "./apps/IPadPhotosApp";
import IPadArchiveApp from "./apps/IPadArchiveApp";
import IPadSettingsApp from "./apps/IPadSettingsApp";
import { ChevronLeft, Monitor, X } from "lucide-react";

export default function IPadView({ isDesktopFrame = false, onSwitchToDesktop }) {
  const [activeApp, setActiveApp] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const appTitles = {
    safari: "Safari",
    projects: "My Projects",
    resume: "Resume",
    skills: "Terminal",
    contact: "Contacts",
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

  const screenContent = (
    <div
      className="relative w-full h-full flex-1 min-h-0 flex flex-col overflow-hidden bg-cover bg-center select-none"
      style={{ backgroundImage: "url('/images/wallpaper.png')" }}
    >
      {/* Background Dim */}
      <div className="absolute inset-0 bg-black/15 pointer-events-none" />

      {/* iPad Top Status Bar */}
      <IPadStatusBar isDesktopFrame={isDesktopFrame} />

      {/* Main Screen Body: Active App View OR Home Screen */}
      <div className="relative z-10 flex-1 min-h-0 flex flex-col overflow-hidden">
        {activeApp ? (
          /* ─── Active iPad App Container ─── */
          <div className="flex-1 min-h-0 flex flex-col bg-white overflow-hidden shadow-2xl animate-slideUp">
            {/* iPad App Top Bar with Multitasking Dots */}
            <div className="h-10 px-4 bg-gray-100/95 border-b border-gray-200 flex items-center justify-between text-gray-800 shrink-0 select-none relative">
              {/* Back / Home on Left */}
              <button
                onClick={handleGoHome}
                className="flex items-center gap-1 text-blue-600 font-semibold text-xs hover:text-blue-800 active:scale-95 transition-all cursor-pointer"
              >
                <ChevronLeft size={18} />
                <span>Home</span>
              </button>

              {/* Iconic iPadOS Three Dots Multitasking Pill in Center */}
              <div
                className="absolute left-1/2 -translate-x-1/2 flex items-center gap-1 px-2.5 py-1 rounded-full hover:bg-gray-200/80 cursor-pointer transition-colors"
                title="iPad Multitasking"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-gray-600" />
                <div className="w-1.5 h-1.5 rounded-full bg-gray-600" />
                <div className="w-1.5 h-1.5 rounded-full bg-gray-600" />
              </div>

              {/* Title & Close Button on Right */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-gray-700 hidden sm:inline">
                  {appTitles[activeApp] || "App"}
                </span>
                <button
                  onClick={handleGoHome}
                  className="w-6 h-6 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-600 flex items-center justify-center cursor-pointer transition-colors"
                  title="Close App"
                >
                  <X size={13} />
                </button>
              </div>
            </div>

            {/* App View Content */}
            <div className="flex-1 min-h-0 flex flex-col overflow-hidden">
              {activeApp === "safari" && (
                <IPadSafariApp
                  initialProject={selectedProject}
                  onSelectProject={setSelectedProject}
                />
              )}
              {activeApp === "projects" && (
                <IPadProjectsApp onOpenInSafari={handleOpenProjectInSafari} />
              )}
              {activeApp === "resume" && <IPadResumeApp />}
              {activeApp === "skills" && <IPadSkillsApp />}
              {activeApp === "contact" && <IPadContactApp />}
              {activeApp === "photos" && <IPadPhotosApp />}
              {activeApp === "archive" && <IPadArchiveApp />}
              {activeApp === "settings" && <IPadSettingsApp />}
            </div>
          </div>
        ) : (
          /* ─── iPad Home Screen ─── */
          <IPadHomeScreen onOpenApp={handleOpenApp} />
        )}
      </div>

      {/* ─── iPad Home Bar Indicator ─────────────────────────────── */}
      <div
        onClick={handleGoHome}
        className="w-full py-2 flex items-center justify-center cursor-pointer z-30 shrink-0 select-none group"
        title="Tap to return to Home"
      >
        <div
          className={`w-48 h-1 rounded-full transition-all group-hover:scale-105 ${
            activeApp ? "bg-gray-400 group-hover:bg-gray-600" : "bg-white/80 group-hover:bg-white"
          }`}
        />
      </div>
    </div>
  );

  // If in desktop preview frame mode, wrap inside a sleek iPad Pro 13-inch frame
  if (isDesktopFrame) {
    return (
      <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-xl flex flex-col items-center justify-center p-4 animate-fadeIn">
        {/* Device Switcher Bar on Desktop */}
        <div className="flex items-center gap-3 mb-3 bg-white/10 backdrop-blur-md px-5 py-1.5 rounded-full border border-white/20 text-white text-xs">
          <span className="font-semibold text-blue-400">📟 iPad Pro 13-inch View</span>
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

        {/* iPad Pro Device Frame */}
        <div className="relative w-[920px] h-[650px] max-h-[88vh] max-w-[95vw] rounded-[36px] bg-[#1a1a1a] p-3.5 shadow-2xl ring-1 ring-white/20 border-4 border-gray-700 flex flex-col overflow-hidden">
          {/* Outer Bezel */}
          <div className="absolute inset-0 rounded-[32px] pointer-events-none ring-1 ring-white/10" />

          {/* iPad Screen */}
          <div className="w-full h-full rounded-[24px] overflow-hidden flex flex-col bg-black">
            {screenContent}
          </div>
        </div>
      </div>
    );
  }

  // Full-screen native tablet view (fills 100% of viewport edge-to-edge)
  return (
    <div className="w-full h-full flex-1 min-h-0 flex flex-col overflow-hidden">
      {screenContent}
    </div>
  );
}
