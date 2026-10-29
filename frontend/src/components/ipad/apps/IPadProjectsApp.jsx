import { useState } from "react";
import { projectsList } from "#constants";
import { ExternalLink, Compass, ArrowRight, CheckCircle2, ChevronRight, Layers } from "lucide-react";

export default function IPadProjectsApp({ onOpenInSafari }) {
  const [selectedProject, setSelectedProject] = useState(() => projectsList[0]);
  const [searchFilter, setSearchFilter] = useState("");

  const filteredProjects = projectsList.filter((p) => {
    const q = searchFilter.toLowerCase();
    return (
      p.title.toLowerCase().includes(q) ||
      p.subtitle.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q))
    );
  });

  return (
    <div className="flex-1 min-h-0 flex bg-white overflow-hidden text-gray-800">
      {/* ─── Left Sidebar: Projects List ────────────────────────── */}
      <div className="w-72 sm:w-80 border-r border-gray-200 bg-gray-50/90 flex flex-col shrink-0 select-none">
        <div className="p-3 border-b border-gray-200 bg-white/60">
          <input
            type="text"
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
            placeholder="Filter projects..."
            className="w-full px-3 py-1.5 text-xs bg-gray-100 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:border-blue-400"
          />
        </div>

        <div className="flex-1 min-h-0 overflow-y-auto p-2 space-y-1.5">
          {filteredProjects.map((project) => {
            const isSelected = selectedProject.id === project.id;
            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`flex items-center gap-3 p-2.5 rounded-xl cursor-pointer transition-all ${
                  isSelected
                    ? "bg-blue-600 text-white shadow-xs"
                    : "hover:bg-gray-200/70 text-gray-800"
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-12 h-12 rounded-lg object-cover shrink-0 border border-black/10"
                />
                <div className="flex-1 min-w-0">
                  <span
                    className={`text-[9px] font-bold uppercase tracking-wider block ${
                      isSelected ? "text-blue-100" : "text-blue-600"
                    }`}
                  >
                    {project.category.split(" ")[0]}
                  </span>
                  <h4 className="text-xs font-bold truncate leading-tight">
                    {project.title}
                  </h4>
                  <p
                    className={`text-[10px] truncate mt-0.5 ${
                      isSelected ? "text-blue-100" : "text-gray-500"
                    }`}
                  >
                    {project.subtitle}
                  </p>
                </div>
                <ChevronRight
                  size={14}
                  className={`shrink-0 ${isSelected ? "text-white" : "text-gray-400"}`}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* ─── Right Detail Pane: Project 360 Workspace ────────────── */}
      <div className="flex-1 min-h-0 overflow-y-auto p-6 bg-slate-50">
        <div className="max-w-3xl mx-auto space-y-5 pb-8">
          {/* Main Hero Card */}
          <div className="bg-white rounded-3xl overflow-hidden border border-gray-200/90 shadow-2xs">
            <div className="relative h-64 w-full bg-gray-100 overflow-hidden">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <span className="absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full bg-white text-gray-900 shadow-md">
                {selectedProject.badge}
              </span>
              <div className="absolute bottom-4 left-5 right-5 text-white">
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-300">
                  {selectedProject.category}
                </span>
                <h2 className="text-2xl font-bold text-white drop-shadow-xs">
                  {selectedProject.title}
                </h2>
                <p className="text-xs text-blue-100 font-medium mt-0.5">
                  {selectedProject.subtitle}
                </p>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">
                  Executive Overview
                </h4>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                  Technical Stack
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium bg-blue-50 text-blue-700 px-3 py-1 rounded-lg border border-blue-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-3 border-t border-gray-100 flex items-center gap-3">
                <button
                  onClick={() => onOpenInSafari(selectedProject)}
                  className="flex-1 py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
                >
                  <span>Launch in iPad Safari</span>
                  <ArrowRight size={14} />
                </button>
                <a
                  href={selectedProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-4 rounded-xl border border-gray-300 text-gray-700 hover:text-blue-600 hover:bg-blue-50 hover:border-blue-300 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <span>Open Live Site</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Architecture & Engineering Highlights Box */}
          <div className="bg-white rounded-2xl p-5 border border-gray-200/80 shadow-2xs space-y-3">
            <div className="flex items-center gap-2 text-blue-900 font-bold text-sm">
              <Layers size={16} className="text-blue-600" />
              <span>Core Architecture & Workflows</span>
            </div>

            {selectedProject.id === "tractors24" && (
              <ul className="space-y-2 text-xs text-gray-600 pl-1 leading-relaxed">
                <li>• <strong>RTO API Verification:</strong> Government vehicle registry integration to instantly fetch maker, registration date, and ownership authenticity using tractor registration numbers.</li>
                <li>• <strong>Listings & Paid Services:</strong> High-throughput CRUD RESTful APIs for farm equipment listings, verified dealer tags, and auxiliary agricultural services.</li>
                <li>• <strong>Secure Authentication:</strong> Role-based access control and token authentication for sellers, buyers, and administrators.</li>
              </ul>
            )}

            {selectedProject.id === "ekonn" && (
              <ul className="space-y-2 text-xs text-gray-600 pl-1 leading-relaxed">
                <li>• <strong>8-Step Screen Architecture:</strong> Role Switcher Login → Executive KPI Dashboard → Inquiries Pipeline → Projects 360 Workspace → Quotations Engine → Purchase Orders → Multi-Warehouse Inventory → Tax Invoices.</li>
                <li>• <strong>Quotations & TDS Bundling:</strong> Step-by-step proposal builder with line-item discounts, automated 18% GST calculation, dynamic Technical Data Sheet bundling, and historical revision tracking (R0 → R1).</li>
                <li>• <strong>Multi-Warehouse Ledger:</strong> Real-time depot balance monitoring, stock movement audit trails, and Goods Receipt Notes (GRN) upon purchase order delivery.</li>
              </ul>
            )}

            {selectedProject.id === "assetzo" && (
              <ul className="space-y-2 text-xs text-gray-600 pl-1 leading-relaxed">
                <li>• <strong>Comprehensive Property Management:</strong> Multi-mode property listings for Rent, Sale, and Commercial Lease with smart geolocation filters.</li>
                <li>• <strong>Short-Term Homestays:</strong> Day-based booking reservation engine, calendar availability blocking, and integrated payment gateway checkout.</li>
                <li>• <strong>Redis Caching & Docker:</strong> Cached search queries for high speed and containerized deployment pipelines.</li>
              </ul>
            )}

            {selectedProject.id === "hms" && (
              <ul className="space-y-2 text-xs text-gray-600 pl-1 leading-relaxed">
                <li>• <strong>Multi-Tenant Healthcare SaaS:</strong> Organization-isolated clinical workflows for hospital networks, clinics, and wellness centers.</li>
                <li>• <strong>Doctor & Patient Ledgers:</strong> Automated appointment booking, prescription records, and role-based access control (RBAC).</li>
                <li>• <strong>PostgreSQL & Node.js:</strong> Relational schema design with ACID transactional safety for billing and medical records.</li>
              </ul>
            )}

            {selectedProject.id === "angelsmartalgo" && (
              <ul className="space-y-2 text-xs text-gray-600 pl-1 leading-relaxed">
                <li>• <strong>Admin Holding Allocation Desk:</strong> Desk interface for administrators to manually allocate, audit, and track stock portfolios.</li>
                <li>• <strong>Client Request Lifecycle:</strong> Structured buy, sell, and fund withdrawal request queues with maker-checker admin approvals.</li>
                <li>• <strong>Live Ledger & Balances:</strong> Real-time holding balance updates and JWT secure authentication.</li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

