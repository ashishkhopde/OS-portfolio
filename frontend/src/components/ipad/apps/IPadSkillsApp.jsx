import { useState } from "react";
import { techStack } from "#constants";
import { Check, Terminal as TerminalIcon, Cpu, Layers, ChevronRight } from "lucide-react";

export default function IPadSkillsApp() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...techStack.map((t) => t.category)];

  const displayedStacks = selectedCategory === "All"
    ? techStack
    : techStack.filter((t) => t.category === selectedCategory);

  return (
    <div className="flex-1 min-h-0 flex bg-gray-950 text-white font-mono overflow-hidden">
      {/* ─── Left Sidebar: Categories ───────────────────────────── */}
      <div className="w-64 border-r border-gray-800 bg-gray-900/80 flex flex-col shrink-0 select-none">
        <div className="p-4 border-b border-gray-800">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs">
            <TerminalIcon size={16} />
            <span>Developer Stacks</span>
          </div>
          <span className="text-[10px] text-gray-500 block mt-1">8 Core Competencies</span>
        </div>

        <div className="flex-1 min-h-0 overflow-y-auto p-2 space-y-1">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-medium cursor-pointer transition-colors text-left ${
                  isSelected
                    ? "bg-emerald-600 text-white font-bold shadow-xs"
                    : "text-gray-400 hover:bg-gray-800/60 hover:text-gray-200"
                }`}
              >
                <span>{cat}</span>
                <ChevronRight size={13} className={isSelected ? "text-white" : "text-gray-600"} />
              </button>
            );
          })}
        </div>
      </div>

      {/* ─── Right Pane: Full Interactive Terminal ───────────────── */}
      <div className="flex-1 min-h-0 overflow-y-auto p-6 space-y-5">
        <div className="bg-gray-900/90 rounded-2xl p-4 border border-gray-800 space-y-1 shadow-md">
          <p className="text-xs text-gray-300">
            <span className="text-emerald-400 font-bold">ashish@ipad-pro</span>:
            <span className="text-blue-400 font-bold">~</span>$ show-tech-stack --filter="{selectedCategory.toLowerCase()}"
          </p>
          <p className="text-[11px] text-gray-500">
            Scanning production dependencies across MERN, PostgreSQL, Docker, and Redis...
          </p>
        </div>

        <div className="space-y-4 pb-8">
          {displayedStacks.map(({ category, items }) => (
            <div
              key={category}
              className="bg-gray-900/60 rounded-2xl p-4 border border-gray-800 space-y-2.5 hover:border-emerald-500/40 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Check size={16} className="text-emerald-400 shrink-0" />
                  <h4 className="font-bold text-emerald-400 text-sm tracking-wide">
                    {category}
                  </h4>
                </div>
                <span className="text-xs text-gray-500 font-sans">{items.length} technologies</span>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {items.map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-800 text-gray-200 px-3 py-1 rounded-lg text-xs border border-gray-700/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Footer Metrics */}
          <div className="p-4 bg-gray-900/80 rounded-2xl border border-gray-800 text-xs text-emerald-400 space-y-1">
            <p className="font-bold flex items-center gap-2">
              <Check size={15} />
              <span>All 8 of 8 stacks loaded successfully (100% verified)</span>
            </p>
            <p className="text-gray-400 text-[11px]">
              Platform: Node.js v20 • React 19 • PostgreSQL 16 • Redis 7 • Linux Docker
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

