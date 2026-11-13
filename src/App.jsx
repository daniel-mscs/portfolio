import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stack from './components/Stack'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Timeline from './components/Timeline'
import CursorFX from './components/CursorFX'
import ScrollProgress from './components/ScrollProgress'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <CursorFX />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stack />
        <Projects />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
