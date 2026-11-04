// data/modulos.js
const modulosData = [
  // --- MÓDULOS PROFESOR ARCIDES CANALES ---
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
        pregunta: "¿Qué herramienta analiza Fortalezas, Oportunidades, Debilidades y Amenazas?",
        opciones: ["Matriz FODA", "Diagrama de Gantt", "Wireframe", "UML"],
        respuesta: 0,
        explicacion: "La matriz FODA evalúa diagnósticos internos y externos."
      }
    ]
  },

  // --- MÓDULOS PROFESOR JAVIER MINEROS ---
  {
    id: "btvds-3-2",
    codigo: "BTVDS 3.2",
    nombre: "Acuerdos de Nivel de Servicio (SLA) y Gestión de Software",
    docente: "Javier Mineros",
    resumen: "Creación de documentos SLA para estándares de desarrollo y mejora del proyecto 'La esquina del sabor'.",
    programas: ["Visual Studio Code", "Microsoft Word / Docs"],
    herramientas: ["Plantilla SLA", "Requerimientos de Software"],
    instrumentos: ["Documento SLA de proyecto", "Lista de cotejo de requisitos"],
    recursos: [
      { titulo: "Guía de Acuerdos de Nivel de Servicio (SLA)", url: "https://developer.mozilla.org/es/" }
    ],
    evidencias: ["https://github.com/Adri401/Aby2611"],
    quiz: [
      {
        pregunta: "¿Para qué sirve un documento SLA en el desarrollo de software?",
        opciones: [
          "Para definir los estándares y requisitos del servicio contratado",
          "Para escribir código de base de datos",
          "Para diseñar logotipos",
          "Para instalar sistemas operativos"
        ],
        respuesta: 0,
        explicacion: "Un SLA establece los niveles de servicio y requisitos acordados con el cliente."
      }
    ]
  },
  {
    id: "btvds-3-3",
    codigo: "BTVDS 3.3",
    nombre: "Bases de Datos Relacionales y Business Intelligence",
    docente: "Javier Mineros",
    resumen: "Consultas avanzadas en SQL Server (CRUD) y visualización de datos con Power BI y Excel.",
    programas: ["SQL Server Management Studio", "Power BI", "Microsoft Excel"],
    herramientas: ["Lenguaje SQL", "Dashboards Interactivos"],
    instrumentos: ["Guía práctica de consultas SQL", "Rúbrica de Dashboard"],
    recursos: [
      { titulo: "Microsoft Learn - SQL Server", url: "https://learn.microsoft.com/es-es/sql/" },
      { titulo: "Documentación Power BI", url: "https://learn.microsoft.com/es-es/power-bi/" }
    ],
    evidencias: ["https://github.com/Adri401/Aby2611"],
    quiz: [
      {
        pregunta: "¿Qué herramienta se utilizó para crear dashboards interactivos desde la base de datos?",
        opciones: ["Power BI y Excel", "Photoshop", "Duolingo", "Android Studio"],
        respuesta: 0,
        explicacion: "Power BI y Excel permiten analizar y visualizar datos masivos en tiempo real."
      }
    ]
  },
  {
    id: "btvds-3-4",
    codigo: "BTVDS 3.4",
    nombre: "Desarrollo Multiplataforma y Sistemas ERP",
    docente: "Javier Mineros",
    resumen: "Desarrollo de apps multiplataforma (Python, PHP, Avalonia, WPF) e integración de módulos en Odoo ERP.",
    programas: ["Visual Studio Code", "Odoo ERP", "Visual Studio"],
    herramientas: ["Python", "PHP", "Avalonia UI", "WPF"],
    instrumentos: ["Guía de desarrollo multiplataforma", "Evaluación ERP Odoo"],
    recursos: [
      { titulo: "Odoo Documentation", url: "https://www.odoo.com/documentation" },
      { titulo: "Avalonia UI Docs", url: "https://docs.avaloniaui.net/" }
    ],
    evidencias: ["https://github.com/Adri401/Aby2611"],
    quiz: [
      {
        pregunta: "¿Qué sistema ERP se analizó para comprender el funcionamiento de módulos empresariales?",
        opciones: ["Odoo", "GitHub", "Power BI", "Duolingo"],
        respuesta: 0,
        explicacion: "Odoo es un sistema ERP modular para la gestión empresarial integrada."
      }
    ]
  },
  {
    id: "btvds-3-8",
    codigo: "BTVDS 3.8",
    nombre: "Inteligencia Artificial Aplicada y Proyecto 'EstudIAnte'",
    docente: "Javier Mineros",
    resumen: "Creación de apps innovadoras con IA usando Google AI Studio y GitHub Copilot en VS Code.",
    programas: ["Visual Studio Code", "Google AI Studio"],
    herramientas: ["GitHub Copilot", "APIs de IA", "JavaScript"],
    instrumentos: ["Rúbrica de innovación tecnológica", "Demostración de app en vivo"],
    recursos: [
      { titulo: "Google AI Studio Docs", url: "https://aistudio.google.com/" },
      { titulo: "GitHub Copilot Features", url: "https://github.com/features/copilot" }
    ],
    evidencias: ["https://github.com/Adri401/Aby2611"],
    quiz: [
      {
        pregunta: "¿Cómo se llama la aplicación de IA desarrollada en este módulo?",
        opciones: ["EstudIAnte", "SLA Master", "Odoo App", "La Esquina del Sabor"],
        respuesta: 0,
        explicacion: "EstudIAnte fue la aplicación creada integrando conocimientos de IA."
      }
    ]
  }
];