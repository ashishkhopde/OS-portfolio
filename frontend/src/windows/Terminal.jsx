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

            <div className="label">
                <p className="w-36 font-semibold">Category</p>
                <p className="font-semibold">Technologies</p>
            </div>

            <ul className="content">
                {techStack.map(({ category, items }) => (
                    <li className="flex items-center" key={category}>
                        <Check className="check" size={18}/>
                        <h3 className="w-36 shrink-0">{category}</h3>
                        <ul className="flex items-center gap-2 flex-wrap">
                            {items.map((item, i) => (
                                <li key={i}>{item}{i < items.length - 1 ? ',' : ''}</li>
                            ))}
                        </ul>
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
