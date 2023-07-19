import { Navbar, Footer } from "../../componenets"
import Hero from "./components/Hero"
import AboutUs from "./components/AboutUs"
import AnimatedLine from "../../componenets/AnimatedLine"

export default function Home() {
  return (
    <>
      <div className="bg-primary">
        <Navbar />
        <div className="sm:mt-[5vw]">
          <Hero />
        </div>
        <AnimatedLine start={0} max={60} speed={1} />
        <div className="sm:mt-[2.5vw]">
          <AboutUs />
        </div>
      </div >
      <div className="footer">
        <Footer />
      </div>
    </>
  )
}
