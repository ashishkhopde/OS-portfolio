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
  Globe,
  Sparkles,
} from "lucide-react";

export default function IPhoneSafariApp({ initialProject = null, onSelectProject }) {
  const [currentUrl, setCurrentUrl] = useState(() => initialProject?.url || null);
  const [activeProject, setActiveProject] = useState(() => initialProject || null);
  const [searchFilter, setSearchFilter] = useState("");
  const [iframeKey, setIframeKey] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const openProject = (project) => {
    setActiveProject(project);
    setCurrentUrl(project.url);
    setIsLoading(true);
    setIframeKey((prev) => prev + 1);
    if (onSelectProject) onSelectProject(project);
  };

  const goToOverview = () => {
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
      {/* ─── iOS Safari Address Bar ─────────────────────────────── */}
      <div className="px-3 pt-1 pb-2 bg-gray-100/90 border-b border-gray-200/80 shrink-0 space-y-2">
        <div className="flex items-center gap-2 bg-white rounded-xl px-3 py-1.5 shadow-2xs border border-gray-200/80">
          <Lock size={12} className={currentUrl ? "text-emerald-600" : "text-gray-400"} />
          <span className="flex-1 text-xs font-mono text-gray-800 truncate text-center">
            {currentUrl ? currentUrl.replace(/^https?:\/\//, "") : "ashish.dev/projects"}
          </span>
          <button
            onClick={reloadIframe}
            disabled={!currentUrl}
            className={`p-0.5 rounded text-gray-400 ${
              currentUrl ? "hover:text-gray-700 cursor-pointer" : "opacity-40"
            }`}
          >
            <RotateCw size={12} className={isLoading ? "animate-spin text-blue-600" : ""} />
          </button>
        </div>

        {/* Project Selector Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none py-0.5">
          <button
            onClick={goToOverview}
            className={`px-2.5 py-1 rounded-full text-[11px] font-semibold shrink-0 transition-colors ${
              !currentUrl
                ? "bg-blue-600 text-white shadow-2xs"
                : "bg-gray-200/80 text-gray-700 hover:bg-gray-300"
            }`}
          >
            All Projects
          </button>
          {projectsList.map((p) => {
            const isSelected = currentUrl === p.url;
            return (
              <button
                key={p.id}
                onClick={() => openProject(p)}
                className={`px-2.5 py-1 rounded-full text-[11px] font-medium shrink-0 transition-colors flex items-center gap-1.5 ${
                  isSelected
                    ? "bg-blue-600 text-white font-semibold shadow-2xs"
                    : "bg-gray-200/80 text-gray-700 hover:bg-gray-300"
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    isSelected ? "bg-white" : "bg-emerald-500"
                  }`}
                />
                <span className="truncate max-w-[100px]">{p.title.split(" ")[0]}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ─── Safari Viewport: Iframe OR Projects Showcase ─────────── */}
      <div className="flex-1 min-h-0 relative flex flex-col overflow-hidden bg-slate-50">
        {currentUrl ? (
          /* Live Iframe View */
          <div className="flex-1 min-h-0 flex flex-col w-full h-full">
            {/* Live app status bar */}
            <div className="px-3 py-1.5 bg-blue-50/90 border-b border-blue-100 flex items-center justify-between text-[11px] text-blue-800 shrink-0">
              <div className="flex items-center gap-1.5 truncate">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
                <span className="font-semibold truncate">{activeProject?.title || "Live Web App"}</span>
              </div>
              <a
                href={currentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-blue-600 font-semibold hover:underline shrink-0"
              >
                <span>Full Site</span>
                <ExternalLink size={11} />
              </a>
            </div>

            {/* Embedded Iframe */}
            <div className="relative flex-1 min-h-0 w-full h-full bg-white">
              {isLoading && (
                <div className="absolute inset-0 bg-white/70 backdrop-blur-2xs flex items-center justify-center z-10 pointer-events-none">
                  <div className="flex items-center gap-2 text-xs text-gray-600 bg-white px-3 py-1.5 rounded-lg shadow-md border border-gray-100">
                    <RotateCw size={14} className="animate-spin text-blue-600" />
                    <span>Loading live app...</span>
                  </div>
                </div>
              )}
              <iframe
                key={iframeKey}
                src={currentUrl}
                title={activeProject?.title || "Live Preview"}
                className="w-full h-full border-none"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                onLoad={() => setIsLoading(false)}
              />
            </div>
          </div>
        ) : (
          /* Projects Directory Feed */
          <div className="flex-1 min-h-0 overflow-y-auto p-4 space-y-4">
            {/* Search Box */}
            <div className="relative">
              <Search className="absolute left-3 top-2.5 text-gray-400" size={14} />
              <input
                type="text"
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                placeholder="Search web applications..."
                className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 shadow-2xs"
              />
            </div>

            {/* Cards List */}
            <div className="space-y-4 pb-6">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-2xl border border-gray-200/80 shadow-2xs overflow-hidden flex flex-col"
                >
                  <div
                    onClick={() => openProject(project)}
                    className="relative h-40 w-full bg-gray-100 cursor-pointer overflow-hidden"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <span className="absolute top-2.5 right-2.5 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white/90 text-gray-800 shadow-2xs">
                      {project.badge}
                    </span>
                    <div className="absolute bottom-2.5 left-3 right-3 text-white">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-blue-300">
                        {project.category}
                      </p>
                      <h4 className="text-sm font-bold text-white truncate">
                        {project.title}
                      </h4>
                    </div>
                  </div>

                  <div className="p-3.5 space-y-2.5">
                    <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1">
                      {project.tags.slice(0, 4).map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-medium bg-gray-100 text-gray-700 px-2 py-0.5 rounded-md"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="pt-2 flex items-center gap-2 border-t border-gray-100">
                      <button
                        onClick={() => openProject(project)}
                        className="flex-1 py-2 px-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 shadow-2xs transition-colors cursor-pointer"
                      >
                        <span>Open in Safari</span>
                        <ArrowRight size={13} />
                      </button>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl border border-gray-200 text-gray-600 hover:text-blue-600 transition-colors"
                        title="Open external website"
                      >
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ─── Bottom iOS Safari Toolbar ──────────────────────────── */}
      <div className="h-11 px-4 bg-gray-100/95 border-t border-gray-200/80 flex items-center justify-between text-gray-600 shrink-0">
        <button
          onClick={goToOverview}
          disabled={!currentUrl}
          className={`p-1.5 rounded ${
            currentUrl ? "text-blue-600 active:scale-95" : "text-gray-300"
          }`}
          title="Back to Projects"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          disabled={Boolean(currentUrl)}
          className={`p-1.5 rounded ${
            !currentUrl ? "text-gray-300" : "text-blue-600 active:scale-95"
          }`}
        >
          <ChevronRight size={20} />
        </button>

        {currentUrl ? (
          <a
            href={currentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 text-blue-600 hover:text-blue-800"
            title="Open in real new tab"
          >
            <ExternalLink size={18} />
          </a>
        ) : (
          <Compass size={18} className="text-gray-400" />
        )}
      </div>
    </div>
  );
}

