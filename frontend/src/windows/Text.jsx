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

            <div className="p-6 space-y-4 bg-white flex-1 min-h-0 overflow-y-auto">
                {image ? (
                    <div className="w-full flex justify-center bg-gray-50 p-2 rounded-lg border border-gray-100">
                        <img src={image} alt={name} className="max-h-56 object-contain rounded" />
                    </div>
                ) : null}

                {subtitle ? <h3 className="text-base font-bold text-gray-900">{subtitle}</h3> : null}

                {Array.isArray(description) && description.length > 0 ? (
                    <div className="space-y-3 leading-relaxed text-sm text-gray-700">
                        {description.map((para, idx) => (
                            <p key={idx}>{para}</p>
                        ))}
                    </div>
                ) : null}
            </div>
        </>
    );
}

const TextWindow = WindowWrapper(Text, "txtfile");
export default TextWindow;
