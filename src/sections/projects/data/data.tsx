import RickMortyImage from "@/assets/rick-morty-web.png";
import SiomImage from "@/assets/siom.png";
import IntranetImage from "@/assets/intranet.png";
import LandingDevDatepImage from "@/assets/landing-devdatep.png";

export const data = [
  {
    id: 1,
    title: "Sistema de asistencia",
    description:
      "Sistema de asistencia que realicé en la empresa Devdatep Consulting. El sistema permite llevar un control de asistencia de los empleados, generar reportes de asistencia y exportarlos a Excel. Además, incluye validación biométrica para el marcado de asistencia utilizando un servicios de AWS.",
    tags: [
      "React",
      "PHP",
      "Laravel",
      "MySQL",
      "AWS",
      "TailwindCSS",
      "React Query",
      "Axios",
    ],
    image: SiomImage,
    isPrivate: true,
  },
  {
    id: 2,
    title: "Intranet Devdatep Consulting",
    description:
      "En este proyecto realicé mantenimiento y mejoras en la intranet de la empresa Devdatep Consulting. La intranet es una aplicación web que permite a los empleados marcar su asistencia, ver sus reportes de asistencia, entre otras funcionalidades.",
    tags: [
      "React",
      "PHP",
      "Laravel",
      "MySQL",
      "TailwindCSS",
      "Axios",
      "Zustand",
    ],
    image: IntranetImage,
    isPrivate: true,
  },
  {
    id: 3,
    title: "Landing Page de Devdatep Consulting",
    description:
      "Landing page de la empresa Devdatep Consulting. La página web muestra información sobre los servicios que ofrece la empresa y un formulario de contacto.",
    tags: ["React", "TailwindCSS"],
    image: LandingDevDatepImage,
    isPrivate: true,
  },
  {
    id: 4,
    title: "Rick and Morty",
    description:
      "Este es un proyecto personal que realicé para practicar mis habilidades. La página web muestra información de los personajes de la serie Rick and Morty.",
    tags: ["React", "TailwindCSS", "React Query", "Axios", "Zustand"],
    image: RickMortyImage,
    github: "https://github.com/SebastianLl28/rick-and-morty-api",
    demo: "https://majestic-otter-d66261.netlify.app",
    isPrivate: false,
  },
];
