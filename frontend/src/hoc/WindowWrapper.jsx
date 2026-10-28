import useWindowStore from '#store/window';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { useRef } from 'react';

function WindowWrapper(Component, windowKey) {
    const Wrapped = (props) => {
        const { focusWindow, windows } = useWindowStore();
        const win = windows[windowKey] || {};
        const { isOpen = false, isMinimized = false, isMaximized = false, zIndex = 1000 } = win;
        const ref = useRef(null);
        const draggableRef = useRef(null);

        const isVisible = isOpen && !isMinimized;

        const windowStyle = isMaximized ? {
            zIndex,
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            width: '100dvw',
            height: '100dvh',
            maxWidth: 'none',
            maxHeight: 'none',
            transform: 'none',
            display: isVisible ? 'flex' : 'none',
            flexDirection: 'column',
        } : {
            zIndex,
            display: isVisible ? 'flex' : 'none',
            flexDirection: 'column',
        };

        // Initialize / update Draggable
        useGSAP(() => {
            const el = ref.current;
            if (!el || !isOpen) return;

            const handle = el.querySelector('#window-header') || el;

            const [draggable] = Draggable.create(el, {
                trigger: handle,
                edgeResistance: 0.65,
                type: 'x,y',
                onPress: () => focusWindow(windowKey),
                onDragStart: () => {
                    el.querySelectorAll('iframe').forEach(f => {
                        f.style.pointerEvents = 'none';
                    });
                },
                onDragEnd: () => {
                    el.querySelectorAll('iframe').forEach(f => {
                        f.style.pointerEvents = 'auto';
                    });
                },
            });
            draggableRef.current = draggable;

            if (isMaximized) {
                draggable.disable();
                gsap.set(el, { x: 0, y: 0 });
            } else {
                draggable.enable();
                draggable.update();
            }

            return () => {
                draggable.kill();
                draggableRef.current = null;
            };
        }, [isMaximized, isOpen]);

        // Opening animation and position reset on open
        useGSAP(() => {
            const el = ref.current;
            if (!el) return;

            if (!isOpen || isMinimized) {
                if (!isOpen) {
                    gsap.set(el, { x: 0, y: 0 });
                }
                return;
            }

            if (!isMaximized) {
                gsap.fromTo(
                    el,
                    { opacity: 0, scale: 0.9, y: 24 },
                    {
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        duration: 0.35,
                        ease: 'power3.out',
                        onComplete: () => {
                            draggableRef.current?.update();
                        }
                    }
                );
            } else {
                gsap.fromTo(
                    el,
                    { opacity: 0 },
                    { opacity: 1, duration: 0.25, ease: 'power2.out' }
                );
            }
        }, [isOpen, isMinimized]);

        return (
            <section
                id={windowKey}
                ref={ref}
                style={windowStyle}
                onPointerDown={() => focusWindow(windowKey)}
                className={isMaximized ? 'absolute maximized-window' : 'absolute'}
            >
                <Component {...props} />
            </section>
        );
    };

    Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || 'Component'})`;

    return Wrapped;
}

export default WindowWrapper;
