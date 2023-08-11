// import images
import Hero_person from "./assets/images/Hero/person.png";

import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";
import tailwind from "./assets/images/Skills/tailwind.png";
import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";
import person_project from "./assets/images/projects/sujet.png";

import project1 from "./assets/images/projects/img1.png";

import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";
// bouton pour télécharger le CV
import { AiOutlineDownload } from "react-icons/ai";



export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Web et IOT Developpeur",
    firstName: "HOUREUX",
    LastName: "ALEXIS",
    image: Hero_person,
    hero_content: [
      {
        count: "2+",
        text: "Ans d'experience en developpement web et IOT",
      },
      {
        text: "Je suis un développeur web et IOT passionné par la création de solutions innovantes et intelligentes qui améliorent la vie des gens.",
      },
    ],
    // bouton pour télécharger le CV 
  },
  // bouton pour télécharger le CV
  skills: {
    title: "Compétences",
    subtitle: "Mes principales compétences",
    skills_content: [
      {
        name: "Node js",
        para: "Développement de serveurs dynamiques",
        logo: nodejs,
      },
      {
        name: "React js",
        para: "Création d'interfaces utilisateur interactives",
        logo: reactjs,
      },
      {
        name: "Python",
        para: "Automatisation et l'analyse de données ",
        logo: python,
      },
      {
        name: "Tailwind",
        para: "Création de sites web responsive",
        logo: tailwind,
      },

    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "Ce que je propose",
    service_content: [
      {
        title: "Developpement Web",
        para: "En tant que développeur web expérimenté, je mets en œuvre une combinaison unique de technologies de pointe telles que Node.js pour une gestion efficace du côté serveur, React.js pour des interfaces utilisateur fluides et réactives, sans oublier les puissantes capacités de Python pour des solutions back-end robustes.",
        logo: services_logo1,
      },
      {
        title: "Developpement IOT",
        para: "Spécialisé dans le développement IoT, je conçois et implémente des solutions intelligentes qui relient le monde physique au domaine numérique. Grâce à l'utilisation de technologies de pointe et de langages de programmation comme Python, je suis en mesure d'intégrer des capteurs, des appareils et des systèmes embarqués pour créer des réseaux interconnectés et automatisés.",
        logo: services_logo2,
      },
      {
        title: "Logo et UI design",
        para: "En tant que développeur IoT polyvalent et designer, je combine ma maîtrise de l'intégration de systèmes interconnectés avec une sensibilité esthétique raffinée en design de logo et UI.",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projets",
    subtitle: "MES CREATIONS",
    image: person_project,
    project_content: [
      {
        title: "Outil pour équipe Technique ",
       // image: project1,
      },
      {
        title: "Plateforme de monitoring IOT",
        // image: project2,
      },
      {
        title: "Detecteur Wifi et analyse puissance",
        // image: project3,
      },
    ],
  },

  Contact: {
    title: "Contactez moi",
    subtitle: "Voici les réseaux",
    social_media: [
      {
        text: "alexishoureux@gmail.Com",
        icon: GrMail,
        link: "mailto:alexishoureux@gmail.Com",
      },
      {
        text: "alexis_hrx",
        icon: BsInstagram,
        link: "https://www.instagram.com/alexis_hrx/",
      },
    ],
  },
  Footer: {
    text: "© Copy Right Reserved 2022",
  },
};


