import WindowControls from "#components/WindowControls";
import { projectsList } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";
import {
  ChevronLeft,
  ChevronRight,
  RotateCw,
  Search,
  Lock,
  ExternalLink,
  Copy,
  Check,
  Compass,
  ArrowRight,
  Globe,
  Share2,
  Sparkles,
  Layers,
  PanelLeft,
} from "lucide-react";
import { useState, useEffect, useMemo } from "react";

function Safari() {
  const { windows } = useWindowStore();
  const safariData = windows.safari?.data;

  // Active project URL in the iframe (null = show Projects Showcase)
  const [currentUrl, setCurrentUrl] = useState(null);
  const [inputUrl, setInputUrl] = useState("ashish.dev/projects");
  const [activeProject, setActiveProject] = useState(null);
  const [searchFilter, setSearchFilter] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [iframeKey, setIframeKey] = useState(0);
  const [copied, setCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [lastViewedProject, setLastViewedProject] = useState(null);

  // Sync when Safari is opened with data from Finder or elsewhere
  useEffect(() => {
    if (safariData?.url) {
      openUrl(safariData.url);
    }
  }, [safariData]);

  const openProject = (project) => {
    setActiveProject(project);
    setLastViewedProject(project);
    setCurrentUrl(project.url);
    setInputUrl(project.url);
    setIsLoading(true);
    setIframeKey((prev) => prev + 1);
  };

  const openUrl = (url) => {
    const matched = projectsList.find(
      (p) => p.url === url || p.url.replace(/\/$/, "") === url.replace(/\/$/, "")
    );
    setActiveProject(matched || null);
    if (matched) setLastViewedProject(matched);
    setCurrentUrl(url);
    setInputUrl(url);
    setIsLoading(true);
    setIframeKey((prev) => prev + 1);
  };

  const goToHome = () => {
    setCurrentUrl(null);
    setActiveProject(null);
    setInputUrl("ashish.dev/projects");
  };

  const handleBack = () => {
    if (currentUrl) {
      goToHome();
    }
  };

  const handleForward = () => {
    if (!currentUrl && lastViewedProject) {
      openProject(lastViewedProject);
    }
  };

  const handleUrlSubmit = (e) => {
    e.preventDefault();
    let url = inputUrl.trim();
    if (!url) return;
    if (
      url.toLowerCase() === "ashish.dev/projects" ||
      url.toLowerCase() === "projects" ||
      url === "/"
    ) {
      goToHome();
      return;
    }
    if (!/^https?:\/\//i.test(url)) {
      url = "https://" + url;
    }
    openUrl(url);
  };

  const reloadIframe = () => {
    if (currentUrl) {
      setIsLoading(true);
      setIframeKey((prev) => prev + 1);
    }
  };

  const copyUrl = () => {
    const toCopy = currentUrl || "https://ashish.dev/projects";
    navigator.clipboard?.writeText(toCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Categories list for filter chips
  const categories = useMemo(() => {
    return ["All", "Marketplace & Services", "Enterprise ERP & CRM", "Real Estate & Homestay", "Healthcare SaaS", "FinTech & Stock Trading"];
  }, []);

  const filteredProjects = useMemo(() => {
    return projectsList.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
        project.subtitle.toLowerCase().includes(searchFilter.toLowerCase()) ||
        project.description.toLowerCase().includes(searchFilter.toLowerCase()) ||
        project.tags.some((tag) => tag.toLowerCase().includes(searchFilter.toLowerCase()));

      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchFilter, selectedCategory]);

  return (
    <>
      {/* ─── Safari Window Header / Controls ─────────────────────── */}
      <div id="window-header">
        <WindowControls target="safari" />

        {/* Back / Forward / Refresh Navigation */}
        <div className="flex items-center gap-1.5 ml-4">
          <button
            onClick={handleBack}
            disabled={!currentUrl}
            title={currentUrl ? "Back to Projects list" : "Already at start page"}
            className={`p-1 rounded transition-colors ${
              currentUrl
                ? "text-gray-700 hover:bg-gray-200 cursor-pointer"
                : "text-gray-300 cursor-not-allowed"
            }`}
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={handleForward}
            disabled={Boolean(currentUrl) || !lastViewedProject}
            title={
              !currentUrl && lastViewedProject
                ? `Forward to ${lastViewedProject.title}`
                : "Cannot go forward"
            }
            className={`p-1 rounded transition-colors ${
              !currentUrl && lastViewedProject
                ? "text-gray-700 hover:bg-gray-200 cursor-pointer"
                : "text-gray-300 cursor-not-allowed"
            }`}
          >
            <ChevronRight size={16} />
          </button>
          <button
            onClick={reloadIframe}
            disabled={!currentUrl}
            title="Reload page"
            className={`p-1 rounded transition-colors ${
              currentUrl
                ? "text-gray-700 hover:bg-gray-200 cursor-pointer"
                : "text-gray-300 cursor-not-allowed"
            }`}
          >
            <RotateCw size={14} className={isLoading ? "animate-spin text-blue-600" : ""} />
          </button>
        </div>

        {/* Smart Search / URL Address Bar */}
        <div className="flex-1 flex justify-center px-3">
          <form onSubmit={handleUrlSubmit} className="search max-w-lg w-full">
            {currentUrl ? (
              <Lock className="text-emerald-600 shrink-0" size={13} />
            ) : (
              <Compass className="text-blue-500 shrink-0" size={14} />
            )}
            <input
              type="text"
              value={inputUrl}
              onChange={(e) => setInputUrl(e.target.value)}
              placeholder="Search or enter website name..."
              className="w-full text-xs text-gray-800 bg-transparent outline-none font-mono"
            />
            {currentUrl && (
              <button
                type="button"
                onClick={goToHome}
                title="Go to Projects Home"
                className="text-xs text-gray-400 hover:text-gray-600 px-1"
              >
                ✕
              </button>
            )}
          </form>
        </div>

        {/* Right Toolbar Actions */}
        <div className="flex items-center gap-1 text-gray-600">
          <button
            onClick={copyUrl}
            title="Copy URL"
            className="p-1.5 hover:bg-gray-200 rounded transition-colors"
          >
            {copied ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
          </button>
          {currentUrl && (
            <a
              href={currentUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Open in new browser tab"
              className="p-1.5 hover:bg-gray-200 rounded text-blue-600 transition-colors"
            >
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>

      {/* ─── Safari Favorites / Quick Bookmarks Bar ────────────────── */}
      <div className="flex items-center gap-1 px-3 py-1.5 bg-gray-50 border-b border-gray-200 text-xs overflow-x-auto select-none shrink-0 scrollbar-none">
        <button
          onClick={goToHome}
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-all shrink-0 font-medium ${
            !currentUrl
              ? "bg-blue-100 text-blue-700 shadow-xs"
              : "text-gray-600 hover:bg-gray-200 hover:text-gray-900"
          }`}
        >
          <Compass size={13} />
          <span>All Projects</span>
        </button>

        <div className="w-[1px] h-3.5 bg-gray-300 mx-1 shrink-0" />

        {projectsList.map((project) => {
          const isActive = currentUrl === project.url;
          return (
            <button
              key={project.id}
              onClick={() => openProject(project)}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-all shrink-0 text-xs ${
                isActive
                  ? "bg-blue-600 text-white font-medium shadow-xs"
                  : "text-gray-600 hover:bg-gray-200 hover:text-gray-900"
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  isActive ? "bg-white" : "bg-emerald-500"
                }`}
              />
              <span className="truncate max-w-[130px]">{project.title.split(" ")[0]}</span>
            </button>
          );
        })}
      </div>

      {/* ─── Main Content Area: Iframe OR Projects Showcase ───────── */}
      <div className="flex-1 min-h-0 relative flex flex-col bg-white overflow-hidden">
        {currentUrl ? (
          /* ─── STATE A: Embedded Iframe View ─── */
          <div className="flex-1 min-h-0 flex flex-col w-full h-full">
            {/* Live site banner bar */}
            <div className="flex items-center justify-between px-4 py-1.5 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-100 text-xs text-blue-900 shrink-0">
              <div className="flex items-center gap-2 truncate">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
                <span className="font-semibold truncate">
                  {activeProject?.title || currentUrl}
                </span>
                <span className="text-blue-500 hidden sm:inline">• Live Embedded App</span>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={goToHome}
                  className="text-xs text-gray-500 hover:text-blue-700 hover:underline cursor-pointer"
                >
                  ← Back to Projects
                </button>
                <a
                  href={currentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 font-semibold text-blue-600 hover:text-blue-800 hover:underline"
                >
                  <span>Open in new tab</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

            {/* Iframe Viewport */}
            <div className="relative flex-1 min-h-0 w-full h-full bg-white">
              {isLoading && (
                <div className="absolute inset-0 bg-white/70 backdrop-blur-xs flex items-center justify-center z-10 pointer-events-none">
                  <div className="flex items-center gap-2 text-sm text-gray-600 bg-white px-4 py-2 rounded-lg shadow-md border border-gray-100">
                    <RotateCw size={16} className="animate-spin text-blue-600" />
                    <span>Loading live application...</span>
                  </div>
                </div>
              )}
              <iframe
                key={iframeKey}
                src={currentUrl}
                title={activeProject?.title || "Safari Live Preview"}
                className="w-full h-full border-none"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                onLoad={() => setIsLoading(false)}
              />
            </div>
          </div>
        ) : (
          /* ─── STATE B: Safari Projects Directory & Showcase ─── */
          <div className="flex-1 min-h-0 overflow-y-auto bg-slate-50 p-5 sm:p-7">
            <div className="max-w-4xl mx-auto space-y-6">
              {/* Showcase Hero Header */}
              <div className="bg-white rounded-xl p-5 sm:p-6 shadow-xs border border-gray-200/80">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 text-blue-600 mb-1">
                      <Compass size={18} />
                      <span className="text-xs font-bold uppercase tracking-wider">
                        Ashish Khopde • Projects Directory
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                      Featured Full-Stack Web Applications
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-xl">
                      Click <strong className="text-blue-600">Open in Safari</strong> to test and
                      interact with any application live inside this Safari window.
                    </p>
                  </div>

                  {/* Search input in showcase */}
                  <div className="relative sm:w-64">
                    <Search className="absolute left-3 top-2.5 text-gray-400" size={14} />
                    <input
                      type="text"
                      placeholder="Search projects or stack..."
                      value={searchFilter}
                      onChange={(e) => setSearchFilter(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:bg-white focus:border-blue-400 transition-colors"
                    />
                  </div>
                </div>

                {/* Filter Chips */}
                <div className="flex items-center gap-1.5 mt-4 pt-4 border-t border-gray-100 overflow-x-auto scrollbar-none">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`text-xs px-2.5 py-1 rounded-full transition-colors shrink-0 ${
                        selectedCategory === cat
                          ? "bg-blue-600 text-white font-medium"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pb-6">
                {filteredProjects.map((project) => (
                  <div
                    key={project.id}
                    className="group bg-white rounded-xl border border-gray-200/90 shadow-xs hover:shadow-md hover:border-blue-300 transition-all duration-200 flex flex-col overflow-hidden"
                  >
                    {/* Project Preview Image */}
                    <div
                      onClick={() => openProject(project)}
                      className="relative h-44 w-full bg-gray-100 overflow-hidden cursor-pointer"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <span className="absolute top-3 right-3 text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-white/95 text-gray-800 shadow-xs">
                        {project.badge}
                      </span>
                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <span className="text-[10px] uppercase font-bold tracking-wider text-blue-300">
                          {project.category}
                        </span>
                        <h3 className="text-base font-bold text-white drop-shadow-xs truncate">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                      <div>
                        <p className="text-xs font-medium text-gray-500 mb-1">
                          {project.subtitle}
                        </p>
                        <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">
                          {project.description}
                        </p>
                      </div>

                      {/* Tech stack pills */}
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

                      {/* Action Buttons */}
                      <div className="pt-2 border-t border-gray-100 flex items-center justify-between gap-2">
                        <button
                          onClick={() => openProject(project)}
                          className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg shadow-xs transition-colors cursor-pointer"
                        >
                          <span>Open in Safari</span>
                          <ArrowRight size={13} />
                        </button>
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Open live website in new tab"
                          className="flex items-center justify-center p-2 rounded-lg border border-gray-200 text-gray-600 hover:text-blue-600 hover:bg-blue-50 hover:border-blue-200 transition-colors"
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
    </>
  );
}

const SafariWindow = WindowWrapper(Safari, "safari");

export default SafariWindow;
