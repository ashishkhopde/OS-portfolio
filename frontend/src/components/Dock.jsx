import { dockApps, locations } from "#constants";
import useLocationStore from "#store/location";
import useWindowStore from "#store/window";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { Tooltip } from "react-tooltip";

function Dock() {
    const { openWindow, closeWindow, focusWindow, windows } = useWindowStore();
    const { activeLocation, setActiveLocation } = useLocationStore();
    const dockRef = useRef(null);

    useGSAP(() => {
        const dock = dockRef.current;
        if (!dock) return;

        const icons = dock.querySelectorAll(".dock-icon");

        const animateIcons = (mouseX) => {
            const { left } = dock.getBoundingClientRect();

            icons.forEach(icon => {
                const { left: iconLeft, width } = icon.getBoundingClientRect();
                const center = iconLeft - left + width / 2;
                const distance = Math.abs(mouseX - center);

                const intensity = Math.exp(-(distance ** 2.5) / 20000);

                gsap.to(icon, { scale: 1 + 0.25 * intensity, y: -15 * intensity, duration: 0.2, ease: "power1.out" });
            });
        };

        const handleMouseMove = (e) => {
            const { left } = dock.getBoundingClientRect();
            animateIcons(e.clientX - left);
        };

        const resetIcons = () => icons.forEach(icon => gsap.to(icon, { scale: 1, y: 0, duration: 0.3, ease: "power1.out" }));

        dock.addEventListener("mousemove", handleMouseMove);
        dock.addEventListener("mouseleave", resetIcons);

        return () => {
            dock.removeEventListener("mousemove", handleMouseMove);
            dock.removeEventListener("mouseleave", resetIcons);
        };
    }, []);

    const toggleApp = (app) => { 
        if (!app.canOpen) return;

        // Archive / Trash special handler
        if (app.id === "trash") {
            const finderWin = windows.finder;
            if (finderWin?.isOpen && !finderWin.isMinimized && activeLocation?.id === locations.trash.id) {
                closeWindow("finder");
            } else {
                setActiveLocation(locations.trash);
                openWindow("finder");
                focusWindow("finder");
            }
            return;
        }

        // Portfolio / Finder special handler
        if (app.id === "finder") {
            const finderWin = windows.finder;
            if (finderWin?.isOpen && !finderWin.isMinimized && activeLocation?.id !== locations.trash.id) {
                closeWindow("finder");
            } else {
                if (activeLocation?.id === locations.trash.id) {
                    setActiveLocation(locations.work);
                }
                openWindow("finder");
                focusWindow("finder");
            }
            return;
        }

        const window = windows[app.id];

        if (!window) {
            console.error(`Window with id ${app.id} not found.`);
            return;
        }

        if (window.isOpen && !window.isMinimized) {
            closeWindow(app.id);
        } else {
            openWindow(app.id);
        }
    };

    return (
        <section id="dock">
            <div ref={dockRef} className="dock-container">
                {dockApps.map((app) => (
                    <div key={app.id} className="relative flex justify-center">
                        <button
                            className="dock-icon cursor-pointer"
                            aria-label={app.name}
                            data-tooltip-id="dock-tooltip"
                            data-tooltip-content={app.name}
                            data-tooltip-delay-show={150}
                            disabled={!app.canOpen}
                            onClick={() => toggleApp({ id: app.id, canOpen: app.canOpen })}
                        >
                            <img
                                src={`/images/${app.icon}`}
                                alt={`${app.name} icon`}
                                loading="lazy"
                                className={app.canOpen ? "" : "opacity-60"}
                            />
                        </button>
                    </div>
                ))}

                <Tooltip id="dock-tooltip" place="top" className="tooltip" />
            </div>
        </section>
    );
}

export default Dock;
