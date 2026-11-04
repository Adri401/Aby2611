// data/modulos.js
const modulosData = [
  {
    id: "btvds-3-1",
    codigo: "BTVDS 3.1",
    nombre: "Desarrollo de aplicaciones de software para la solución de problemas",
    docente: "Javier Mineros",
    resumen: "Diseño, lógica e implementación de soluciones de software estructuradas y orientadas a objetos para resolver problemas reales.",
    programas: ["Visual Studio Code", "Git", "Google Chrome"],
    herramientas: ["HTML5", "CSS3", "JavaScript", "GitHub"],
    instrumentos: [
      "Guía de desarrollo N° 1",
      "Rúbrica de evaluación de proyecto final",
      "Lista de cotejo para revisión de código"
    ],
    recursos: [
      { titulo: "MDN Web Docs - HTML y CSS", url: "https://developer.mozilla.org/es/" },
      { titulo: "Pro Git (Libro gratuito en español)", url: "https://git-scm.com/book/es/v2" },
      { titulo: "Aprende JavaScript desde cero", url: "https://developer.mozilla.org/es/docs/Learn/JavaScript" }
    ],
    evidencias: ["https://github.com/Adri401/Aby2611"],
    quiz: [
      {
        pregunta: "¿Qué sistema de control de versiones distribuido se utiliza para registrar cambios en el código?",
        opciones: ["Git", "MySQL", "VS Code", "Live Server"],
        respuesta: 0,
        explicacion: "Git es el software de control de versiones estándar para coordinar el trabajo en equipo."
      },
      {
        pregunta: "¿Cuál de las siguientes es una estructura semántica en HTML5?",
        opciones: ["<nav>", "<div>", "<span>", "<bold>"],
        respuesta: 0,
        explicacion: "La etiqueta <nav> define un bloque de navegación semántico."
      },
      {
        pregunta: "¿Qué método de arreglos en JavaScript permite filtrar elementos según una condición?",
        opciones: ["Array.filter()", "Array.map()", "Array.push()", "Array.concat()"],
        respuesta: 0,
        explicacion: "filter() crea un nuevo arreglo con todos los elementos que cumplan la condición."
      }
    ]
  },
  {
    id: "btvds-3-5",
    codigo: "BTVDS 3.5",
    nombre: "Desarrollo de componentes para dispositivos móviles",
    docente: "Javier Mineros",
    resumen: "Diseño de interfaces adaptables, componentes móviles e integración de lógica para aplicaciones en smartphones y tablets.",
    programas: ["Visual Studio Code", "Android Studio", "Navegador web"],
    herramientas: ["PWA", "CSS Responsive", "JavaScript", "Flutter"],
    instrumentos: [
      "Rúbrica de diseño de interfaz (UI/UX)",
      "Guía práctica de PWA",
      "Lista de cotejo para pruebas en celular"
    ],
    recursos: [
      { titulo: "MDN - Responsive Web Design", url: "https://developer.mozilla.org/es/docs/Learn/CSS/CSS_layout/Responsive_Design" },
      { titulo: "Google Web Dev - PWA Fundamentals", url: "https://web.dev/explore/progressive-web-apps" },
      { titulo: "Flutter Documentation", url: "https://docs.flutter.dev/" }
    ],
    evidencias: ["https://github.com/Adri401/Aby2611"],
    quiz: [
      {
        pregunta: "¿Qué significa la sigla PWA en el desarrollo web y móvil?",
        opciones: [
          "Progressive Web App",
          "Programmed Web Assistant",
          "Public Web Asset",
          "Private Wireless Access"
        ],
        respuesta: 0,
        explicacion: "PWA (Progressive Web App) permite que una web funcione como app móvil nativa."
      },
      {
        pregunta: "¿Qué consulta de medios en CSS se usa para aplicar estilos en pantallas pequeñas?",
        opciones: ["@media (max-width: 600px)", "@import", "@keyframes", "@supports"],
        respuesta: 0,
        explicacion: "Las Media Queries permiten adaptar el diseño según el ancho de la pantalla."
      },
      {
        pregunta: "¿Qué unidad de medida en CSS se adapta según el tamaño de la pantalla del usuario?",
        opciones: ["rem / vw", "px", "pt", "cm"],
        respuesta: 0,
        explicacion: "Las unidades relativas como rem o vw permiten diseños verdaderamente fluidos."
      }
    ]
  },
  {
    id: "btvds-3-6",
    codigo: "BTVDS 3.6",
    nombre: "Conversación de inglés sobre mantenimiento de sistemas informáticos",
    docente: "Arcides Canales",
    resumen: "Comprensión lectora, vocabulario técnico y conversación oral en idioma inglés enfocados en soporte e informática.",
    programas: ["Duolingo", "Google Translate", "Microsoft Teams"],
    herramientas: ["Glosario técnico de informática", "English Grammar Guide"],
    instrumentos: [
      "Rúbrica de conversación oral (Speaking)",
      "Examen escrito de vocabulario técnico",
      "Guía de traducción e interpretación"
    ],
    recursos: [
      { titulo: "BBC Learning English", url: "https://www.bbc.co.uk/learningenglish/" },
      { titulo: "Computer Technical Dictionary", url: "https://www.computerhope.com/jargon.htm" },
      { titulo: "Cambridge English IT Vocabulary", url: "https://www.cambridgeenglish.org/" }
    ],
    evidencias: ["https://github.com/Adri401/Aby2611"],
    quiz: [
      {
        pregunta: "How do you correctly say 'mantenimiento preventivo' in English?",
        opciones: [
          "Preventive maintenance",
          "Hardware crash",
          "Software upgrade",
          "Network breakdown"
        ],
        respuesta: 0,
        explicacion: "'Preventive maintenance' hace referencia al mantenimiento preventivo programado."
      },
      {
        pregunta: "What does the IT term 'Troubleshooting' refer to?",
        opciones: [
          "Identifying and solving problems",
          "Installing clean windows",
          "Selling new computers",
          "Downloading music"
        ],
        respuesta: 0,
        explicacion: "'Troubleshooting' se refiere a la detección y resolución sistemática de fallas."
      },
      {
        pregunta: "Which term translates to 'copia de seguridad'?",
        opciones: ["Backup", "Restore", "Delete", "Upload"],
        respuesta: 0,
        explicacion: "'Backup' es el término técnico para la copia de respaldo de la información."
      }
    ]
  },
  {
    id: "btvds-3-7",
    codigo: "BTVDS 3.7",
    nombre: "Puesta en marcha de la microempresa en asociatividad cooperativa",
    docente: "Arcides Canales",
    resumen: "Fundamentos de emprendimiento, modelo de negocios Canvas, organización asociativa y plan financiero de microempresas.",
    programas: ["Microsoft Excel", "Google Sheets", "Canva"],
    herramientas: ["Modelo Canvas", "Matriz FODA"],
    instrumentos: [
      "Rúbrica de plan de negocios",
      "Lista de cotejo de estudio de mercado",
      "Guía de análisis asociativo"
    ],
    recursos: [
      { titulo: "Strategyzer - Business Model Canvas", url: "https://www.strategyzer.com/canvas/business-model-canvas" },
      { titulo: "Guía de Microempresas y Emprendimiento", url: "https://www.oecd.org/es/" },
      { titulo: "Finanzas para Emprendedores", url: "https://www.khanacademy.org/economics-finance-domain" }
    ],
    evidencias: ["https://github.com/Adri401/Aby2611"],
    quiz: [
      {
        pregunta: "¿Qué componente del Modelo Canvas define a quiénes se dirige la solución o producto?",
        opciones: [
          "Segmentos de clientes",
          "Estructura de costos",
          "Socios clave",
          "Fuentes de ingreso"
        ],
        respuesta: 0,
        explicacion: "Segmentos de clientes especifica el público objetivo hacia el cual se enfoca el negocio."
      },
      {
        pregunta: "¿Qué evalúa la sigla FODA en un diagnóstico estratégico?",
        opciones: [
          "Fortalezas, Oportunidades, Debilidades y Amenazas",
          "Finanzas, Operaciones, Datos y Almacenamiento",
          "Facturación, Oferta, Demanda y Activos",
          "Fórmula Organizada de Desarrollo Empresarial"
        ],
        respuesta: 0,
        explicacion: "FODA analiza factores internos (Fortalezas, Debilidades) y externos (Oportunidades, Amenazas)."
      },
      {
        pregunta: "¿Qué es el flujo de caja en un presupuesto de microempresa?",
        opciones: [
          "El registro de ingresos y egresos de dinero real en un período",
          "El total de ventas proyectadas sin gastos",
          "El impuesto sobre la renta anual",
          "El inventario físico disponible"
        ],
        respuesta: 0,
        explicacion: "El flujo de caja detalla las entradas y salidas reales de efectivo."
      }
    ]
  }
];