import { techStack } from "#constants";
import { Check, Terminal as TerminalIcon, Cpu, Sparkles } from "lucide-react";

export default function IPhoneSkillsApp() {
  return (
    <div className="flex-1 min-h-0 overflow-y-auto bg-gray-950 text-white p-4 font-mono text-xs space-y-4">
      {/* Terminal Title Banner */}
      <div className="bg-gray-900/90 rounded-2xl p-3.5 border border-gray-800 space-y-1">
        <div className="flex items-center gap-2 text-emerald-400">
          <TerminalIcon size={14} />
          <span className="font-bold">ashish@macbook-pro ~ %</span>
        </div>
        <p className="text-gray-300 text-[11px]">
          Executing <span className="text-yellow-400 font-semibold">show-tech-stack --all</span>
        </p>
      </div>

      {/* Tech Stack Groups */}
      <div className="space-y-3 pb-8">
        {techStack.map(({ category, items }) => (
          <div
            key={category}
            className="bg-gray-900/60 rounded-xl p-3.5 border border-gray-800/80 space-y-2 hover:border-emerald-500/40 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Check size={14} className="text-emerald-400 shrink-0" />
                <h4 className="font-bold text-emerald-400 text-xs tracking-wide">
                  {category}
                </h4>
              </div>
              <span className="text-[10px] text-gray-500 font-sans">
                {items.length} items
              </span>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {items.map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-800/80 text-gray-200 px-2 py-0.5 rounded text-[11px] border border-gray-700/60"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}

        {/* Footer Metrics */}
        <div className="p-3 bg-gray-900 rounded-xl border border-gray-800 text-[11px] text-emerald-400/90 space-y-1">
          <p className="flex items-center gap-1.5 font-semibold">
            <Check size={13} />
            <span>{techStack.length} of {techStack.length} stacks verified & loaded (100%)</span>
          </p>
          <p className="text-gray-400 text-[10px]">
            Platform: Node.js • React • Linux Docker Containers
          </p>
        </div>
      </div>
    </div>
  );
}

