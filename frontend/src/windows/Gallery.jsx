import WindowWrapper from "#hoc/WindowWrapper";
import WindowControls from "#components/WindowControls";
import { gallery, photosLinks } from "#constants";
import useWindowStore from "#store/window";

function Gallery() {
    const { openWindow } = useWindowStore();

    return (
        <>
            <div id="window-header">
                <WindowControls target="photos" />
                <h2 className="font-bold text-sm text-center flex-1 text-gray-700">Gallery</h2>
                <div className="w-12" />
            </div>

            <div className="flex w-full flex-1 min-h-0 overflow-hidden">
                <div className="sidebar w-44 shrink-0 bg-gray-50 border-r border-gray-200 flex flex-col p-4 overflow-y-auto">
                    <h3 className="text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Photos</h3>

                    <ul className="space-y-1">
                        {photosLinks.map(({ id, icon, title }, idx) => (
                            <li
                                key={id}
                                className={`flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer text-gray-700 hover:bg-gray-200 transition-colors ${
                                    idx === 0 ? "!bg-blue-100 !text-blue-700 font-medium" : ""
                                }`}
                            >
                                <img src={icon} alt={title} className="w-4 h-4 object-contain" />
                                <p className="text-sm font-medium">{title}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="gallery flex-1 p-5 overflow-y-auto">
                    <ul className="grid grid-cols-5 grid-rows-5 gap-3 h-full min-h-[360px]">
                        {gallery.map(({ id, img }) => (
                            <li
                                key={id}
                                className="cursor-pointer overflow-hidden rounded-lg group shadow-sm hover:shadow-md transition-shadow"
                                onClick={() => {
                                    openWindow("imgfile", {
                                        id,
                                        name: `Gallery Photo ${id}`,
                                        icon: "/images/image.png",
                                        kind: "file",
                                        fileType: "img",
                                        imageUrl: img,
                                    });
                                }}
                            >
                                <img
                                    src={img}
                                    alt={`Gallery image ${id}`}
                                    className="size-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

const GalleryWindow = WindowWrapper(Gallery, "photos");
export default GalleryWindow;
