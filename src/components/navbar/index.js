import Link from "next/link"
import { useState, useEffect, useMemo, React } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Menu, Transition} from "@headlessui/react";

const Navbar = () => {

    const navLinks = useMemo(() => [
        { title: 'About', link: '#about' },
        { title: 'Experience', link: '#experience' },
        { title: 'Projects', link: '#projects' },
        { title: 'Contact', link: '#contact' }
    ], []);
    
    const socialIcons = [
        {link: 'https://www.facebook.com/vincentxpatrick/', class: 'hover:bg-blue-300', d: 'M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z', className: 'h-7 w-7'},
        {link: 'https://www.linkedin.com/in/vpmcastro/', class: 'hover:bg-blue-300', d: 'M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z', className: 'h-7 w-7'},
        {link: 'https://github.com/vixtroo', class: 'hover:bg-blue-300', d: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z', className: 'h-7 w-7'},
    ]

    const [activeNav, setActiveNav] = useState("")

    useEffect(() => {
        const handleScroll = () => {
          const scrollPosition = window.scrollY || document.documentElement.scrollTop;

          const sections = navLinks.map(({ title, link }) => {
            const targetElement = document.querySelector(link);
            return {
              title,
              offsetTop: targetElement ? targetElement.offsetTop - 50 : 0,
              offsetBottom: targetElement ? targetElement.offsetTop + targetElement.offsetHeight - 50: 0
            };
          });
    
          const currentSection = sections.find(section => (
            scrollPosition >= section.offsetTop && scrollPosition < section.offsetBottom
          ));
          if (!document.activeElement || !document.activeElement.classList.contains("nav-link-clicked")) {
            setActiveNav(currentSection ? currentSection.title : "");
          }
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, [navLinks]);
      
    return(
        <div className="fixed z-10 flex flex-wrap content-center justify-between w-full h-20 px-10 mb-10 border-b border-blue-300 md:px-24 bg-slate-900">
            <div className="flex flex-wrap content-center justify-center h-full font-mono text-4xl font-semibold text-blue-300"><a href='#'>Vixtro</a></div>
            <div className="flex flex-wrap content-center justify-center h-full">
                <ul className="items-center hidden h-full gap-6 md:flex">
                    {navLinks.map(({ title, link }) => {
                    return (
                        <li className={`relative block w-full h-full px-2 duration-100 delay-100 hover:border-b-2 ${activeNav == title? 'border-b-2' : ''}`} key={title}>
                        <a
                            href={link}
                            className="block font-semibold text-white leading-[5rem] text-md h-full tracking-wider font-mono"
                            onClick={() => setActiveNav(title)}
                        >
                            {title}
                        </a>
                        </li>
                    )
                    })}
                </ul>
            </div>
            <div className="flex-wrap content-center justify-center hidden h-full gap-6 py-6 md:flex">
                <ul className="flex inline gap-x-2">
                    {socialIcons.map((socialIcon, index)=>(
                        <li key={index} className={`flex flex-wrap content-center justify-center w-12 h-12 rounded-full bg-slate-500 delay-100 ${socialIcon.class} cursor-pointer duration-100`}>
                            <Link href={socialIcon.link} className={`social-icons ${socialIcon.class} delay-100 duration-100`} target="blank">
                                <svg xmlns="http://www.w3.org/2000/svg" className={socialIcon.className} fill="white" viewBox="0 0 24 24">
                                    <path transform={socialIcon.transform} d={socialIcon.d} />
                                </svg>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <Menu>
            <Menu.Button className="flex w-10 md:hidden"><FontAwesomeIcon icon={faBars} style={{ fontSize: "40px", color: "white" }} /></Menu.Button>
                <Menu.Items className="absolute left-0 flex flex-col w-full py-4 pl-10 bg-white top-20">
                {navLinks.map(({ title, link }) => (
                    <Menu.Item key={title} className="mb-4 font-semibold text-zinc-700">
                    {({ active }) => (
                        <a className="text-2xl" href={`${link}`}>
                        {title}
                        </a>
                    )}
                    </Menu.Item>
                ))}
                <Menu.Item>
                <ul className="flex inline gap-x-2">
                    {socialIcons.map((socialIcon, index)=>(
                        <li key={index} className={`flex flex-wrap content-center justify-center w-12 h-12 rounded-full bg-slate-500 delay-100 ${socialIcon.class} cursor-pointer duration-100`}>
                            <Link href={socialIcon.link} className={`social-icons ${socialIcon.class} delay-100 duration-100`} target="blank">
                                <svg xmlns="http://www.w3.org/2000/svg" className={socialIcon.className} fill="white" viewBox="0 0 24 24">
                                    <path transform={socialIcon.transform} d={socialIcon.d} />
                                </svg>
                            </Link>
                        </li>
                    ))}
                </ul>
                </Menu.Item>
                </Menu.Items>
            </Menu>
        </div>
    )
}

export default Navbar