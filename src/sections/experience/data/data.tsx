import DevdatepImage from "@/assets/devdatep.webp";
import CivaImage from "@/assets/civa-logo.png";

export const data = [
  {
    id: 1,
    title: "Turismo CIVA - Desarrollador Full Stack",
    date: "Julio 2024 - Actual",
    image: CivaImage,
    description: [
      <p key={1}>
        Desarrollo de <span>funcionalidades full stack</span> en el ERP interno
        de la empresa, abarcando frontend, backend y base de datos.
      </p>,
      <p key={2}>
        Implementación de <span>requerimientos funcionales</span> solicitados
        por distintas áreas como carga, boletos y administración.
      </p>,
      <p key={3}>
        Gestión de <span>consultas y migraciones</span> en bases de datos MySQL.
      </p>,
      <p key={4}>
        Soporte al sistema para <span>venta de pasajes</span>,{" "}
        <span>envíos de carga</span> y otros procesos internos de la empresa.
      </p>,
      <p key={5}>
        Organización del trabajo en equipo con <span>metodología Scrum</span> y
        gestión de tareas mediante <span>JIRA</span>.
      </p>,
    ],
  },
  {
    id: 2,
    title: "Devdatep Consulting - Desarrollador Frontend",
    date: "Diciembre 2023 - Mayo 2024",
    image: DevdatepImage,
    description: [
      <p key={1}>
        Desarrollo de <span>aplicaciones web</span>, utilizando diversas
        tecnologías frontend.
      </p>,
      <p key={2}>
        Implementación de <span>diseño responsivo</span> en páginas web.
      </p>,
      <p key={3}>
        Establecimiento de <span>estructuras de proyecto</span> optimizadas.
      </p>,
      <p key={4}>
        <span>Revisión de código</span> y provisión de retroalimentación
        constructiva.
      </p>,
      <p key={5}>
        Supervisión de tareas y <span>asignación de responsabilidades</span>{" "}
        dentro del equipo.
      </p>,
      <p key={6}>
        <span>Gestión del repositorio</span>, garantizando un flujo de trabajo
        fluido.
      </p>,
    ],
  },
];
