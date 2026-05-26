import gsap from 'gsap';
import { ScrollTrigger , SplitText } from "gsap/all";
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Cocktails from './components/Cocktails';

gsap.registerPlugin(ScrollTrigger , SplitText); // This gsap properties aren't active at all every time so we have to activate them

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
    </main>
  )
}

export default App
