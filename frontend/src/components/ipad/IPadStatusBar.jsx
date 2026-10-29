import { useState, useEffect } from "react";
import dayjs from "dayjs";
import { Wifi } from "lucide-react";

export default function IPadStatusBar({ isDesktopFrame = false }) {
  const [timeString, setTimeString] = useState(() => dayjs().format("ddd MMM D  h:mm A"));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeString(dayjs().format("ddd MMM D  h:mm A"));
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-8 px-6 flex items-center justify-between text-white text-xs select-none relative z-50 shrink-0 font-medium tracking-tight">
      {/* Date & Time on Left */}
      <span className="font-semibold text-[13px] text-white drop-shadow-xs">
        {timeString}
      </span>

      {/* Front camera only when inside desktop frame */}
      {isDesktopFrame && (
        <div className="absolute left-1/2 -translate-x-1/2 top-2 flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-[#151515] ring-1 ring-white/10 shadow-inner" />
          <div className="w-1 h-1 rounded-full bg-emerald-500/60" />
        </div>
      )}

      {/* Right Controls: Wifi, Battery, Control Center */}
      <div className="flex items-center gap-2.5 text-white/95">
        <Wifi size={14} strokeWidth={2.4} />

        {/* Battery with 100% text */}
        <div className="flex items-center gap-1 text-[11px] font-semibold">
          <span>100%</span>
          <div className="flex items-center gap-0.5">
            <div className="w-5 h-2.5 rounded-xs border border-white/90 p-0.5 flex items-center">
              <div className="w-full h-full bg-white rounded-3xs" />
            </div>
            <div className="w-0.5 h-1 bg-white/90 rounded-r-xs" />
          </div>
        </div>

        {/* iPad Control Center swipe bar indicator */}
        <div className="w-8 h-1 bg-white/40 rounded-full ml-1" />
      </div>
    </div>
  );
}
