import { useState } from "react";
import { gallery } from "#constants";
import { Images, Briefcase, User, Heart, X, ChevronRight } from "lucide-react";

export default function IPadPhotosApp() {
  const [selectedCategory, setSelectedCategory] = useState("Library");
  const [previewImage, setPreviewImage] = useState(null);

  const categories = [
    { name: "Library", icon: Images, count: gallery.length },
    { name: "Projects", icon: Briefcase, count: gallery.filter((g) => g.category === "Projects").length },
    { name: "People", icon: User, count: gallery.filter((g) => g.category === "People").length },
    { name: "Favorites", icon: Heart, count: 3 },
  ];

  const displayedImages = gallery.filter((item) => {
    if (selectedCategory === "Library") return true;
    if (selectedCategory === "Favorites") return item.id === 1 || item.id === 2 || item.id === 3;
    return item.category === selectedCategory;
  });

  return (
    <div className="flex-1 min-h-0 flex bg-white overflow-hidden text-gray-800">
      {/* ─── Left Sidebar ────────────────────────────────────────── */}
      <div className="w-64 border-r border-gray-200 bg-gray-50/90 flex flex-col shrink-0 select-none">
        <div className="p-4 border-b border-gray-200 bg-white">
          <h3 className="text-sm font-bold text-gray-900">Photos</h3>
          <span className="text-[11px] text-gray-500">Albums & Smart Collections</span>
        </div>

        <div className="p-2 space-y-1">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.name;
            return (
              <button
                key={cat.name}
                onClick={() => setSelectedCategory(cat.name)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold cursor-pointer transition-colors ${
                  isSelected
                    ? "bg-blue-600 text-white shadow-xs"
                    : "text-gray-700 hover:bg-gray-200/70"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon size={16} />
                  <span>{cat.name}</span>
                </div>
                <span className={`text-[11px] ${isSelected ? "text-blue-100" : "text-gray-400"}`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ─── Right Pane: Photos Grid ─────────────────────────────── */}
      <div className="flex-1 min-h-0 overflow-y-auto p-6 bg-slate-50">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 pb-8">
          {displayedImages.map((image) => (
            <div
              key={image.id}
              onClick={() => setPreviewImage(image)}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-2xs hover:shadow-md cursor-pointer group active:scale-95 transition-all"
            >
              <div className="relative h-44 w-full bg-gray-100 overflow-hidden">
                <img
                  src={image.img}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h4 className="text-xs font-bold truncate drop-shadow-xs">{image.title}</h4>
                  <p className="text-[10px] text-gray-200 truncate">{image.subtitle}</p>
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
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-6 animate-fadeIn"
        >
          <button
            onClick={() => setPreviewImage(null)}
            className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/20 text-white flex items-center justify-center cursor-pointer hover:bg-white/30"
          >
            <X size={18} />
          </button>
          <img
            src={previewImage.img}
            alt={previewImage.title}
            className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
          />
          <div className="mt-4 text-center text-white">
            <h3 className="text-base font-bold">{previewImage.title}</h3>
            <p className="text-xs text-gray-300 mt-0.5">{previewImage.subtitle}</p>
          </div>
        </div>
      )}
    </div>
  );
}

