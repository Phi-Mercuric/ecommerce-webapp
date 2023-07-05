import tube from '../assets/tube.webp'
import clock from '../assets/clock.webp'

interface HeroProps {
  mirror: boolean
  link: string
  title: string
  description: string
  image: string
}

const HeroSection = (props: HeroProps) => {
  const divStyle = {
    maxWidth: '100vw',
  };

  return (
    <div className={`flex justify-center`}>
      <section style={divStyle} className={`flex sm:py-16 py-6 px-12 justify-center`}>
        <div className={`flex-col sm:mx-20 ${props.mirror ? 'order-last' : 'text-right'}`}>
          <a href={props.link} className='sm:text-3xl font-bold mb-2 text-dark-orange-gradient'>
            {props.title}
          </a>
          <div>
            <p className={`text-[2.2vw] sm:text-[1.1vw] font-normal ${props.mirror ? 'ml-3' : 'mr-2'} mb-6 text-gray-300 w-[31vw]`}>
              {props.description}
            </p>
          </div>
        </div>
        <div className='flex-col items-start'>
          <img className='object-contain w-full flex-grow h-full max-h-[15vw]' src={props.image} alt="" />
        </div>
      </section >
    </div>
  )
}

const Hero = () => {
  return (
    <>
      <HeroSection mirror={false} link='artisanalclocks'
        title='Custom Artisanal Clocks'
        description='From cheap to high quality (or both) Nixie tubes and Nixie tube clock parts with direct links to the source with NO markup.'
        image={clock}
      />
      <HeroSection mirror={true} link='parts'
        title='Affordable Tubes & Parts'
        description='Hand crafted clocks made by our enthusiasts and engineers exactly to your specifications.'
        image={tube}
      />
    </>
  )
}

export default Hero