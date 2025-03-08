import Image from 'next/image'
function Hero() {
  return (
    <Image
        src="/images/pexels-vincent-gerbouin-445991-1233313.jpg"
        alt='hero_image' 
        layout="fill"
        objectFit='cover'
        className='z-0 brightness-50'
        >
        </Image>
  )
}

export default Hero