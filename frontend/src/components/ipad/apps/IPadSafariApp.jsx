import { useState } from "react";
import { projectsList } from "#constants";
import {
  Lock,
  RotateCw,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Share2,
  Compass,
  Search,
  ArrowRight,
  Plus,
  X,
} from "lucide-react";

export default function IPadSafariApp({ initialProject = null, onSelectProject }) {
  const [activeTab, setActiveTab] = useState(() => initialProject?.id || "overview");
  const [currentUrl, setCurrentUrl] = useState(() => initialProject?.url || null);
  const [activeProject, setActiveProject] = useState(() => initialProject || null);
  const [searchFilter, setSearchFilter] = useState("");
  const [iframeKey, setIframeKey] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const selectProjectTab = (project) => {
    setActiveTab(project.id);
    setActiveProject(project);
    setCurrentUrl(project.url);
    setIsLoading(true);
    setIframeKey((prev) => prev + 1);
    if (onSelectProject) onSelectProject(project);
  };

  const selectOverviewTab = () => {
    setActiveTab("overview");
    setCurrentUrl(null);
    setActiveProject(null);
  };

  const reloadIframe = () => {
    if (currentUrl) {
      setIsLoading(true);
      setIframeKey((prev) => prev + 1);
    }
  };

  const filteredProjects = projectsList.filter((project) => {
    const q = searchFilter.toLowerCase();
    return (
      project.title.toLowerCase().includes(q) ||
      project.subtitle.toLowerCase().includes(q) ||
      project.description.toLowerCase().includes(q) ||
      project.tags.some((t) => t.toLowerCase().includes(q))
    );
  });

  return (
    <div className="flex-1 min-h-0 flex flex-col bg-white overflow-hidden text-gray-800">
      {/* ─── iPad Safari Tabs Bar ───────────────────────────────── */}
      <div className="flex items-center bg-gray-200/80 px-2 pt-1.5 border-b border-gray-300/80 gap-1 overflow-x-auto scrollbar-none select-none shrink-0">
        {/* Overview Tab */}
        <div
          onClick={selectOverviewTab}
          className={`flex items-center gap-2 px-3.5 py-1.5 rounded-t-xl text-xs font-semibold cursor-pointer transition-all max-w-[170px] truncate ${
            activeTab === "overview"
              ? "bg-white text-gray-900 shadow-xs border-t border-x border-gray-300/60"
              : "text-gray-600 hover:bg-gray-100/60"
          }`}
        >
          <Compass size={13} className="text-blue-600 shrink-0" />
          <span className="truncate">Projects Overview</span>
        </div>

        {/* Project Tabs */}
        {projectsList.map((project) => {
          const isActive = activeTab === project.id;
          return (
            <div
              key={project.id}
              onClick={() => selectProjectTab(project)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-t-xl text-xs font-medium cursor-pointer transition-all max-w-[160px] truncate ${
                isActive
                  ? "bg-white text-gray-900 shadow-xs border-t border-x border-gray-300/60 font-semibold"
                  : "text-gray-600 hover:bg-gray-100/60"
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${isActive ? "bg-emerald-500" : "bg-gray-400"}`} />
              <span className="truncate">{project.title.split(" ")[0]}</span>
            </div>
          );
        })}
      </div>

      {/* ─── iPad Safari Address & Navigation Bar ────────────────── */}
      <div className="px-4 py-2 bg-gray-100/90 border-b border-gray-200 flex items-center gap-3 shrink-0">
        <div className="flex items-center gap-1 text-gray-600">
          <button
            onClick={selectOverviewTab}
            disabled={activeTab === "overview"}
            className={`p-1.5 rounded hover:bg-gray-200 transition-colors ${
              activeTab !== "overview" ? "text-gray-700 cursor-pointer" : "text-gray-300"
            }`}
            title="Back to Overview"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            disabled={true}
            className="p-1.5 rounded text-gray-300"
          >
            <ChevronRight size={18} />
          </button>
          <button
            onClick={reloadIframe}
            disabled={!currentUrl}
            className={`p-1.5 rounded transition-colors ${
              currentUrl ? "text-gray-700 hover:bg-gray-200 cursor-pointer" : "text-gray-300"
            }`}
            title="Reload"
          >
            <RotateCw size={14} className={isLoading ? "animate-spin text-blue-600" : ""} />
          </button>
        </div>

        {/* Smart Address Bar */}
        <div className="flex-1 flex justify-center">
          <div className="w-full max-w-xl bg-white border border-gray-200 rounded-xl px-3 py-1.5 flex items-center gap-2 shadow-2xs">
            <Lock size={13} className={currentUrl ? "text-emerald-600" : "text-gray-400"} />
            <span className="flex-1 text-xs font-mono text-gray-800 truncate text-center">
              {currentUrl ? currentUrl : "ashish.dev/projects"}
            </span>
            {currentUrl && (
              <a
                href={currentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
                title="Open in external browser window"
              >
                <ExternalLink size={13} />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* ─── Safari Viewport: Iframe OR Showcase ─────────────────── */}
      <div className="flex-1 min-h-0 relative flex flex-col overflow-hidden bg-slate-50">
        {currentUrl ? (
          /* Live Iframe View */
          <div className="flex-1 min-h-0 flex flex-col w-full h-full">
            <div className="px-4 py-1.5 bg-blue-50 border-b border-blue-100 flex items-center justify-between text-xs text-blue-900 shrink-0">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="font-semibold">{activeProject?.title || "Live Web Application"}</span>
                <span className="text-blue-500 hidden sm:inline">• Live Embedded Interactive Preview</span>
              </div>
              <a
                href={currentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 font-semibold text-blue-600 hover:underline"
              >
                <span>Launch in new window</span>
                <ExternalLink size={12} />
              </a>
            </div>

            <div className="relative flex-1 min-h-0 w-full h-full bg-white">
              {isLoading && (
                <div className="absolute inset-0 bg-white/70 backdrop-blur-xs flex items-center justify-center z-10 pointer-events-none">
                  <div className="flex items-center gap-2 text-xs text-gray-600 bg-white px-4 py-2 rounded-xl shadow-md border border-gray-100">
                    <RotateCw size={15} className="animate-spin text-blue-600" />
                    <span>Loading live application...</span>
                  </div>
                </div>
              )}
              <iframe
                key={iframeKey}
                src={currentUrl}
                title={activeProject?.title || "Safari Live View"}
                className="w-full h-full border-none"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                onLoad={() => setIsLoading(false)}
              />
            </div>
          </div>
        ) : (
          /* Showcase Overview */
          <div className="flex-1 min-h-0 overflow-y-auto p-6 space-y-6">
            <div className="max-w-4xl mx-auto space-y-6">
              {/* Top Banner */}
              <div className="bg-white rounded-2xl p-5 border border-gray-200/80 shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-blue-600 text-xs font-bold uppercase tracking-wider mb-1">
                    <Compass size={16} />
                    <span>iPadOS Web Suite</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                    Featured Full-Stack Web Applications
                  </h3>
                  <p className="text-xs text-gray-600 mt-0.5">
                    Select any project to open in an iPad Safari tab with live interactive previews.
                  </p>
                </div>

                <div className="relative w-full sm:w-64">
                  <Search className="absolute left-3 top-2.5 text-gray-400" size={14} />
                  <input
                    type="text"
                    value={searchFilter}
                    onChange={(e) => setSearchFilter(e.target.value)}
                    placeholder="Search projects or stack..."
                    className="w-full pl-9 pr-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:border-blue-400"
                  />
                </div>
              </div>

              {/* Grid of Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pb-8">
                {filteredProjects.map((project) => (
                  <div
                    key={project.id}
                    className="bg-white rounded-2xl border border-gray-200/80 shadow-2xs overflow-hidden flex flex-col hover:border-blue-300 hover:shadow-md transition-all duration-200 group"
                  >
                    <div
                      onClick={() => selectProjectTab(project)}
                      className="relative h-44 w-full bg-gray-100 overflow-hidden cursor-pointer"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      <span className="absolute top-3 right-3 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-white/95 text-gray-900 shadow-2xs">
                        {project.badge}
                      </span>
                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-blue-300">
                          {project.category}
                        </p>
                        <h4 className="text-base font-bold text-white drop-shadow-2xs truncate">
                          {project.title}
                        </h4>
                      </div>
                    </div>

                    <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                      <div>
                        <p className="text-xs font-semibold text-blue-600 mb-1">{project.subtitle}</p>
                        <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-medium bg-gray-100 text-gray-700 px-2 py-0.5 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="pt-2 border-t border-gray-100 flex items-center gap-2">
                        <button
                          onClick={() => selectProjectTab(project)}
                          className="flex-1 py-2 px-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 shadow-2xs transition-colors cursor-pointer"
                        >
                          <span>Open in Tab</span>
                          <ArrowRight size={13} />
                        </button>
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-xl border border-gray-200 text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                          title="Open live website"
                        >
                          <ExternalLink size={14} />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

