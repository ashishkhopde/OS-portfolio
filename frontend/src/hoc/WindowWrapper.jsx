import useWindowStore from '#store/window'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { useLayoutEffect } from 'react';
import { useRef } from 'react';

function WindowWrapper(Component, windowKey) {

    const Wrapped = (props) => {
        const { focusWindow, windows } = useWindowStore();
        const { isOpen, isMinimized, isMaximized, zIndex } = windows[windowKey];
        const ref = useRef(null);
        const windowStyle = isMaximized ? {
            zIndex,
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            width: 'auto',
            height: '100dvh',
            maxWidth: 'none',
            transform: 'none',
            display: isOpen && !isMinimized ? 'flex' : 'none',
            flexDirection: 'column',
        } : { zIndex };

        useGSAP(() => {
            const el = ref.current;
            if (!el || !isOpen || isMinimized) return;

            el.style.display = 'block';

            gsap.fromTo(el, { opacity: 0, scale: 0.8, y:40 }, { opacity: 1, scale: 1, y: 0, duration: 0.6, ease: 'power3.out' });
        }, [isOpen, isMinimized]);

        useGSAP(() => {
            const el = ref.current;
            if (!el) return;

            const [draggable] = Draggable.create(el, { onPress: () => focusWindow(windowKey) });
            if (isMaximized) draggable.disable();

            return () => draggable.kill();
        }, [isMaximized])

        useLayoutEffect(() => {
            const el = ref.current;
            if (!el) return;

            el.style.display = isOpen && !isMinimized ? (isMaximized ? 'flex' : 'block') : 'none';
        }, [isOpen, isMinimized, isMaximized])

        return <section
            id={windowKey}
            ref={ref}
            style={windowStyle}
            className={isMaximized ? 'absolute maximized-window' : 'absolute'}
        >
            <Component {...props} />
        </section>
    }

    Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || 'Component'})`;

    return Wrapped;
}

export default WindowWrapper
