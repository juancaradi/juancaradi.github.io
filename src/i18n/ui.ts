export const languages = {
    es: 'Español',
    en: 'English',
};

export const defaultLang = 'es';

export const ui = {
    es: {
        name: "Juan Camilo Ramírez Díaz",
        navLabel: "Navegación principal",
        projects: "Proyectos",
        notes: "Notas",
        about: "Acerca",
        freelance: "Freelance",
        switchTo: "Cambiar a inglés",
        toggleTheme: "Cambiar tema",
        footer: "Hecho con Astro + GitHub Pages",
        desc: "Proyectos, trabajo freelance y notas de matemáticas.",
        bio: "Estudiante de pregrado en Matemáticas. Recientemente me he enfocado en el Análisis de Datos (TDA) y la Teoría de Grafos. También practico Taekwondo.",
        location: "Medellín, Colombia",
        githubUrl: "https://github.com/",
        linkedinUrl: "https://www.linkedin.com/",
        email: "juancaradi@gmail.com",
    },
    en: {
        name: "Juan Camilo Ramírez Díaz",
        navLabel: "Primary navigation",
        projects: "Projects",
        notes: "Notes",
        about: "About",
        freelance: "Freelance",
        switchTo: "Switch to Spanish",
        toggleTheme: "Toggle theme",
        footer: "Built with Astro + GitHub Pages",
        desc: "Projects, freelance work, and math course notes.",
        bio: "Undergraduate Mathematics student, recently focused on Data Analysis (TDA) and Graph Theory. I also practice Taekwondo.",
        location: "Medellín, Colombia",
        githubUrl: "https://github.com/",
        linkedinUrl: "https://www.linkedin.com/",
        email: "juancaradi@gmail.com",
    },
} as const;

export function useTranslations(lang: keyof typeof ui) {
    return function t(key: keyof typeof ui[typeof defaultLang]) {
        return ui[lang][key] || ui[defaultLang][key];
    }
}
