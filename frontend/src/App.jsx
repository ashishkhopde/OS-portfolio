import { Navbar, Welcome, Dock, Home } from '#components';
import { Terminal, Safari, Resume, Finder, Text, Image, Contact, Gallery } from '#windows';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
gsap.registerPlugin(Draggable);

function App() {

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
  )
}

export default App
