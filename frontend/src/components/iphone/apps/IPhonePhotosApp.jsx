import { useState } from "react";
import { gallery } from "#constants";
import { X, Images, Briefcase, User, Heart } from "lucide-react";

export default function IPhonePhotosApp() {
  const [selectedTab, setSelectedTab] = useState("Library");
  const [previewImage, setPreviewImage] = useState(null);

  const tabs = [
    { name: "Library", icon: Images },
    { name: "Projects", icon: Briefcase },
    { name: "People", icon: User },
    { name: "Favorites", icon: Heart },
  ];

  const filteredItems = gallery.filter((item) => {
    if (selectedTab === "Library") return true;
    if (selectedTab === "Favorites") return item.id === 1 || item.id === 2 || item.id === 3;
    return item.category === selectedTab;
  });

  return (
    <div className="flex-1 min-h-0 flex flex-col bg-slate-50 overflow-hidden">
      {/* iOS Segmented Control */}
      <div className="p-3 bg-white border-b border-gray-200 shrink-0">
        <div className="flex items-center bg-gray-100 p-1 rounded-xl">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isSelected = selectedTab === tab.name;
            return (
              <button
                key={tab.name}
                onClick={() => setSelectedTab(tab.name)}
                className={`flex-1 py-1.5 px-2 rounded-lg text-[11px] font-semibold flex items-center justify-center gap-1 transition-all ${
                  isSelected
                    ? "bg-white text-gray-900 shadow-2xs font-bold"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                <Icon size={12} />
                <span className="hidden xs:inline">{tab.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Photos Grid */}
      <div className="flex-1 min-h-0 overflow-y-auto p-3">
        <div className="grid grid-cols-2 gap-3 pb-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setPreviewImage(item)}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-2xs cursor-pointer group active:scale-95 transition-transform"
            >
              <div className="relative h-36 w-full bg-gray-100">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-2 left-2 right-2 text-white">
                  <h4 className="text-xs font-bold truncate drop-shadow-2xs">{item.title}</h4>
                  <p className="text-[10px] text-gray-200 truncate">{item.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {previewImage && (
        <div
          onClick={() => setPreviewImage(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-4 animate-fadeIn"
        >
          <button
            onClick={() => setPreviewImage(null)}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/20 text-white flex items-center justify-center cursor-pointer hover:bg-white/30"
          >
            <X size={18} />
          </button>
          <img
            src={previewImage.img}
            alt={previewImage.title}
            className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl"
          />
          <div className="mt-4 text-center text-white">
            <h3 className="text-sm font-bold">{previewImage.title}</h3>
            <p className="text-xs text-gray-300">{previewImage.subtitle}</p>
          </div>
        </div>
      )}
    </div>
  );
}

