import { Navbar, Footer, Hero } from "../componenets"

function Home() {
  return (
    <>
      <div className="bg-primary">
        <Navbar />
        <Hero />
      </div >
      <div className="footer">
        <Footer />
      </div>
    </>
  )
}

export default Home