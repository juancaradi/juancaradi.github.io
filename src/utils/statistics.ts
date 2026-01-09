import freelanceData from '../data/freelance.json';

// ✨ Aceptamos 'lang' como parámetro (por defecto 'es')
export function getYearStats(year: number, lang: string = 'es') {
  
  // 1. Filtrar (igual que antes)
  const data = freelanceData.filter(item => {
    if (!item.date) return false;
    const itemYear = parseInt(item.date.split('-')[0]); 
    return itemYear === year;
  });

  const total = data.length;
  if (total === 0) return null;

  // 2. Contar Materias (Usando el idioma dinámico)
  const subjectsCount: Record<string, number> = {};
  data.forEach(item => {
    // 👇 AQUÍ EL CAMBIO: Usamos item.subject[lang]
    const subjectName = item.subject?.[lang as 'es' | 'en'] || "Other"; 
    subjectsCount[subjectName] = (subjectsCount[subjectName] || 0) + 1;
  });

  const sortedSubjects = Object.entries(subjectsCount)
    .map(([name, count]) => ({ 
      name, 
      count, 
      percentage: Math.round((count / total) * 100) 
    }))
    .sort((a, b) => b.count - a.count);

  // 3. Evolución Mensual (Igual que antes)
  const monthsCount = new Array(12).fill(0);
  data.forEach(item => {
    const parts = item.date.split('-');
    if (parts.length > 1) {
        const monthIndex = parseInt(parts[1]) - 1;
        if (monthIndex >= 0 && monthIndex <= 11) {
            monthsCount[monthIndex]++;
        }
    }
  });

  const maxMonthValue = Math.max(...monthsCount) || 1;

  // 4. Tipos de Servicio (Usando el idioma dinámico)
  const typesCount: Record<string, number> = {};
  data.forEach(item => {
    // 👇 AQUÍ EL CAMBIO: Usamos item.type[lang]
    const typeName = item.type?.[lang as 'es' | 'en'] || "General";
    typesCount[typeName] = (typesCount[typeName] || 0) + 1;
  });
  
  const sortedTypes = Object.entries(typesCount)
    .map(([name, count]) => ({ 
      name, 
      count, 
      percentage: Math.round((count / total) * 100) 
    }))
    .sort((a, b) => b.count - a.count);

  return {
    total,
    topSubjects: sortedSubjects,
    monthlyTrend: monthsCount,
    maxMonthValue,
    topTypes: sortedTypes
  };
}