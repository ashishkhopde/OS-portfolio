import { useState, useEffect } from "react";
import dayjs from "dayjs";
import { Wifi } from "lucide-react";

export default function IPhoneStatusBar({ isDesktopFrame = false }) {
  const [currentTime, setCurrentTime] = useState(() => dayjs().format("h:mm"));
  const [islandExpanded, setIslandExpanded] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(dayjs().format("h:mm"));
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const handleIslandClick = () => {
    setIslandExpanded((prev) => !prev);
    if (!islandExpanded) {
      setTimeout(() => setIslandExpanded(false), 3500);
    }
  };

  return (
    <div className="w-full h-11 px-6 flex items-center justify-between text-white text-xs select-none relative z-50 shrink-0 font-medium">
      {/* Time on Left */}
      <span className="font-semibold tracking-tight text-[13px] w-14">
        {currentTime}
      </span>

      {/* Dynamic Island in Center */}
      <div
        onClick={handleIslandClick}
        className={`absolute left-1/2 -translate-x-1/2 top-1.5 bg-black rounded-full flex items-center justify-between px-3 cursor-pointer shadow-lg transition-all duration-300 ease-out z-50 ${
          islandExpanded
            ? "w-64 h-9 ring-1 ring-white/20 bg-black/95 px-3.5"
            : "w-28 h-7 hover:scale-105"
        }`}
      >
        {islandExpanded ? (
          <div className="flex items-center justify-between w-full text-xs">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-[11px] font-semibold text-white truncate">
                Ashish Khopde
              </span>
            </div>
            <span className="text-[10px] text-blue-400 font-medium truncate">
              MERN Stack Dev
            </span>
          </div>
        ) : (
          <>
            {/* Selfie Camera Cutout */}
            <div className="w-2.5 h-2.5 rounded-full bg-[#111] ring-1 ring-[#222]" />
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <div className="w-2 h-2 rounded-full bg-blue-500/80" />
            </div>
          </>
        )}
      </div>

      {/* Icons on Right: Signal, 5G, Battery */}
      <div className="flex items-center gap-1.5 text-white w-16 justify-end">
        {/* Cellular Signal Bars */}
        <div className="flex items-end gap-0.5 h-2.5">
          <div className="w-0.5 h-1 bg-white rounded-2xs" />
          <div className="w-0.5 h-1.5 bg-white rounded-2xs" />
          <div className="w-0.5 h-2 bg-white rounded-2xs" />
          <div className="w-0.5 h-2.5 bg-white rounded-2xs" />
        </div>

        {/* 5G Label */}
        <span className="text-[10px] font-bold tracking-tight">5G</span>

        {/* Wifi Icon */}
        <Wifi size={13} strokeWidth={2.5} />

        {/* iOS Battery Icon */}
        <div className="flex items-center gap-0.5">
          <div className="w-5 h-2.5 rounded-xs border border-white/80 p-0.5 flex items-center">
            <div className="w-full h-full bg-white rounded-3xs" />
          </div>
          <div className="w-0.5 h-1 bg-white/80 rounded-r-xs" />
        </div>
      </div>
    </div>
  );
}

