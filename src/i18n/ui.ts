export const languages = {
    es: 'Español',
    en: 'English',
};

export const defaultLang = 'es';

export const ui = {
    es: {
        // --- 1. SIDEBAR & META (Lo que faltaba) ---
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
        modalLink: "Ver todos los proyectos →",

        // Freelance
        freelanceTitle: "Bitácora Freelance",
        freelanceSubtitle: "Historial de soluciones académicas y desarrollos técnicos.",
        freelancePrivate: "Código Privado / No disponible",
        freelanceDownload: "Descargar Recurso"
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
        modalLink: "View all repository →",

        // Freelance
        freelanceTitle: "Freelance Log",
        freelanceSubtitle: "History of academic solutions and technical developments.",
        freelancePrivate: "Private Code / Not available",
        freelanceDownload: "Download Resource"
    },
} as const;

export function useTranslations(lang: keyof typeof ui) {
    return function t(key: keyof typeof ui[typeof defaultLang]) {
        return ui[lang][key] || ui[defaultLang][key];
    }
}