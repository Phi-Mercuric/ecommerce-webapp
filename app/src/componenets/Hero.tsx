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
      <section style={divStyle} className={`flex sm:py-16 py-6 px-3 sm:px-6 justify-end`}>
        <div className={`flex-col mx-2 sm:mx-40 w-[60vw] sm:w-[31vw] ${props.mirror ? 'order-last' : 'text-right'}`}>
          <a href={props.link} className='sm:text-3xl text-[20px] font-bold mb-2 text-dark-orange-gradient'>
            {props.title}
          </a>
          <p className={`text-[13px] sm:text-[1.1vw] font-normal mb-6 text-gray-300 ${props.mirror ? 'ml-1 sm:ml-3' : 'mr-1 sm:mr-3 ml-auto'}`}>
            {props.description}
          </p>
        </div>
        <div className='flex items-center w-[30vw] sm:w-auto justify-center'>
          <img className='max-h-[22vw] sm:max-h-[15vw]' src={props.image} alt={`Image for ${props.title}`} />
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