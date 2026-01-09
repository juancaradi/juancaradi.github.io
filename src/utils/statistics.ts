import freelanceData from '../data/freelance.json';

export function getYearStats(year: number) {
  // 🔍 DEBUG: Esto imprimirá en tu terminal cuántos datos encuentra
  console.log(`--- Analizando datos para el año: ${year} ---`);

  // 1. Filtrar usando TEXTO para evitar errores de Zona Horaria
  // "2025-01-08" -> split('-')[0] es "2025"
  const data = freelanceData.filter(item => {
    if (!item.date) return false;
    const itemYear = parseInt(item.date.split('-')[0]); 
    return itemYear === year;
  });

  const total = data.length;
  console.log(`✅ Encontrados: ${total} proyectos.`);

  if (total === 0) return null;

  // 2. Contar Materias (Subjects)
  const subjectsCount: Record<string, number> = {};
  data.forEach(item => {
    // Usamos el operador ?. por seguridad si falta algún dato
    const subjectName = item.subject?.es || "Otros"; 
    subjectsCount[subjectName] = (subjectsCount[subjectName] || 0) + 1;
  });

  // Convertir a array y ordenar (Top Materias)
  const sortedSubjects = Object.entries(subjectsCount)
    .map(([name, count]) => ({ 
      name, 
      count, 
      percentage: Math.round((count / total) * 100) 
    }))
    .sort((a, b) => b.count - a.count);

  // 3. Evolución Mensual (Usando TEXTO también)
  const monthsCount = new Array(12).fill(0); // [0, 0, ... 12 veces]
  data.forEach(item => {
    // "2025-06-15" -> split('-')[1] es "06". Restamos 1 para que sea índice 5
    const parts = item.date.split('-');
    if (parts.length > 1) {
        const monthIndex = parseInt(parts[1]) - 1;
        // Validación extra para asegurar que es un mes válido (0-11)
        if (monthIndex >= 0 && monthIndex <= 11) {
            monthsCount[monthIndex]++;
        }
    }
  });

  // Encontrar el mes con más trabajo para escalar la gráfica
  const maxMonthValue = Math.max(...monthsCount) || 1;

  // 4. Tipos de Servicio
  const typesCount: Record<string, number> = {};
  data.forEach(item => {
    const typeName = item.type?.es || "General";
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