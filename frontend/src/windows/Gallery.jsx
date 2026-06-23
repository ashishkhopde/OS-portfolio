import WindowWrapper from "#hoc/WindowWrapper"
import WindowControls from "#components/WindowControls"
import { gallery, photosLinks } from "#constants"
import useWindowStore from "#store/window"
import { Mail } from "lucide-react";
import { Search } from "lucide-react";

function Gallery() {

    const { openWindow } = useWindowStore();

    return (
        <>
            <div id="window-header">
                <WindowControls target="gallery" />
                {/* <div className="w-full flex justify-between items-center gap-3 text-gray-500">
                <Mail className="icon" />
                <Search className="icon" />
            </div> */}
                <h2>Gallery</h2>
            </div>

            <div className="flex w-full">
                <div className="sidebar">
                    <h2>Photos</h2>

                    <ul>
                        {photosLinks.map(({ id, icon, tittle }) => (
                            <li key={id}>
                                <img src={icon} alt={tittle} />
                                <p>{tittle}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="gallery">
                    <ul>
                        {gallery.map(({ id, img }) => (
                            <li key={id}
                                onClick={() => {
                                    openWindow("imgfile", {
                                        id,
                                        name: "Gallery image",
                                        icon: "images/image.png",
                                        kind: "file",
                                        fileType: "img",
                                        imageUrl: img
                                    })
                                }}>
                                <img src={img} alt={`Gallery image ${id}`} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

const GalleryWindow = WindowWrapper(Gallery, "photos");
export default GalleryWindow;
