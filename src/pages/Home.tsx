import { Navbar, Footer, Hero } from "../componenets"

function Home() {
  return (
    <div className="bg-primary">
      <Navbar></Navbar>
      <div className="bg-primary justify-center items-start">
        <div className="xl:max-w-[1280px] w-full">
          <Footer></Footer>
        </div>
      </div>

      <Hero></Hero>
    </div>

  )
}

export default Home