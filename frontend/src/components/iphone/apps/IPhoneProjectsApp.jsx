import { useState } from "react";
import { projectsList } from "#constants";
import { ExternalLink, Compass, ArrowRight, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";

export default function IPhoneProjectsApp({ onOpenInSafari }) {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="flex-1 min-h-0 overflow-y-auto bg-slate-50 p-4 space-y-4">
      {/* Header Info Banner */}
      <div className="bg-white rounded-2xl p-4 border border-gray-200/80 shadow-2xs space-y-1">
        <div className="flex items-center gap-1.5 text-blue-600 text-xs font-bold uppercase tracking-wider">
          <Compass size={14} />
          <span>Full Stack Portfolio</span>
        </div>
        <h3 className="text-base font-bold text-gray-900">
          5 Production & Live Web Apps
        </h3>
        <p className="text-xs text-gray-600 leading-relaxed">
          Built with React.js, Node.js, Express.js, MongoDB, PostgreSQL, TypeScript, and Docker.
        </p>
      </div>

      {/* Projects Feed */}
      <div className="space-y-4 pb-8">
        {projectsList.map((project) => {
          const isExpanded = expandedId === project.id;
          return (
            <div
              key={project.id}
              className="bg-white rounded-2xl border border-gray-200/80 shadow-2xs overflow-hidden flex flex-col"
            >
              {/* Image banner */}
              <div className="relative h-44 w-full bg-gray-100 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <span className="absolute top-2.5 right-2.5 text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-white/95 text-gray-900 shadow-2xs">
                  {project.badge}
                </span>
                <div className="absolute bottom-2.5 left-3 right-3 text-white">
                  <p className="text-[10px] uppercase font-bold tracking-wider text-blue-300">
                    {project.category}
                  </p>
                  <h4 className="text-base font-bold text-white drop-shadow-2xs">
                    {project.title}
                  </h4>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 space-y-3">
                <p className="text-xs font-semibold text-blue-600">
                  {project.subtitle}
                </p>

                <p className="text-xs text-gray-600 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-medium bg-gray-100 text-gray-700 px-2.5 py-0.5 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Expand Architecture Notes Toggle */}
                <button
                  onClick={() => toggleExpand(project.id)}
                  className="w-full flex items-center justify-between py-1.5 px-3 bg-gray-50 hover:bg-gray-100 rounded-xl text-xs font-medium text-gray-700 transition-colors cursor-pointer"
                >
                  <span>{isExpanded ? "Hide Details" : "View Architecture & Workflows"}</span>
                  {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                </button>

                {isExpanded && (
                  <div className="p-3 bg-blue-50/60 rounded-xl border border-blue-100 text-xs text-gray-700 space-y-1.5 animate-fadeIn">
                    <p className="font-semibold text-blue-900">Key Engineering Highlights:</p>
                    {project.id === "tractors24" && (
                      <ul className="space-y-1 pl-1 text-[11px] text-gray-600">
                        <li>• Integrated government RTO API to verify tractor details using registration number.</li>
                        <li>• Designed RESTful APIs and CRUD for tractor sales and paid services.</li>
                        <li>• Built responsive React.js interfaces with authentication and authorization.</li>
                      </ul>
                    )}
                    {project.id === "ekonn" && (
                      <ul className="space-y-1 pl-1 text-[11px] text-gray-600">
                        <li>• 8-Step modular ERP workflow: Inquiries → Projects → Quotations → POs → Warehouse → Invoicing.</li>
                        <li>• Multi-revision quotation builder with TDS bundling and automated 18% GST calculation.</li>
                        <li>• Multi-warehouse inventory ledger and stock movement matrix.</li>
                      </ul>
                    )}
                    {project.id === "assetzo" && (
                      <ul className="space-y-1 pl-1 text-[11px] text-gray-600">
                        <li>• Property listing workflows for Rent, Sale, and Lease.</li>
                        <li>• Short-term Homestay booking engine with day-based price calculation.</li>
                        <li>• Integrated payment gateway workflows and Redis caching.</li>
                      </ul>
                    )}
                    {project.id === "hms" && (
                      <ul className="space-y-1 pl-1 text-[11px] text-gray-600">
                        <li>• Multi-tenant SaaS hospital management for healthcare organizations.</li>
                        <li>• Role-based access control (RBAC) for admins, doctors, and staff.</li>
                        <li>• RESTful API architecture built with Node.js, Express, and PostgreSQL.</li>
                      </ul>
                    )}
                    {project.id === "angelsmartalgo" && (
                      <ul className="space-y-1 pl-1 text-[11px] text-gray-600">
                        <li>• Client portfolio management and manual admin stock allotment desk.</li>
                        <li>• Workflows for stock buy, sell, and fund withdrawal approval.</li>
                        <li>• Real-time holding balance updates and JWT secure authentication.</li>
                      </ul>
                    )}
                  </div>
                )}

                {/* Action Buttons */}
                <div className="pt-2 flex items-center gap-2 border-t border-gray-100">
                  <button
                    onClick={() => onOpenInSafari(project)}
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
                    title="Open live website in new tab"
                  >
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

