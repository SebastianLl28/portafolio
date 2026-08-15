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
  summary?: string;
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
    summary:
      "ERP interno de una de las principales empresas de transporte del Perú, con operación a nivel nacional y un promedio de 5,000 ventas de boletos al día.",
    points: [
      <p key={1}>
        Habilité <span>el pago con múltiples métodos</span>, donde antes solo
        se aceptaba uno. Hoy una venta de boletos, carga o equipaje puede
        combinar efectivo, tarjeta por PinPAD, enlace de pago y QR,
        repartiendo el monto correctamente entre cada método.
      </p>,
      <p key={2}>
        Digitalicé <span>la operación de carga y equipajes</span>, que se
        manejaba a mano, sumando trazabilidad de cada envío desde la
        recepción hasta la entrega.
      </p>,
      <p key={3}>
        Automaticé <span>la programación de recursos</span> con reglas de
        negocio que reemplazaron la asignación manual de buses y personal.
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
