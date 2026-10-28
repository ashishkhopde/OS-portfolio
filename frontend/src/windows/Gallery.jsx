import { useState } from "react";
import WindowWrapper from "#hoc/WindowWrapper";
import WindowControls from "#components/WindowControls";
import { gallery } from "#constants";
import useWindowStore from "#store/window";
import { Images, Briefcase, User, Heart } from "lucide-react";

const SIDEBAR_ITEMS = [
    { id: "all", title: "Library", icon: Images },
    { id: "Projects", title: "Projects", icon: Briefcase },
    { id: "People", title: "People", icon: User },
    { id: "Favorites", title: "Favorites", icon: Heart },
];

function Gallery() {
    const { openWindow } = useWindowStore();
    const [activeTab, setActiveTab] = useState("all");

    // Filter items based on active tab
    const filteredGallery = gallery.filter((item) => {
        if (activeTab === "all") return true;
        if (activeTab === "Projects") return item.category === "Projects";
        if (activeTab === "People") return item.category === "People";
        if (activeTab === "Favorites") return true;
        return true;
    });

    return (
        <>
            <div id="window-header">
                <WindowControls target="photos" />
                <h2 className="font-bold text-sm text-center flex-1 text-gray-700">Photos & Gallery</h2>
                <div className="w-12" />
            </div>

            <div className="flex w-full flex-1 min-h-0 h-[calc(100%-44px)] overflow-hidden">
                {/* Sidebar */}
                <div className="sidebar w-44 shrink-0 h-full bg-gray-50 border-r border-gray-200 flex flex-col p-4 overflow-y-auto select-none min-h-0">
                    <h3 className="text-[11px] font-semibold text-gray-400 mb-2.5 uppercase tracking-wider">Photos</h3>

                    <ul className="space-y-1">
                        {SIDEBAR_ITEMS.map(({ id, title, icon: IconComponent }) => {
                            const isActive = activeTab === id;
                            return (
                                <li
                                    key={id}
                                    onClick={() => setActiveTab(id)}
                                    className={`flex items-center gap-2.5 px-3 py-2 rounded-lg cursor-pointer transition-all text-sm font-medium ${
                                        isActive
                                            ? "bg-blue-100/90 text-blue-700 font-semibold"
                                            : "text-gray-600 hover:bg-gray-200/70 hover:text-gray-900"
                                    }`}
                                >
                                    <IconComponent
                                        size={16}
                                        className={isActive ? "text-blue-600 shrink-0" : "text-gray-500 shrink-0"}
                                    />
                                    <span className="truncate">{title}</span>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                {/* Main Gallery Area */}
                <div className="gallery flex-1 min-h-0 h-full flex flex-col p-5 overflow-y-auto bg-gray-50/50">
                    <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-200/60 select-none shrink-0">
                        <div>
                            <h3 className="font-bold text-base text-gray-800">
                                {activeTab === "all" ? "All Photos & Projects" : activeTab}
                            </h3>
                            <p className="text-xs text-gray-500">{filteredGallery.length} items</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-8">
                        {filteredGallery.map((item) => (
                            <div
                                key={item.id}
                                className="relative rounded-xl overflow-hidden shadow-sm hover:shadow-lg border border-gray-200/80 bg-white cursor-pointer group transition-all duration-300 hover:-translate-y-1"
                                onClick={() => {
                                    openWindow("imgfile", {
                                        id: item.id,
                                        name: item.title || `Photo ${item.id}`,
                                        icon: "/images/image.png",
                                        kind: "file",
                                        fileType: "img",
                                        imageUrl: item.img,
                                    });
                                }}
                            >
                                <div className="w-full h-48 overflow-hidden bg-gray-100 flex items-center justify-center">
                                    <img
                                        src={item.img}
                                        alt={item.title || `Gallery item ${item.id}`}
                                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3 pt-8 text-white select-none">
                                    <p className="text-xs font-semibold truncate drop-shadow-sm">{item.title || `Photo ${item.id}`}</p>
                                    {item.subtitle && (
                                        <p className="text-[11px] text-gray-300 truncate mt-0.5">{item.subtitle}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

const GalleryWindow = WindowWrapper(Gallery, "photos");
export default GalleryWindow;
