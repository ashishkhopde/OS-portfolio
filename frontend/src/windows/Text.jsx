import WindowWrapper from "#hoc/WindowWrapper";
import WindowControls from "#components/WindowControls";
import useWindowStore from "#store/window";

function Text() {
    const { windows } = useWindowStore();
    const data = windows.txtfile?.data;

    if (!data) return null;

    const { name, image, subtitle, description } = data;

    return (
        <>
            <div id="window-header">
                <WindowControls target="txtfile" />
                <h2 className="font-bold text-sm text-center flex-1 text-gray-700 truncate px-2">{name}</h2>
                <div className="w-12" />
            </div>

            <div className="p-6 space-y-3.5 bg-white flex-1 min-h-0 overflow-y-auto">
                {image ? (
                    <div className="w-full flex justify-center bg-gray-50 p-2 rounded-lg border border-gray-100 mb-2">
                        <img src={image} alt={name} className="max-h-56 object-contain rounded" />
                    </div>
                ) : null}

                {subtitle ? (
                    <div className="border-b border-gray-100 pb-2">
                        <h3 className="text-base font-bold text-gray-900">{subtitle}</h3>
                    </div>
                ) : null}

                {Array.isArray(description) && description.length > 0 ? (
                    <div className="space-y-2.5 leading-relaxed text-sm text-gray-700">
                        {description.map((para, idx) => {
                            if (para.startsWith("### ") || para.startsWith("## ")) {
                                return (
                                    <h4 key={idx} className="font-bold text-sm text-blue-900 pt-2 border-b border-gray-100 pb-0.5">
                                        {para.replace(/^#+\s*/, '')}
                                    </h4>
                                );
                            }
                            if (para.startsWith("• ") || para.startsWith("- ")) {
                                return (
                                    <div key={idx} className="flex items-start gap-2 pl-1">
                                        <span className="text-blue-600 font-bold leading-5">•</span>
                                        <p className="flex-1">{para.replace(/^[•-]\s*/, '')}</p>
                                    </div>
                                );
                            }
                            return <p key={idx}>{para}</p>;
                        })}
                    </div>
                ) : null}
            </div>
        </>
    );
}

const TextWindow = WindowWrapper(Text, "txtfile");
export default TextWindow;
