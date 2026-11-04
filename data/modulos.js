// data/modulos.js
const modulosData = [
  {
    id: "btvds-3-1",
    codigo: "BTVDS 3.1",
    nombre: "Desarrollo de aplicaciones de software para la solución de problemas",
    docente: "Arcides Canales",
    resumen: "Diseño, lógica e implementación de soluciones de software estructuradas y orientadas a objetos.",
    programas: ["Visual Studio Code", "Git", "Google Chrome"],
    herramientas: ["HTML5", "CSS3", "JavaScript", "GitHub"],
    instrumentos: ["Rúbrica de evaluación", "Guía de desarrollo N° 1"],
    recursos: [
      { titulo: "MDN Web Docs - HTML & JS", url: "https://developer.mozilla.org/es/" },
      { titulo: "Pro Git Book", url: "https://git-scm.com/book/es/v2" }
    ],
    evidencias: ["https://github.com/Adri401/Aby2611"],
    quiz: [
      {
        pregunta: "¿Qué herramienta se utiliza para el control de versiones?",
        opciones: ["Git", "MySQL", "VS Code", "HTML"],
        respuesta: 0,
        explicacion: "Git registra y gestiona el historial de cambios en el código."
      }
    ]
  },
  {
    id: "btvds-3-2",
    codigo: "BTVDS 3.2",
    nombre: "Elaboración de acuerdos de nivel de servicio (SLA)",
    docente: "Arcides Canales",
    resumen: "Creación de documentos SLA para establecer estándares y requisitos del cliente. Mejora del sistema 'La esquina del sabor'.",
    programas: ["Visual Studio Code", "Word / Google Docs"],
    herramientas: ["Plantilla SLA", "JavaScript", "HTML/CSS"],
    instrumentos: ["Plantilla de Acuerdos SLA", "Lista de cotejo de requerimientos"],
    recursos: [
      { titulo: "Guía de Acuerdos de Nivel de Servicio (SLA)", url: "https://developer.mozilla.org/es/" }
    ],
    evidencias: ["https://github.com/Adri401/Aby2611"],
    quiz: [
      {
        pregunta: "¿Cuál es el objetivo principal de un documento SLA?",
        opciones: [
          "Establecer los estándares y requisitos de servicio con el cliente",
          "Diseñar la base de datos",
          "Crear el logotipo de la empresa",
          "Instalar un sistema operativo"
        ],
        respuesta: 0,
        explicacion: "El SLA define los compromisos y calidad de servicio entre el desarrollador y el cliente."
      }
    ]
  },
  {
    id: "btvds-3-3",
    codigo: "BTVDS 3.3",
    nombre: "Administración de bases de datos masivas y analítica de datos",
    docente: "Arcides Canales",
    resumen: "Consultas avanzadas en SQL Server (CRUD) y creación de dashboards interactivos en Power BI y Excel.",
    programas: ["SQL Server Management Studio", "Power BI", "Microsoft Excel"],
    herramientas: ["SQL", "Power Query", "Dashboards interactivos"],
    instrumentos: ["Guía de consultas SQL", "Rúbrica de evaluación de Dashboards"],
    recursos: [
      { titulo: "Microsoft Learn - SQL Server", url: "https://learn.microsoft.com/es-es/sql/" },
      { titulo: "Documentación de Power BI", url: "https://learn.microsoft.com/es-es/power-bi/" }
    ],
    evidencias: ["https://github.com/Adri401/Aby2611"],
    quiz: [
      {
        pregunta: "¿Qué herramienta se utilizó para crear dashboards interactivos a partir de grandes volúmenes de datos?",
        opciones: ["Power BI", "Duolingo", "Android Studio", "Git"],
        respuesta: 0,
        explicacion: "Power BI permite modelar y visualizar datos mediante reportes y dashboards dinámicos."
      }
    ]
  },
  {
    id: "btvds-3-4",
    codigo: "BTVDS 3.4",
    nombre: "Desarrollo multiplataforma y sistemas ERP",
    docente: "Arcides Canales",
    resumen: "Desarrollo en Python, PHP, Avalonia y WPF para múltiples plataformas, y gestión modular con Odoo ERP.",
    programas: ["Visual Studio", "VS Code", "Odoo ERP"],
    herramientas: ["Python", "PHP", "Avalonia UI", "WPF"],
    instrumentos: ["Guía de desarrollo multiplataforma", "Lista de cotejo módulos Odoo"],
    recursos: [
      { titulo: "Documentación de Python", url: "https://docs.python.org/es/3/" },
      { titulo: "Odoo Documentation", url: "https://www.odoo.com/documentation" }
    ],
    evidencias: ["https://github.com/Adri401/Aby2611"],
    quiz: [
      {
        pregunta: "¿Qué sistema ERP se utilizó para comprender el funcionamiento modular de las aplicaciones empresariales?",
        opciones: ["Odoo", "SQL Server", "Flutter", "GitHub"],
        respuesta: 0,
        explicacion: "Odoo es una plataforma de software ERP basada en módulos de negocio integrados."
      }
    ]
  },
  {
    id: "btvds-3-5",
    codigo: "BTVDS 3.5",
    nombre: "Desarrollo de componentes para dispositivos móviles",
    docente: "Arcides Canales",
    resumen: "Diseño de interfaces adaptables, componentes móviles y desarrollo de PWA.",
    programas: ["Android Studio", "VS Code", "Navegador Web"],
    herramientas: ["PWA", "CSS Responsive", "JavaScript", "Flutter"],
    instrumentos: ["Rúbrica de interfaz UI/UX", "Lista de cotejo móvil"],
    recursos: [
      { titulo: "Google Web Dev - PWA", url: "https://web.dev/explore/progressive-web-apps" }
    ],
    evidencias: ["https://github.com/Adri401/Aby2611"],
    quiz: [
      {
        pregunta: "¿Qué tecnología permite crear aplicaciones web progresivas?",
        opciones: ["PWA", "SQL", "FTP", "DNS"],
        respuesta: 0,
        explicacion: "PWA (Progressive Web App) brinda comportamiento nativo a sitios web."
      }
    ]
  },
  {
    id: "btvds-3-6",
    codigo: "BTVDS 3.6",
    nombre: "Conversación de inglés sobre mantenimiento de sistemas informáticos",
    docente: "Arcides Canales",
    resumen: "Comprensión lectora, vocabulario técnico en inglés y fluidez oral en soporte de sistemas.",
    programas: ["Duolingo", "Google Translate"],
    herramientas: ["Technical English Glossary", "Grammar Guide"],
    instrumentos: ["Rúbrica de Speaking", "Guía de traducción"],
    recursos: [
      { titulo: "BBC Learning English", url: "https://www.bbc.co.uk/learningenglish/" }
    ],
    evidencias: ["https://github.com/Adri401/Aby2611"],
    quiz: [
      {
        pregunta: "How do you say 'mantenimiento preventivo' in English?",
        opciones: ["Preventive maintenance", "Software crash", "Backup", "Network error"],
        respuesta: 0,
        explicacion: "Preventive maintenance es la traducción técnica exacta."
      }
    ]
  },
  {
    id: "btvds-3-7",
    codigo: "BTVDS 3.7",
    nombre: "Puesta en marcha de la microempresa en asociatividad cooperativa",
    docente: "Arcides Canales",
    resumen: "Modelado de negocios, presupuesto microempresarial y organización asociativa.",
    programas: ["Microsoft Excel", "Google Sheets", "Canva"],
    herramientas: ["Modelo Canvas", "Matriz FODA"],
    instrumentos: ["Rúbrica de plan de negocios", "Estudio de mercado"],
    recursos: [
      { titulo: "Business Model Canvas", url: "https://www.strategyzer.com/canvas/business-model-canvas" }
    ],
    evidencias: ["https://github.com/Adri401/Aby2611"],
    quiz: [
      {
        pregunta: "¿Qué herramienta analiza Fort