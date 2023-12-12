import Image from "next/image"
import Profile from '@assets/Profile 2.jpg'
import Safe from '@assets/safe.png'
import Ahg from '@assets/ahg.png'
const HomePage = () => {

    const experience = [
        {company: 'Safe - Midman App', position: 'Frontend Developer | Part-time', date: 'November 2023 - December 2023', img: Safe, alt: 'Safe Logo'},
        {company: 'AHG Lab', position: 'Frontend Web Developer | Intern', date: 'March 2023 - June 2023', img: Ahg, alt: 'AHG Lab Logo'}
    ]

    return(
        <>
            <section className='flex flex-row content-center justify-center w-full h-auto px-24 ' id='about'>
                <div className="flex flex-wrap content-center justify-between w-96">
                    <div className="flex flex-col justify-center">
                        <h1 className="font-mono font-semibold text-8xl">Vincent Castro</h1>
                        <h2 className="font-mono text-4xl ">Frontend Developer</h2>
                        <p className="font-mono text-xl">2000-present</p>
                    </div>
                </div>
                <div className="flex flex-wrap content-center justify-center w-96 ">
                    <Image src={Profile} width={400} height={400} className="rounded-full grayscale-[100%] hover:grayscale-[0%]" loading="eager" alt="Profile Photo" priority={true}/>
                </div>
            </section>  
            <section className='flex flex-col items-center w-full h-auto px-24 mt-20' id='experience'>
                <div className="mb-10 font-mono text-4xl">
                    Experience
                </div>
                <div  className="flex flex-row content-center justify-center w-full">
                    {experience.map((experience, index)=>(
                        <div className="flex flex-col items-center w-96 h-[500px] border-2 border-slate-500 rounded-xl mx-10" key={index}>
                            <div className='flex flex-wrap content-center h-64 kustify-center'>
                            <Image src={experience.img} width={250} height={250} alt={experience.alt} loading="eager"/>
                            </div>
                            <h3>{experience.company}</h3>
                            <p>{experience.position}</p>
                            <p>{experience.date}</p>
                        </div>
                    ))}
                </div>
            </section>  
            <section className='w-full h-96' id='projects'></section>  
            <section className='w-full h-96' id='contact'></section> 
        </>
    )
}

export default HomePage