import { Navbar, Footer } from "../../componenets"
import Hero from "./components/Hero"

export default function Home() {
  return (
    <>
      <div className="bg-primary">
        <Navbar />
        <div className="sm:mt-[5vw]">
          <Hero />
        </div>
      </div >
      <div className="footer">
        <Footer />
      </div>
    </>
  )
}
