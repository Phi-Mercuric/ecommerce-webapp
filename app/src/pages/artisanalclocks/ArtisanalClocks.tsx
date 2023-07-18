import { Navbar, Footer } from "../../componenets"
import { clock } from '../../assets'
import AnimatedLine from "./components/AnimatedLine"
import Site from "./components/Site"

function ArtisanalClocks() {
  return (
    <>
      <div className="bg-primary">
        <Navbar />
      </div >
      <div className="w-full bg-primary justify-center items-center">
        {/* Header */}
        <section className="text-center flex flex-col items-center pt-10 pb-1">
          <h1 className="sm:text-3xl text-[20px] font-bold mb-2 text-dark-orange-gradient cursor-pointer">
            Custom Artisanal Clocks
          </h1>
          <p className="text-[13px] sm:text-[1.1vw] font-normal text-gray-300 w-[40vw]">
            From cheap to high quality (or both) Nixie tubes and Nixie tube clock parts with direct links to the source with NO markup.
          </p>
        </section>
        <section className="flex flex-col items-center mt-20">
          <h2 className="text-orange-600 text-[13px] sm:text-[1.4vw]">
            Other Vendors
          </h2>
          <div className="flex flex-row mt-1 w-[30vw] sm:w-auto justify-center text-[17px]">
            <img src={clock} alt="" />
            <div>
              <p className="text-gray-300 w-[30vw] mt-3">
                Although we offer custom artisinal clocks, we also provide alternatives and competetors for faster service.
              </p>
            </div>
          </div>
          <AnimatedLine start={10} max={100} speed={1} />
        </section>
        {/* Other Sites */}
        <Site title="Dalibor Farny">
          Dalibor Farny's nixie tube clocks are undeniably a top-tier option for enthusiasts seeking the highest quality and craftsmanship.
          <br /> <br />
          The clocks are meticulously handcrafted with impeccable attention to detail, showcasing the mastery of the art of nixie tube manufacturing.
          The quality of the clocks is exceptional, using premium materials and components that ensure durability and longevity. The unique designs
          offered by Dalibor Farny are truly remarkable and stand out as true works of art.
          <br /> <br />
          However, it is important to note that this level of
          craftsmanship comes with a much higher price range, making these clocks more expensive compared to other options. Additionally, due to the
          handcrafted nature of the clocks, availability may be limited, resulting in potential waiting times or limited stock.
        </Site>
        <Site title="FireFly Nixie">
          If Dalibor Farny is too expensive, then Firefly Nixie is a great alternative with good quality.
          <br /> <br />
          Firefly Nixie clocks offer a mid-range option for those seekinga nixie tube clock with a balance of price and quality. The clocks generally
          perform well and provide a visually pleasing display with their vintagen nixie tubes. The designs are elegant and tasteful, appealing to a
          wide range of customers.
          <br /> <br />
          Overall, Firefly Nixie clocks offer a decent choice for those looking to own a nixie tube clock without breaking the
          bank.
        </Site>
        <Site title="TubeClockDB">
          TubeClockDB is an online platform that curates a diverse collection of nixie tube clocks from various manufacturers.
          <br /> <br />
          They aim to provide a comprehensive selection of clocks with different designs, features, and price points. By featuring
          clocks from different brands, TubeClockDB allows customers to explore and compare options conveniently. They provide detailed
          specifications, reviews, and ratings to help buyers make informed decisions.
          <br /> <br />
          With their extensive range, TubeClockDB is a
          go-to destination for nixie enthusiasts looking for variety and convenience.
        </Site>
        <Site title="Millclock">
          Millclock is a well-established company renowned for its nixie tube clocks.
          <br /> <br />
          They offer a wide range of models catering to
          various preferences and budgets. Millclock's clocks are known for their reliable performance and accuracy, delivering precise
          timekeeping. The company focuses on creating clocks with elegant designs that seamlessly blend vintage aesthetics with modern
          sensibilities. They offer both assembled clocks and DIY kits, providing options for enthusiasts who enjoy the process of building
          their own nixie tube clocks.
          <br /> <br />
          Millclock's commitment to quality and versatility has made them a trusted choice among nixie clock
          enthusiasts.
        </Site>
        <Site title="PV Electronics">
          PV Electronics is a reputable company that specializes in nixie tube clock kits and components.
          <br /> <br />
          They cater to hobbyists and DIY
          enthusiasts who enjoy the process of building and customizing their own clocks. PV Electronics offers a wide variety of clock kits,
          ranging from beginner-friendly options to advanced designs with more complex features. They provide comprehensive instructions and
          support to guide customers through the assembly process. This customization-focused approach allows individuals to create unique
          nixie tube clocks tailored to their preferences.
          <br /> <br />
          PV Electronics is a go-to destination for those seeking a hands-on experience in
          building nixie tube clocks.
        </Site>
        <Site title="Nuvitron">
          Nuvitron specializes in crafting vintage-inspired nixie tube clocks that evoke a sense of nostalgia.
          <br /> <br />
          Their clocks seamlessly
          blend retro aesthetics with modern functionality. Nuvitron emphasizes the use of authentic nixie tubes and carefully designs each
          clock to capture the essence of a bygone era. Their attention to detail is evident in the craftsmanship and the unique, captivating
          designs they offer.
          <br /> <br />
          Nuvitron's clocks appeal to those who appreciate a vintage charm and a touch of nostalgia in their timepieces.
        </Site>
      </div >
      <div className="footer">
        <Footer />
      </div>
    </>
  )
}

export default ArtisanalClocks