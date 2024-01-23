import Navbar from "@components/navbar";
import Footer from "@components/footer";
import HomePage from "@containers/HomePageContainer";
import MainContainer from "@containers/MainContainer";
import Image from "next/image";
import Profile from "@assets/Profile 2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { experience, scrollToContact, info } from "@utils/indexUtils";
import ContactForm from "@utils/ContactForm";

export default function Home() {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    if (!downloaded) {
      setDownloaded(true);

      const link = document.createElement("a");
      link.href = "/CASTRO, Vincent Patrick - Resume.pdf";
      link.download = "CASTRO-VINCENT-PATRICK-RESUME.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("[data-scroll]");

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;

        if (isVisible) {
          section.classList.add("fade-in");
        } else {
          section.classList.remove("fade-in");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex md:block">
      <Navbar />
      <MainContainer>
        <section
          className="flex flex-col-reverse flex-wrap content-center justify-center w-full h-auto px-24 pb-24 md:flex-row pt-18 gap-x-20 fade-in"
          id="about"
          data-scroll
        >
          <div className="flex flex-wrap content-center justify-between md-20 md:mt-32 w-96">
            <div className="flex flex-col justify-center mt-6 font-mono text-neutral-200">
              <h1 className="font-semibold text-8xl">Vincent Castro</h1>
              <h2 className="text-4xl ">Frontend Developer</h2>
              <p className="text-xl">2000-present</p>
              <div className="flex flex-wrap content-center justify-center w-full gap-2 mt-4 md:justify-start">
                <button
                  className="flex flex-wrap content-center justify-center h-12 px-4 duration-100 delay-100 border-2 border-blue-300 hover:bg-blue-300 bg-slate-900 text-neutral-200 hover:border-neutral-200 rounded-xl hover:text-zinc-900"
                  onClick={handleDownload}
                >
                  {downloaded ? "Resume Downloaded!" : "Download Resume"}
                </button>
                <button
                  className="flex flex-wrap content-center justify-center h-10 px-4 rounded-xl text-neutral-200"
                  onClick={scrollToContact}
                >
                  Contact me{" "}
                  <span className="ml-2">
                    <FontAwesomeIcon icon={faArrowTrendUp} />
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap content-center justify-center mt-40">
            <Image
              src={Profile}
              width={400}
              height={400}
              className="rounded-full grayscale-[100%] hover:grayscale-[0%] transition-all duration-500 ease-in-out drop-shadow-2xl"
              alt="Profile Photo"
            />
          </div>
        </section>
        <section
          className="flex flex-col items-center w-full h-auto px-24 text-zinc-700 fade-in"
          id="experience"
          data-scroll
        >
          <div className="flex justify-center w-full my-20 font-mono text-4xl font-semibold">
            Experience
          </div>
          <div className="flex flex-col flex-wrap content-center justify-center w-full md:flex-row gap-y-10">
            {experience.map((experience, index) => (
              <div
                className="flex flex-col items-center h-[450px] mx-10 border-2 w-96 border-slate-500 rounded-xl hover:scale-105 duration-75 exp-card"
                key={index}
              >
                <div className="flex flex-wrap content-center justify-center h-64">
                  <Image
                    src={experience.img}
                    width={250}
                    height={250}
                    alt={experience.alt}
                    className="duration-200 exp-image"
                  />
                </div>
                <h3 className="font-mono text-xl font-semibold">
                  {experience.company}
                </h3>
                <p className="mt-2 font-mono">{experience.position}</p>
                <p className="font-mono">{experience.date}</p>
              </div>
            ))}
          </div>
        </section>
        <section
          className="flex flex-col items-center justify-between w-full text-zinc-700 h-[500px] fade-in"
          id="projects"
          data-scroll
        >
          <div className="flex justify-center w-full my-20 font-mono text-4xl font-semibold">
            Projects
          </div>
        </section>
        <section
          className="flex flex-col items-center justify-between w-full font-mono text-zinc-700 fade-in"
          id="contact"
          data-scroll
        >
          <div className="flex justify-center w-full my-20 text-4xl font-semibold">
            Contact
          </div>
          <div className="flex flex-col flex-wrap content-center justify-center w-full mb-20 md:flex-row gap-y-10">
            <ContactForm />
            <div className="flex flex-col items-center mx-10 w-96">
              <h1 className="px-10 font-mono text-lg font-semibold border-b-2">
                Get in touch
              </h1>
              <div className="flex flex-wrap content-start justify-start w-full px-12">
                <ul className="mt-4 leading-8">
                  {info.map((info, index) => (
                    <li key={index} className="flex">
                      <FontAwesomeIcon
                        icon={info.icon}
                        className="h-10 p-4 mt-2 border rounded-full"
                      />
                      <p className="mt-3.5 ml-4">{info.info}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </MainContainer>
      <Footer />
    </div>
  );
}
