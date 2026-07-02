import { StaticImageData } from "next/image";
import DevdatepImage from "@/assets/devdatep.webp";
import CivaImage from "@/assets/civa-logo.png";

export interface ExperienceEntry {
  id: number;
  company: string;
  role: string;
  period: string;
  current?: boolean;
  image: StaticImageData;
  points: React.JSX.Element[];
  stack: string[];
}

export const data: ExperienceEntry[] = [
  {
    id: 1,
    company: "Turismo CIVA",
    role: "Desarrollador Full Stack",
    period: "Jul 2024 — Actual",
    current: true,
    image: CivaImage,
    points: [
      <p key={1}>
        Desarrollo <span>funcionalidades de punta a punta</span> en el ERP
        interno que soporta la venta de pasajes y el envío de encomiendas a
        nivel nacional.
      </p>,
      <p key={2}>
        Implemento <span>requerimientos funcionales</span> de las áreas de
        carga, boletos y administración, desde la interfaz hasta la base de
        datos.
      </p>,
      <p key={3}>
        Gestiono <span>consultas y migraciones</span> sobre bases de datos
        MySQL en producción.
      </p>,
      <p key={4}>
        Trabajo con <span>Scrum</span> y gestión de tareas en{" "}
        <span>JIRA</span> junto al equipo de sistemas.
      </p>,
    ],
    stack: ["React", "Spring Boot", "Java", "MySQL", "AWS"],
  },
  {
    id: 2,
    company: "Devdatep Consulting",
    role: "Desarrollador Frontend",
    period: "Dic 2023 — May 2024",
    image: DevdatepImage,
    points: [
      <p key={1}>
        Desarrollé <span>aplicaciones web responsivas</span> para clientes de
        la consultora con React y TailwindCSS.
      </p>,
      <p key={2}>
        Definí la <span>estructura base de los proyectos</span> frontend que
        adoptó el equipo.
      </p>,
      <p key={3}>
        Realicé <span>revisiones de código</span> y coordiné la asignación de
        tareas dentro del equipo.
      </p>,
      <p key={4}>
        Administré el <span>repositorio del equipo</span>, cuidando un flujo de
        trabajo ordenado con Git.
      </p>,
    ],
    stack: ["React", "TailwindCSS", "Laravel", "MySQL"],
  },
];
