import Navbar from '@components/navbar'
import HomePage from '@containers/HomePageContainer'
import MainContainer from '@containers/MainContainer'
import Image from "next/image"
import Profile from '@assets/Profile 2.jpg'
import Safe from '@assets/safe.png'
import Ahg from '@assets/ahg.png'

export default function Home() {

  const experience = [
    {company: 'Safe - Midman App', position: 'Frontend Developer | Part-time', date: 'November 2023 - December 2023', img: Safe, alt: 'Safe Logo'},
    {company: 'AHG Lab', position: 'Frontend Web Developer | Intern', date: 'March 2023 - June 2023', img: Ahg, alt: 'AHG Lab Logo'}
  ]
  
  return (
    <>
      <Navbar />
      <MainContainer className='mt-20'>
      <section className="flex flex-wrap content-center justify-center w-full h-auto px-24 pb-24 pt-18 gap-x-20" id='about'>
                <div className="flex flex-wrap content-center justify-between mt-32 w-96">
                    <div className="flex flex-col justify-center mt-6 text-neutral-200">
                        <h1 className="font-mono font-semibold text-8xl">Vincent Castro</h1>
                        <h2 className="font-mono text-4xl ">Frontend Developer</h2>
                        <p className="font-mono text-xl">2000-present</p>
                    </div>
                </div>
                <div className="flex flex-wrap content-center justify-center mt-40">
                    <Image src={Profile} width={400} height={400} className="rounded-full grayscale-[100%] hover:grayscale-[0%] transition-all duration-500 ease-in-out drop-shadow-2xl" alt="Profile Photo"/>
                </div>
            </section>  
            <section className='flex flex-col items-center w-full h-auto px-24 text-zinc-700' id='experience'>
                <div className="flex justify-center w-full my-20 font-mono text-4xl font-semibold">
                    Experience
                </div>
                <div  className="flex flex-wrap content-center justify-center w-full">
                    {experience.map((experience, index)=>(
                        <div className="flex flex-col items-center h-[450px] mx-10 border-2 w-96 border-slate-500 rounded-xl" key={index}>
                            <div className='flex flex-wrap content-center justify-center h-64'>
                              <Image src={experience.img} width={250} height={250} alt={experience.alt}/>
                            </div>
                            <h3 className='font-mono text-xl font-semibold'>{experience.company}</h3>
                            <p className='mt-2 font-mono'>{experience.position}</p>
                            <p className='font-mono'>{experience.date}</p>
                        </div>
                    ))}
                </div>
            </section>  
            <section className='w-full h-96' id='projects'></section>  
            <section className='w-full h-96' id='contact'></section> 
      </MainContainer>
    </>
  )
}
