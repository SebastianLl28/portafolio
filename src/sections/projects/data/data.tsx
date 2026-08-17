import { StaticImageData } from "next/image";
import SiomImage from "@/assets/siom.png";
import IntranetImage from "@/assets/intranet.png";
import LandingDevDatepImage from "@/assets/landing-devdatep.png";
import CivaErpImage from "@/assets/civa-bg.png";
import EnrollmentSystemImage from "@/assets/architecture.gif";

export interface Project {
  id: number;
  title: string;
  context: string;
  description: string;
  tags: string[];
  image: StaticImageData;
  isPrivate: boolean;
  github?: string;
  demo?: string;
  imageZoomOutOnHover?: boolean;
}

export const data: Project[] = [
  {
    id: 1,
    title: "ERP de transporte y encomiendas",
    context: "Turismo CIVA · En producción",
    description:
      "Sistema que gestiona la operación diaria de una de las principales empresas de transporte terrestre del Perú: venta de pasajes, envío de encomiendas, sesiones de venta, control de personal y administración de clientes.",
    tags: ["React", "Spring Boot", "Java", "MySQL", "AWS"],
    image: CivaErpImage,
    isPrivate: true,
  },
  {
    id: 2,
    title: "Sistema de Matrícula Universitaria (Microservicios)",
    context: "Tecsup · Curso de Arquitectura de Software",
    description:
      "Plataforma de matrícula universitaria con arquitectura de microservicios: gateway, descubrimiento de servicios, autenticación OAuth2+JWT+2FA, matrícula con patrón Outbox y pagos vía Mercado Pago, notificaciones por email y auditoría con Kafka. Todo orquestado con Docker Compose.",
    tags: [
      "Java",
      "Spring Boot",
      "Spring Cloud",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Kafka",
      "Docker",
      "Vite",
      "TailwindCSS",
    ],
    image: EnrollmentSystemImage,
    isPrivate: false,
    github: "https://github.com/SebastianLl28/enrollment-system-microservices",
    imageZoomOutOnHover: true,
  },
  {
    id: 3,
    title: "Sistema de asistencia con validación biométrica",
    context: "Devdatep Consulting · En producción",
    description:
      "Control de asistencia de empleados con marcado por reconocimiento facial sobre servicios de AWS. Genera reportes de asistencia y los exporta a Excel.",
    tags: ["React", "Laravel", "MySQL", "AWS", "TailwindCSS", "React Query"],
    image: SiomImage,
    isPrivate: true,
  },
  {
    id: 4,
    title: "Intranet corporativa",
    context: "Devdatep Consulting · Mantenimiento y mejoras",
    description:
      "Portal interno donde los empleados marcan su asistencia y consultan sus reportes. Me encargué del mantenimiento y de nuevas funcionalidades sobre una base de código existente.",
    tags: ["React", "Laravel", "MySQL", "TailwindCSS", "Zustand"],
    image: IntranetImage,
    isPrivate: true,
  },
  {
    id: 5,
    title: "Sitio web corporativo",
    context: "Devdatep Consulting",
    description:
      "Landing page que presenta los servicios de la consultora, con diseño responsivo y enfoque en rendimiento.",
    tags: ["React", "TailwindCSS"],
    image: LandingDevDatepImage,
    isPrivate: true,
  },
];
