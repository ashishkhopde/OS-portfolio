import WindowWrapper from "#hoc/WindowWrapper";
import WindowControls from "#components/WindowControls";
import useWindowStore from "#store/window";

function Image() {
    const { windows } = useWindowStore();
    const data = windows.imgfile?.data;

    if (!data) return null;

    const { name, imageUrl } = data;

    return (
        <>
            <div id="window-header">
                <WindowControls target="imgfile" />
                <h2 className="font-bold text-sm text-center flex-1 text-gray-700 truncate px-2">{name}</h2>
                <div className="w-12" />
            </div>

            <div className="p-4 bg-gray-100 flex-1 min-h-0 overflow-auto flex items-center justify-center">
                {imageUrl ? (
                    <img 
                        src={imageUrl} 
                        alt={name} 
                        className="max-w-full max-h-[72vh] object-contain rounded-lg shadow-md" 
                    />
                ) : null}
            </div>
        </>
    );
}

const ImageWindow = WindowWrapper(Image, "imgfile");
export default ImageWindow;
