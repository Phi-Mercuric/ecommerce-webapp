import tube from '../assets/tube.png'

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
    <div className={`flex ${props.mirror ? 'justify-end' : 'justify-start'}`}>
      <section style={divStyle} className={`flex sm:py-16 py-6 ${props.mirror ? 'sm:pr-[15vw] sm:pl-[20vw]' : 'sm:pl-[15vw] sm:pr-[20vw]'} px-12 xl:max-w-[1080px]`}>
        <div className={`flex-col items-start sm:mx-20 ${props.mirror ? 'order-last' : ''}`}>
          <a href={props.link} className='sm:text-3xl font-bold mb-2 text-dark-orange-gradient'>
            {props.title}
          </a>
          <div>
            <p className='text-[2.2vw] sm:text-[1.1vw] font-normal ml-6 mb-6 text-gray-300'>
              {props.description}
            </p>
          </div>
        </div>
        <div className='flex-col items-start w-[30rem]'>
          <img className='object-contain w-full flex-grow h-full' src={props.image} alt="" />
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
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quibusdam, quia, voluptate quod quos dolorum voluptas voluptatibus quae quas fugit. Quisquam voluptatum, quibusdam, quia, voluptate quod quos dolorum voluptas voluptatibus quae quas fugit.'
        image={tube}
      />
      <HeroSection mirror={true} link='parts'
        title='Affordable Tubes & Parts'
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quibusdam, quia, voluptate quod quos dolorum voluptas voluptatibus quae quas fugit. Quisquam voluptatum, quibusdam, quia, voluptate quod quos dolorum voluptas voluptatibus quae quas fugit.'
        image={tube}
      />
    </>
  )
}

export default Hero