import { useState } from "react";
import { Trash2, FileText, Image as ImageIcon, ChevronRight } from "lucide-react";

export default function IPadArchiveApp() {
  const archiveFiles = [
    {
      id: 1,
      name: "Early UI Mockup.png",
      type: "image",
      imageUrl: "/images/trash-1.png",
      subtitle: "Initial Dashboard Prototype (v0.1)",
      description: "Early wireframe mockup exploring dashboard metric blocks and navigational sidebar hierarchies.",
    },
    {
      id: 2,
      name: "Legacy Flow.png",
      type: "image",
      imageUrl: "/images/trash-2.png",
      subtitle: "Early Quotation Pipeline Flowchart",
      description: "Preliminary architectural diagram mapping lead stages to quotation iterations.",
    },
    {
      id: 3,
      name: "Archived Notes.txt",
      type: "text",
      subtitle: "Archived Notes & Deprecated Concepts",
      description: "Historical engineering notes and architecture revisions preserved for posterity.",
      content: [
        "### System Archive & Historical Record",
        "• Early exploratory wireframes and retired interface components.",
        "• Legacy architectural diagrams superseded by current modular ERP and SaaS architectures.",
        "• Previous iterations of design assets kept for historical reference.",
      ],
    },
  ];

  const [selectedFile, setSelectedFile] = useState(() => archiveFiles[0]);

  return (
    <div className="flex-1 min-h-0 flex bg-white overflow-hidden text-gray-800">
      {/* ─── Left Sidebar: Archived Files ───────────────────────── */}
      <div className="w-72 border-r border-gray-200 bg-gray-50/90 flex flex-col shrink-0 select-none">
        <div className="p-4 border-b border-gray-200 bg-white">
          <div className="flex items-center gap-2 text-xs font-bold text-gray-900">
            <Trash2 size={16} className="text-gray-500" />
            <span>Archive / Trash</span>
          </div>
          <span className="text-[11px] text-gray-500">3 Archived Records</span>
        </div>

        <div className="flex-1 min-h-0 overflow-y-auto p-2 space-y-1.5">
          {archiveFiles.map((file) => {
            const isSelected = selectedFile.id === file.id;
            return (
              <div
                key={file.id}
                onClick={() => setSelectedFile(file)}
                className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all ${
                  isSelected
                    ? "bg-blue-600 text-white shadow-xs"
                    : "hover:bg-gray-200/70 text-gray-800"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 overflow-hidden ${
                    isSelected ? "bg-white/20 text-white" : "bg-gray-100 text-blue-600"
                  }`}
                >
                  {file.type === "image" ? (
                    <img
                      src={file.imageUrl}
                      alt={file.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <FileText size={18} />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-bold truncate">{file.name}</h4>
                  <p
                    className={`text-[10px] truncate mt-0.5 ${
                      isSelected ? "text-blue-100" : "text-gray-500"
                    }`}
                  >
                    {file.subtitle}
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

      {/* ─── Right Detail Pane: File Viewer ──────────────────────── */}
      <div className="flex-1 min-h-0 overflow-y-auto p-6 bg-slate-50 flex flex-col items-center justify-center">
        <div className="max-w-xl w-full bg-white rounded-3xl p-6 border border-gray-200/80 shadow-2xs space-y-4">
          <div className="border-b border-gray-100 pb-3">
            <h3 className="text-base font-bold text-gray-900">{selectedFile.name}</h3>
            <p className="text-xs text-gray-500 mt-0.5">{selectedFile.subtitle}</p>
          </div>

          {selectedFile.type === "image" ? (
            <div className="bg-gray-100 rounded-2xl overflow-hidden border border-gray-200 p-2 flex items-center justify-center">
              <img
                src={selectedFile.imageUrl}
                alt={selectedFile.name}
                className="max-h-96 w-auto object-contain rounded-xl"
              />
            </div>
          ) : (
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-200 text-xs text-gray-700 space-y-2">
              {selectedFile.content?.map((line, idx) => (
                <p key={idx} className="leading-relaxed">
                  {line}
                </p>
              ))}
            </div>
          )}

          <p className="text-xs text-gray-500 italic text-center">
            {selectedFile.description}
          </p>
        </div>
      </div>
    </div>
  );
}

