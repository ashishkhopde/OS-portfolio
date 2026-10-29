import { useState } from "react";
import { Trash2, FileText, Image as ImageIcon, X } from "lucide-react";

export default function IPhoneArchiveApp() {
  const [activeItem, setActiveItem] = useState(null);

  const archiveFiles = [
    {
      id: 1,
      name: "Early UI Mockup.png",
      type: "image",
      imageUrl: "/images/trash-1.png",
      subtitle: "Initial Dashboard Prototype (v0.1)",
    },
    {
      id: 2,
      name: "Legacy Flow.png",
      type: "image",
      imageUrl: "/images/trash-2.png",
      subtitle: "Early Quotation Pipeline Flowchart",
    },
    {
      id: 3,
      name: "Archived Notes.txt",
      type: "text",
      subtitle: "Archived Notes & Deprecated Concepts",
      content: [
        "### Archive & Trash System",
        "• Early exploratory wireframes and retired interface components.",
        "• Legacy architectural diagrams superseded by current modular ERP and SaaS architectures.",
        "• Previous iterations of design assets kept for historical reference.",
      ],
    },
  ];

  return (
    <div className="flex-1 min-h-0 overflow-y-auto bg-slate-50 p-4 space-y-4">
      <div className="bg-white rounded-2xl p-4 border border-gray-200/80 shadow-2xs space-y-1">
        <div className="flex items-center gap-1.5 text-gray-500 text-xs font-bold uppercase tracking-wider">
          <Trash2 size={14} />
          <span>System Archive & Bin</span>
        </div>
        <h3 className="text-sm font-bold text-gray-900">Archived Items (3)</h3>
        <p className="text-xs text-gray-500">
          Historical project iterations, retired drafts, and design prototypes.
        </p>
      </div>

      <div className="space-y-3 pb-8">
        {archiveFiles.map((file) => (
          <div
            key={file.id}
            onClick={() => setActiveItem(file)}
            className="bg-white rounded-2xl p-3.5 border border-gray-200/80 shadow-2xs flex items-center gap-3.5 cursor-pointer active:scale-98 transition-transform"
          >
            <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center shrink-0 overflow-hidden">
              {file.type === "image" ? (
                <img
                  src={file.imageUrl}
                  alt={file.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <FileText size={22} className="text-blue-500" />
              )}
            </div>

            <div className="flex-1 min-w-0">
              <h4 className="text-xs font-bold text-gray-900 truncate">{file.name}</h4>
              <p className="text-[11px] text-gray-500 truncate">{file.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Preview */}
      {activeItem && (
        <div
          onClick={() => setActiveItem(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl max-w-sm w-full p-4 space-y-3 shadow-2xl overflow-hidden"
          >
            <div className="flex items-center justify-between border-b border-gray-100 pb-2">
              <h4 className="text-xs font-bold text-gray-900 truncate">{activeItem.name}</h4>
              <button
                onClick={() => setActiveItem(null)}
                className="p-1 rounded-lg text-gray-400 hover:text-gray-700"
              >
                <X size={16} />
              </button>
            </div>

            {activeItem.type === "image" ? (
              <img
                src={activeItem.imageUrl}
                alt={activeItem.name}
                className="w-full max-h-72 object-contain rounded-lg bg-gray-50"
              />
            ) : (
              <div className="text-xs text-gray-700 space-y-2 max-h-72 overflow-y-auto">
                {activeItem.content.map((para, i) => (
                  <p key={i} className="leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

