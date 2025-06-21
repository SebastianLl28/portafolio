import RickMortyImage from "@/assets/rick-morty-web.png";
import SiomImage from "@/assets/siom.png";
import IntranetImage from "@/assets/intranet.png";
import LandingDevDatepImage from "@/assets/landing-devdatep.png";
import CivaErpImage from "@/assets/civa-bg.png";

export const data = [
  {
    id: 1,
    title: "ERP Interno - Turismo CIVA",
    description:
      "Sistema ERP desarrollado para Turismo CIVA, una de las principales empresas de transporte terrestre en Perú. El sistema permite gestionar la venta de pasajes, envíos de encomiendas, sesiones de ventas, control de personal, administración de clientes y otros procesos internos clave.",
    tags: ["React", "Spring Boot", "Java", "JavaScript", "MySQL", "AWS"],
    image: CivaErpImage,
    isPrivate: true,
  },
  {
    id: 2,
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
    id: 3,
    title: "Intranet",
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
    id: 4,
    title: "Landing Page",
    description:
      "Landing page de la empresa Devdatep Consulting. La página web muestra información sobre los servicios que ofrece la empresa.",
    tags: ["React", "TailwindCSS"],
    image: LandingDevDatepImage,
    isPrivate: true,
  },
];
