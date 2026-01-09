export const languages = {
    es: 'Español',
    en: 'English',
};

export const defaultLang = 'es';

export const ui = {
    es: {
        // --- 1. SIDEBAR & META ---
        name: "Juan Camilo Ramírez Díaz",
        bio: "Estudiante de pregrado en Matemáticas. Recientemente me he enfocado en el Análisis de Datos (TDA) y la Teoría de Grafos. También practico Taekwondo.",
        location: "Medellín, Colombia",
        email: "juancaradi@gmail.com",
        githubUrl: "https://github.com/",
        linkedinUrl: "https://www.linkedin.com/",
        footer: "Hecho con Astro + GitHub Pages",
        desc: "Proyectos, trabajo freelance y notas de matemáticas.",
        
        // --- 2. NAVEGACIÓN ---
        navLabel: "Navegación principal",
        projects: "Proyectos",
        notes: "Notas",
        about: "Acerca",
        freelance: "Freelance",
        switchTo: "Cambiar a inglés",
        toggleTheme: "Cambiar tema",

        // --- 3. HERO SECTION ---
        heroBadge: "Disponible para proyectos",
        heroTitlePre: "Explorando la",
        heroTitleGradient: "belleza abstracta",
        heroTitlePost: "y su aplicación real.",
        heroDesc: "Hola, soy <strong>Camilo Ramírez</strong>, estudiante de Matemáticas dedicado a llevar la teoría a la práctica mediante código y análisis de datos. Bienvenido a mi jardín digital de notas, proyectos y soluciones.",
        btnProjects: "Ver Portafolio Completo",
        btnAbout: "Sobre mí",

        // --- 4. STATS & MODAL ---
        statsLabel: "Métricas de Impacto (Click para ver)",
        statActive: "Proyectos en Marcha",
        statDone: "Proyectos Finalizados",
        statFreelance: "Soluciones Freelance",
        statNotes: "Notas de Estudio",
        
        // Modal Titles
        modalActive: "Proyectos en Marcha 🚧",
        modalDone: "Últimos Finalizados ✅",
        modalFreelance: "Soluciones Recientes 🚀", // Faltaba este
        modalLink: "Ver todos los proyectos →",

        // --- 5. FREELANCE PAGE ---
        freelanceTitlePre: "Bitácora",
        freelanceTitleGradient: "Freelance",
        freelanceSubtitle: "Como consultor académico, ofrezco soporte especializado en Matemáticas, Estadística y Programación. Esta bitácora funciona como un repositorio público de los retos que he resuelto, donde podrás encontrar y descargar el material técnico (código, PDFs y análisis) como recurso de estudio.",
        freelancePrivate: "Código Privado / No disponible",
        freelanceDownload: "Descargar Recurso",

        // --- 6. PROJECTS PAGE (NUEVO) ---
        projectsTitlePre: "Proyectos",
        projectsTitleGradient: "Destacados",
        projectsDesc: "Una colección de mis trabajos aplicando matemáticas puras y computación para resolver problemas reales.",

        // --- FREELANCE DASHBOARD & TIMELINE ---
        'freelance.impact': 'Impacto',
        'freelance.completed': 'Proyectos Finalizados',
        'freelance.topSubjects': 'Materias más solicitadas',
        'freelance.serviceTypes': 'Tipos de Servicio',
        'freelance.monthly': 'Actividad Mensual',
        'freelance.noData': 'No se encontraron datos para el año',
        'freelance.filterAll': 'Todos',
        'freelance.projectsCount': 'proyectos',
        'freelance.noRecords': 'No hay registros para este año.'
    },

    
    en: {
        // --- 1. SIDEBAR & META ---
        name: "Juan Camilo Ramírez Díaz",
        bio: "Undergraduate Mathematics student, recently focused on Data Analysis (TDA) and Graph Theory. I also practice Taekwondo.",
        location: "Medellín, Colombia",
        email: "juancaradi@gmail.com",
        githubUrl: "https://github.com/",
        linkedinUrl: "https://www.linkedin.com/",
        footer: "Built with Astro + GitHub Pages",
        desc: "Projects, freelance work, and math course notes.",

        // --- 2. NAVIGATION ---
        navLabel: "Primary navigation",
        projects: "Projects",
        notes: "Notes",
        about: "About",
        freelance: "Freelance",
        switchTo: "Switch to Spanish",
        toggleTheme: "Toggle theme",

        // --- 3. HERO SECTION ---
        heroBadge: "Available for projects",
        heroTitlePre: "Exploring",
        heroTitleGradient: "abstract beauty",
        heroTitlePost: "and its real-world application.",
        heroDesc: "Hi, I'm <strong>Camilo Ramírez</strong>, a Mathematics student dedicated to bridging theory and practice through code and data analysis. Welcome to my digital garden of notes, projects, and solutions.",
        btnProjects: "View Full Portfolio",
        btnAbout: "About Me",

        // --- 4. STATS & MODAL ---
        statsLabel: "Impact Metrics (Click to view)",
        statActive: "Ongoing Projects",
        statDone: "Completed Projects",
        statFreelance: "Freelance Solutions",
        statNotes: "Study Notes",

        // Modal Titles
        modalActive: "Ongoing Projects 🚧",
        modalDone: "Recently Completed ✅",
        modalFreelance: "Recent Solutions 🚀", // Faltaba este
        modalLink: "View all repository →",

        // --- 5. FREELANCE PAGE ---
        freelanceTitlePre: "Freelance",
        freelanceTitleGradient: "Log",
        freelanceSubtitle: "As an academic consultant, I provide specialized support in Mathematics, Statistics, and Programming. This log serves as a public repository of the challenges I have solved, where you can find and download technical material (code, PDFs, and analysis) as a study resource.",
        freelancePrivate: "Private Code / Not available",
        freelanceDownload: "Download Resource",

        // --- 6. PROJECTS PAGE (NEW) ---
        projectsTitlePre: "Featured",
        projectsTitleGradient: "Projects",
        projectsDesc: "A collection of my work applying pure mathematics and computing to solve real-world problems.",

        // --- FREELANCE DASHBOARD & TIMELINE ---
        'freelance.impact': 'Impact',
        'freelance.completed': 'Completed Projects',
        'freelance.topSubjects': 'Most Requested Subjects',
        'freelance.serviceTypes': 'Service Types',
        'freelance.monthly': 'Monthly Activity',
        'freelance.noData': 'No data found for year',
        'freelance.filterAll': 'All',
        'freelance.projectsCount': 'projects',
        'freelance.noRecords': 'No records found for this year.'
    },
} as const;

export function useTranslations(lang: keyof typeof ui) {
    return function t(key: keyof typeof ui[typeof defaultLang]) {
        return ui[lang][key] || ui[defaultLang][key];
    }
}