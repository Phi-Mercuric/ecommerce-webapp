import { Navbar, Footer } from "../../componenets"
import Hero from "./components/Hero"

function Home() {
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

export default Home