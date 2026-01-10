const COLORS: Record<string, string> = {
  // Estadística
  "estadistica": "16, 185, 129",
  "statistics": "16, 185, 129",

  // Cálculo
  "calculo diferencial": "59, 130, 246",
  "differential calculus": "59, 130, 246",
  "calculo integral": "37, 99, 235",
  "integral calculus": "37, 99, 235",
  "calculo vectorial": "29, 78, 216",
  "vector calculus": "29, 78, 216",

  // Álgebra
  "algebra lineal": "139, 92, 246",
  "linear algebra": "139, 92, 246",

  // Ecuaciones
  "ecuaciones diferenciales": "239, 68, 68",
  "differential equations": "239, 68, 68",

  // Discretas
  "matematicas discretas": "245, 158, 11",
  "discrete mathematics": "245, 158, 11",

  // Otros
  "otros": "107, 114, 128",
  "others": "107, 114, 128",

  "default": "107, 114, 128",
};

function canon(s: string) {
  return s
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, ''); // quita acentos
}

export function getSubjectColor(subjectName?: string): string {
  if (!subjectName) return COLORS["default"];
  const key = canon(subjectName);
  return COLORS[key] || COLORS["default"];
}
