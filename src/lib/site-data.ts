export const SITE = {
  name: "Metal y Cristal",
  tagline: "Arquitectura en Metal y Cristal a Medida",
  subtitle: "Seguridad, Distinción y Artesanía Estructural",
  description:
    "Especialistas en herrería contemporánea, perfilería de alta gama y cristalería templada. Puertas pivotantes, ventanales panorámicos, rejas vanguardistas y acabados arenados hechos a mano con garantía certificada.",
  whatsappNumber: "50588888888",
  phoneDisplay: "+505 8888 8888",
  email: "contacto@metalycristal.com",
  address: "Managua, Nicaragua",
  hours: "Lunes a Sábado, 8:00 am – 5:00 pm",
};

export function whatsappLink(message: string) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${SITE.whatsappNumber}?text=${text}`;
}

export const NAV_LINKS = [
  { href: "#catalogo", label: "Catálogo" },
  { href: "#simulador", label: "Acabados" },
  { href: "#antes-despues", label: "Antes y Después" },
  { href: "#cotizador-rapido", label: "Cotizador Inteligente" },
  { href: "#proceso", label: "Proceso" },
  { href: "#testimonios", label: "Testimonios" },
];

export const DIFERENCIADORES = [
  "Cristal templado y laminado de seguridad certificado",
  "Soldadura invisible y acabado en polvo electrostático",
  "Arenado y grabado artístico a mano",
  "Medición técnica y asesoría en sitio sin costo",
  "5 años de garantía estructural por escrito",
];

export const TRUST_STATS = [
  { value: "+850", label: "Proyectos Instalados", description: "En Managua y departamentos" },
  { value: "5 Años", label: "Garantía Estructural", description: "En todos nuestros trabajos de metal" },
  { value: "100%", label: "Vidrio Certificado", description: "Templado y laminado de alta resistencia" },
  { value: "24-48h", label: "Respuesta de Cotización", description: "Presupuestos claros y desglosados" },
];

export type CatalogItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  tag: string;
  specs: {
    cristal: string;
    estructura: string;
    acabado: string;
    tiempoEntrega: string;
  };
  icon: "door" | "window" | "shield" | "gem";
};

export type CatalogCategory = {
  slug: string;
  label: string;
  icon: "door" | "window" | "shield" | "gem";
  items: CatalogItem[];
};

export const CATALOG: CatalogCategory[] = [
  {
    slug: "puertas",
    label: "Puertas Metálicas con Cristal",
    icon: "door",
    items: [
      {
        id: "p-principales",
        title: "Puertas Principales Pivotantes",
        description:
          "Estructura monumental de acero negro mate combinada con cristal templado biselado o acanalado. Diseños imponentes que brindan máxima seguridad con elegancia vanguardista.",
        image: "/images/puertas-principales.jpg",
        tag: "Más Vendido",
        specs: {
          cristal: "Templado 10mm o Acanalado de Privacidad",
          estructura: "Acero estructural calibre 14 / Tubing 4x2",
          acabado: "Pintura electrostática negro mate / grafito",
          tiempoEntrega: "12 a 15 días hábiles",
        },
        icon: "door",
      },
      {
        id: "p-dobles",
        title: "Puertas Dobles y Corredizas",
        description:
          "Perfilería esbelta estilo industrial/francés con paneles de vidrio transparente. Maximizan la iluminación natural y conectan estancias con patios y terrazas.",
        image: "/images/puertas-dobles.jpg",
        tag: "Tendencia",
        specs: {
          cristal: "Templado claro 8mm con sello hermético",
          estructura: "Perfiles de acero extruido reforzado",
          acabado: "Anticorrosivo epóxico y acabado mate",
          tiempoEntrega: "10 a 14 días hábiles",
        },
        icon: "door",
      },
      {
        id: "p-seguridad",
        title: "Puertas de Alta Seguridad",
        description:
          "Blindaje visual y estructural con perfiles macizos reforzados, cerraduras multipunto de seguridad y cristal laminado antirrobo.",
        image: "/images/puertas-seguridad.jpg",
        tag: "Máxima Seguridad",
        specs: {
          cristal: "Laminado de seguridad 5+5mm anti-impacto",
          estructura: "Chapa de acero doblada en frío y refuerzos internos",
          acabado: "Pintura al horno de alta durabilidad",
          tiempoEntrega: "15 a 18 días hábiles",
        },
        icon: "door",
      },
    ],
  },
  {
    slug: "ventanas",
    label: "Ventanas y Marcos de Aluminio/Metal",
    icon: "window",
    items: [
      {
        id: "v-templado",
        title: "Ventanas Panorámicas de Cristal Templado",
        description:
          "Ventilación y vistas sin interrupciones. Resistencia multiplicada por 5 ante impactos y choques térmicos, ideal para residencias modernas y locales comerciales.",
        image: "/images/ventanas-templado.jpg",
        tag: "Luminosidad",
        specs: {
          cristal: "Templado Float 8mm / 10mm canto pulido",
          estructura: "Aluminio línea europea / Perfilería oculta",
          acabado: "Anodizado negro o imitación titanio",
          tiempoEntrega: "7 a 10 días hábiles",
        },
        icon: "window",
      },
      {
        id: "v-laminado",
        title: "Cristal Laminado Acústico y de Seguridad",
        description:
          "Aislamiento de ruido exterior y protección inquebrantable: en caso de rotura, la película PVB retiene los fragmentos impidiendo ingresos forzados.",
        image: "/images/ventanas-laminado.jpg",
        tag: "Silencio & Seguridad",
        specs: {
          cristal: "Laminado acústico 4+4 / 6+6 con PVB de 0.76mm",
          estructura: "Marcos herméticos con empaques EPDM",
          acabado: "Aluminio texturizado / Acero satinado",
          tiempoEntrega: "8 a 12 días hábiles",
        },
        icon: "window",
      },
      {
        id: "v-arenado",
        title: "Cristal Arenado y Privacidad",
        description:
          "Elegante efecto translúcido al ácido con patrones geométricos personalizados. Deja entrar la luz filtrada protegiendo la intimidad de tu hogar u oficina.",
        image: "/images/ventanas-arenado.jpg",
        tag: "Privacidad",
        specs: {
          cristal: "Arenado artesanal / Satinado al ácido",
          estructura: "Perfilería fina de metal o aluminio",
          acabado: "Negro mate anticorrosivo",
          tiempoEntrega: "7 a 10 días hábiles",
        },
        icon: "window",
      },
    ],
  },
  {
    slug: "rejas",
    label: "Rejas y Protecciones Modernas",
    icon: "shield",
    items: [
      {
        id: "r-cristal",
        title: "Rejas y Barandales con Cristal Integrado",
        description:
          "Seguridad perimetral y de balcones sin sensación de encierro. Postes y pasamanos de acero combinados con placas continuas de vidrio templado.",
        image: "/images/rejas-con-cristal.jpg",
        tag: "Diseño Exclusivo",
        specs: {
          cristal: "Templado 10mm o Laminado 6+6mm",
          estructura: "Postes de acero o acero inoxidable 304",
          acabado: "Recubrimiento en polvo electrostático",
          tiempoEntrega: "10 a 14 días hábiles",
        },
        icon: "shield",
      },
      {
        id: "r-sin-cristal",
        title: "Rejas y Portones Minimalistas",
        description:
          "Herrería arquitectónica moderna con lamas horizontales y cortes limpios. Diseñadas para resistir el clima tropical sin oxidarse.",
        image: "/images/rejas-sin-cristal.jpg",
        tag: "Robusto & Duradero",
        specs: {
          cristal: "No aplica (Estructura metálica pura)",
          estructura: "Tubo estructural y lamas de acero macizo",
          acabado: "Fondo anticorrosivo de cromato + esmalte poliuretano",
          tiempoEntrega: "10 a 15 días hábiles",
        },
        icon: "shield",
      },
      {
        id: "r-decorativa",
        title: "Celosías y Rejas Decorativas",
        description:
          "Paneles con patrones geométricos contemporáneos y celosías caladas que visten la fachada convirtiéndola en una obra arquitectónica.",
        image: "/images/rejas-decorativas.jpg",
        tag: "Arquitectura",
        specs: {
          cristal: "Opcional templado 6mm",
          estructura: "Placas de acero cortadas con precisión láser",
          acabado: "Pintura termoendurecible de larga duración",
          tiempoEntrega: "12 a 16 días hábiles",
        },
        icon: "shield",
      },
      {
        id: "r-antirrobo",
        title: "Protecciones Antirrobo Reforzadas",
        description:
          "Disuasión y solidez sin comprometer la ventilación ni afear la fachada. Anclajes profundos embutidos a muro y juntas invisibles.",
        image: "/images/rejas-antirrobo.jpg",
        tag: "Alta Disuasión",
        specs: {
          cristal: "Compatible con cristal existente",
          estructura: "Barras de hierro macizo de 1/2\" y 5/8\"",
          acabado: "Negro forja / Gris grafito anticorrosivo",
          tiempoEntrega: "7 a 10 días hábiles",
        },
        icon: "shield",
      },
    ],
  },
  {
    slug: "cristaleria",
    label: "Cristalería Artesanal y Acabados",
    icon: "gem",
    items: [
      {
        id: "c-arenado",
        title: "Arenado Artístico y Grabados a Mano",
        description:
          "Logos corporativos, guardas geométricas, motivos naturales y degradados satinados grabados a presión con arena fina de cuarzo sobre vidrio.",
        image: "/images/cristaleria-arenado.jpg",
        tag: "Artesanía Fina",
        specs: {
          cristal: "Cualquier grosor (4mm a 19mm)",
          estructura: "Vidrio flotado, templado o espejo",
          acabado: "Sellado nanotecnológico antimanchas de dedos",
          tiempoEntrega: "5 a 8 días hábiles",
        },
        icon: "gem",
      },
      {
        id: "c-pulido",
        title: "Corte Milimétrico y Canto Pulido Diamantado",
        description:
          "Acabados perfectos en bordes: canto plano pulido brillante, biselado de lujo, pecho de paloma y orificios para herrajes de acero.",
        image: "/images/cristaleria-corte-pulido.jpg",
        tag: "Precisión",
        specs: {
          cristal: "Corte computarizado y pulido diamantado",
          estructura: "Herrajes de acero inoxidable calidad 304",
          acabado: "Brillo óptico espejo en bisel",
          tiempoEntrega: "3 a 6 días hábiles",
        },
        icon: "gem",
      },
      {
        id: "c-formas",
        title: "Vidrio Curvo y Formas Especiales",
        description:
          "Cristales curvados en horno para escaleras helicoidales, divisiones cóncavas y cubiertas especiales a medida.",
        image: "/images/cristaleria-formas.jpg",
        tag: "Especialidad",
        specs: {
          cristal: "Curvado templado 10mm / 12mm",
          estructura: "Bases y botones de acero mecanizado",
          acabado: "Transparencia óptica total",
          tiempoEntrega: "15 a 20 días hábiles",
        },
        icon: "gem",
      },
      {
        id: "c-reparacion",
        title: "Instalación y Sustitución Profesional",
        description:
          "Reposición de cristales rotos, cambio de rodos y herrajes desgastados, sellado hermético y mantenimiento correctivo.",
        image: "/images/cristaleria-reparacion.jpg",
        tag: "Servicio Rápido",
        specs: {
          cristal: "Corte y templado a medida de tu marco",
          estructura: "Silicones estructurales de grado industrial",
          acabado: "Alineación y limpieza completa",
          tiempoEntrega: "24 a 48 horas para emergencias",
        },
        icon: "gem",
      },
    ],
  },
];

export const PROCESO = [
  {
    step: "01",
    title: "Asesoría & Diseño 3D",
    description:
      "Conversamos sobre tu espacio, requerimientos de seguridad y estilo arquitectónico. Te asesoramos con muestras de cristal y acabados.",
  },
  {
    step: "02",
    title: "Medición Técnica en Sitio",
    description:
      "Visitamos tu casa o negocio con herramientas de medición láser para garantizar un ajuste milimétrico sin sorpresas.",
  },
  {
    step: "03",
    title: "Fabricación Artesanal & Templado",
    description:
      "Cortamos, soldamos con precisión, arenamos y templamos cada pieza en taller bajo rigurosos estándares de control de calidad.",
  },
  {
    step: "04",
    title: "Instalación Limpia & Ajuste",
    description:
      "Montaje profesional por personal capacitado, fijaciones reforzadas, sellado perimetral y entrega de la obra impecable.",
  },
  {
    step: "05",
    title: "Póliza de Garantía Escrita",
    description:
      "Entregamos certificado de garantía por 5 años en estructura y herrajes, respaldando tu inversión a largo plazo.",
  },
];

export const ANTES_DESPUES = [
  {
    id: "caso-rejas",
    title: "Rejas Coloniales Oxidadas → Protección Moderna con Cristal",
    description:
      "Transformación completa de fachada: se retiró reja pesada y oxidada, sustituyéndola por una estructura contemporánea en negro mate con paneles de cristal templado que permiten el paso de la luz con total seguridad.",
    beforeImage: "/images/antes-rejas.jpg",
    afterImage: "/images/despues-rejas.jpg",
    category: "Rejas y Fachadas",
    highlight: "+100% luminosidad y valorización de la propiedad",
  },
  {
    id: "caso-ventanas",
    title: "Ventanas Antiguas Desgastadas → Ventanal Panorámico Hermético",
    description:
      "Sustitución de viejos marcos de madera con filtraciones de aire por perfiles de aluminio negro y cristal doble de seguridad con aislamiento térmico y acústico.",
    beforeImage: "/images/antes-ventanas.jpg",
    afterImage: "/images/despues-ventanas.jpg",
    category: "Ventanas y Balcones",
    highlight: "Aislamiento acústico y cero filtraciones",
  },
  {
    id: "caso-cristal",
    title: "Cristales Dañados → Mampara con Arenado Artístico Personalizado",
    description:
      "De un panel roto y peligroso a una pieza de arte funcional con grabado esmerilado de privacidad y marcos de acero inoxidable pulido.",
    beforeImage: "/images/antes-cristal.jpg",
    afterImage: "/images/despues-cristal.jpg",
    category: "Cristalería Fina",
    highlight: "Diseño exclusivo grabado a mano",
  },
];

export const GLASS_SIMULATOR_DATA = {
  glasses: [
    {
      id: "claro",
      name: "Cristal Claro Extra-Transparente",
      description: "Máxima luminosidad y visión cristalina de 6mm a 12mm.",
      opacity: "Transparencia 99%",
      bestFor: "Puertas principales, ventanales a jardín y barandales",
      bgClass: "bg-cyan-500/10 border-cyan-400/40 backdrop-blur-none",
      badge: "Más Popular",
    },
    {
      id: "arenado",
      name: "Cristal Arenado / Satinado al Ácido",
      description: "Privacidad total con paso de luz natural suave y difusa.",
      opacity: "Translúcido / Privacidad 85%",
      bestFor: "Baños, divisiones de oficina y ventanas a la calle",
      bgClass: "bg-slate-200/50 border-slate-300 backdrop-blur-md",
      badge: "Privacidad",
    },
    {
      id: "humo",
      name: "Cristal Tintado Humo / Bronce",
      description: "Control solar, reducción de reflejos y look sofisticado.",
      opacity: "Control Solar / 60% Paso de Luz",
      bestFor: "Fachadas con alta exposición al sol y portones",
      bgClass: "bg-amber-950/40 border-amber-800/50 backdrop-blur-sm",
      badge: "Térmico",
    },
    {
      id: "laminado",
      name: "Laminado de Seguridad Inquebrantable",
      description: "Vidrio 5+5mm con película PVB ultra resistente anti-intrusión.",
      opacity: "Seguridad Reforzada",
      bestFor: "Rejas exteriores, vitrinas y ventanas de primera planta",
      bgClass: "bg-emerald-500/10 border-emerald-400/40 backdrop-blur-xs",
      badge: "Anti-Impacto",
    },
  ],
  metals: [
    {
      id: "negro-mate",
      name: "Acero Negro Mate Electrostático",
      description: "El acabado contemporáneo por excelencia. Resistente a rayos UV.",
      color: "#18181b",
    },
    {
      id: "acero-inox",
      name: "Acero Inoxidable 304 Satinado",
      description: "Cero corrosión, ideal para ambientes húmedos o barandales.",
      color: "#94a3b8",
    },
    {
      id: "aluminio-anodizado",
      name: "Aluminio Anodizado Grafito",
      description: "Ligero, indeformable y con sellado hermético.",
      color: "#334155",
    },
  ],
};

export const TESTIMONIOS = [
  {
    name: "Arq. Carlos Mendoza",
    role: "Desarrollador Residencial",
    quote:
      "Llevamos más de 4 proyectos residenciales trabajando con Metal y Cristal. La precisión en los cortes, la calidad del templado y la soldadura invisible en las puertas pivotantes están a otro nivel en el país.",
    rating: 5,
    project: "Puertas Pivotantes & Barandales de Cristal",
  },
  {
    name: "Lic. Marcela Palacios",
    role: "Propietaria en Las Colinas",
    quote:
      "Cambiamos las rejas tradicionales por el sistema con cristal integrado. Nuestra fachada parece de revista y la sensación de seguridad es impecable. Cumplieron exactamente con la fecha prometida.",
    rating: 5,
    project: "Reja Perimetral con Vidrio Templado",
  },
  {
    name: "Restaurante & Lounge El Portón",
    role: "Cliente Comercial",
    quote:
      "Nos fabricaron el acceso principal combinando acero negro y cristales con arenado artístico de nuestro logo. Ha sido objeto de fotos de todos los clientes desde el día de apertura.",
    rating: 5,
    project: "Puertas Dobles & Arenado Personalizado",
  },
];

export const TIPOS_TRABAJO = [
  "Puerta principal pivotante con cristal",
  "Puertas dobles / corredizas industriales",
  "Ventana panorámica de cristal templado",
  "Ventana acústica de cristal laminado",
  "Reja moderna con cristal integrado",
  "Reja perimetral minimalista (sin cristal)",
  "Celosía / Barandal decorativo",
  "Cristalería fina / Arenado artístico",
  "Reparación o reposición de cristal",
  "Proyecto arquitectónico completo",
];

export const MATERIALES = [
  "Acero / Hierro Negro Mate",
  "Acero Inoxidable 304 Satinado",
  "Aluminio Línea Europea (Negro / Grafito)",
  "Combinación Metal + Cristal Templado",
  "Requiero asesoría técnica",
];

export const GROSORES_CRISTAL = [
  "Cristal Templado 8mm (Estándar)",
  "Cristal Templado 10mm (Alta resistencia)",
  "Cristal Laminado de Seguridad 5+5mm",
  "Cristal Arenado / Satinado de Privacidad",
  "Cristal Tintado / Control Solar",
  "Aún no estoy seguro",
];
