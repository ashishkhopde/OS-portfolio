import { useState, useEffect } from 'react';
import { Navbar, Welcome, Dock, Home } from '#components';
import { Terminal, Safari, Resume, Finder, Text, Image, Contact, Gallery } from '#windows';
import IPhoneView from './components/iphone/IPhoneView';
import IPadView from './components/ipad/IPadView';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';

gsap.registerPlugin(Draggable);

function App() {
  const [deviceType, setDeviceType] = useState(() => {
    if (typeof window !== 'undefined') {
      const w = window.innerWidth;
      if (w < 768) return 'mobile';
      if (w < 1024) return 'tablet';
      return 'desktop';
    }
    return 'desktop';
  });

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 768) {
        setDeviceType('mobile');
      } else if (w < 1024) {
        setDeviceType('tablet');
      } else {
        setDeviceType('desktop');
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 1. Mobile screen (< 768px): Full-screen native iPhone view
  if (deviceType === 'mobile') {
    return (
      <main className="w-full h-full h-[100dvh] overflow-hidden flex flex-col">
        <IPhoneView isDesktopFrame={false} />
      </main>
    );
  }

  // 2. Tablet / Tab screen (768px to 1023px): Full-screen native iPad view
  if (deviceType === 'tablet') {
    return (
      <main className="w-full h-full h-[100dvh] overflow-hidden flex flex-col">
        <IPadView isDesktopFrame={false} />
      </main>
    );
  }

  // 3. Desktop / Laptop (>= 1024px): macOS Desktop view
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      <Home />

      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <Image />
      <Contact />
      <Gallery />
    </main>
  );
}

export default App;
