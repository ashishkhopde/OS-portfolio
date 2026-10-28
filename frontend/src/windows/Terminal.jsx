import WindowControls from "#components/WindowControls";
import { techStack } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import { Flag, Check } from "lucide-react";

function Terminal() {
  return (
    <>
        <div id="window-header">
            <WindowControls target="terminal"/>
            <h2 className="font-bold text-sm text-center flex-1 text-gray-700">Tech Stack</h2>
            <div className="w-12" />
        </div>

        <div className="techstack flex-1 min-h-0 overflow-y-auto">
            <p className="font-mono text-sm">
                <span className="font-bold text-gray-900">@ashish %</span>
                {" "}show tech stack
            </p>

            {/* Table Header */}
            <div className="grid grid-cols-[20px_185px_1fr] items-center gap-3 font-semibold text-gray-900 mt-6 px-1 text-sm select-none">
                <div />
                <p>Category</p>
                <p>Technologies</p>
            </div>

            {/* Table Rows */}
            <ul className="content">
                {techStack.map(({ category, items }) => (
                    <li className="grid grid-cols-[20px_185px_1fr] items-start gap-3" key={category}>
                        <Check className="text-[#00A154] shrink-0 mt-0.5" size={16}/>
                        <h3 className="font-semibold text-[#00A154] leading-normal">{category}</h3>
                        <p className="text-gray-800 leading-normal">
                            {items.join(", ")}
                        </p>
                    </li>
                ))}
            </ul>

            <div className="footnote">
                <p>
                    <Check size={18}/> {techStack.length} of {techStack.length} stacks loaded successfully (100%)
                </p>

                <p className="text-black flex items-center gap-2">
                    <Flag size={14} fill="black"/> Render time: 4ms
                </p>
            </div>
        </div>
    </>
  );
}

const TerminalWindow = WindowWrapper(Terminal, 'terminal');

export default TerminalWindow;
