import Safe from '@assets/safe.png'
import Ahg from '@assets/ahg.png'
import {faPhone, faEnvelope, faMapLocation} from '@fortawesome/free-solid-svg-icons';

export const experience = [
    {company: 'Safe - Midman App', position: 'Frontend Developer', date: 'November 2023 - December 2023', img: Safe, alt: 'Safe Logo'},
    {company: 'AHG Lab', position: 'Frontend Web Developer | Intern', date: 'March 2023 - June 2023', img: Ahg, alt: 'AHG Lab Logo'}
  ]

export const scrollToContact = () => {
    const contactSection = document.getElementById('contact');

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
};

export const info = [
    {icon: faPhone, info: '+63 9672960756'},
    {icon: faEnvelope, info: 'vincentxpatrick@gmail.com'},
    {icon: faMapLocation, info: 'Cuatro De Julio St., Santo Niño Quezon City'}
]