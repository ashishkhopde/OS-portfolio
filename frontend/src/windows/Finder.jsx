import WindowControls from "#components/WindowControls";
import { locations } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import useLocationStore from "#store/location";
import useWindowStore from "#store/window";
import clsx from "clsx";
import { Search } from "lucide-react";

function Finder() {
    const { openWindow } = useWindowStore();
    const { activeLocation, setActiveLocation } = useLocationStore();

    const openItem = (item) => {
        if (item.fileType === "pdf") {
            return openWindow("resume");
        }
        if (item.kind === "folder") {
            return setActiveLocation(item);
        }
        if (['fig', 'url'].includes(item.fileType) && item.href){
            return openWindow("safari", { url: item.href, title: item.name });
        }

        openWindow(`${item.fileType}${item.kind}`, item);
    };

    const renderList = (name, items) => (
        <div>
            <h3 className="text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">{name}</h3>
            <ul className="space-y-1">
                {(items || []).map(item => (
                    <li
                        key={item.id}
                        onClick={() => setActiveLocation(item)}
                        className={clsx(
                            "flex items-center gap-2 px-3 py-1.5 rounded-md cursor-pointer transition-colors",
                            item.id === activeLocation?.id ? "bg-blue-100 text-blue-700 font-medium" : "text-gray-700 hover:bg-gray-200"
                        )}
                    >
                        <img src={item.icon} className="w-4 h-4 object-contain" alt={item.name} />
                        <p className="text-sm font-medium truncate">{item.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    );

    return (
        <>
            <div id="window-header">
                <WindowControls target="finder" />
                <h2 className="font-bold text-sm text-center flex-1 text-gray-700">{activeLocation?.name || "Portfolio"}</h2>
                <Search className="icon text-gray-500" size={16} />
            </div>

            <div className="bg-white flex flex-1 min-h-0 overflow-hidden">
                <div className="sidebar w-48 shrink-0 bg-gray-50 border-r border-gray-200 flex flex-col p-4 space-y-4 overflow-y-auto">
                    {renderList("Favorites", Object.values(locations))}
                    {renderList("My Projects", locations.work.children)}
                </div>

                <div className="content flex-1 p-8 bg-white relative overflow-auto min-h-[380px]">
                    {activeLocation?.children?.length ? (
                        activeLocation.children.map(item => (
                            <div
                                key={item.id}
                                className={clsx("absolute flex items-center flex-col gap-2 cursor-pointer group select-none hover:opacity-90", item.position)}
                                onClick={() => openItem(item)}
                            >
                                <img
                                    src={item.icon}
                                    alt={item.name}
                                    className="object-contain object-center size-14 group-hover:scale-105 transition-transform drop-shadow-sm"
                                />
                                <p className="text-xs text-center font-medium w-32 break-words leading-tight text-gray-700 group-hover:text-blue-600 transition-colors">
                                    {item.name}
                                </p>
                            </div>
                        ))
                    ) : (
                        <div className="h-full flex items-center justify-center text-gray-400 text-sm">
                            This folder is empty
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

const FinderWindow = WindowWrapper(Finder, "finder");

export default FinderWindow;
