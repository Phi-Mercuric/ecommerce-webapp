import { Navbar, Footer, Hero } from "./componenets"

const App = () => (
  <>
    <div className="bg-primary w-full overflow-hidden">
      <div className="sm:px-16 px-6 flex justify-center items-center">
        <Navbar></Navbar>
      </div>
    </div>

    <div className="bg-primary justify-center items-start">
      <div className="xl:max-w-[1280px] w-full">
        <Footer></Footer>
      </div>
    </div>

    <div className="bg-primary sm:px-16 px-6 justify-center items-start">
      <div className="xl:max-w-[1280px] w-full">
        <Hero></Hero>
      </div>
    </div>
  </>
)

export default App