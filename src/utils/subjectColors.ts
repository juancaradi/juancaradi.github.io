// src/utils/subjectColors.ts

// Diccionario de colores (Formato RGB para poder usar opacidades)
const COLORS: Record<string, string> = {
    // 🟢 ESTADÍSTICA (Verdes/Teal)
    "Estadística": "16, 185, 129", 
    "Statistics": "16, 185, 129",
  
    // 🔵 CÁLCULO (Azules)
    "Cálculo Diferencial": "59, 130, 246",
    "Differential Calculus": "59, 130, 246",
    "Cálculo Integral": "37, 99, 235",
    "Integral Calculus": "37, 99, 235",
    "Cálculo Vectorial": "29, 78, 216",
    "Vector Calculus": "29, 78, 216",
  
    // 🟣 ÁLGEBRA (Morados)
    "Álgebra Lineal": "139, 92, 246",
    "Linear Algebra": "139, 92, 246",
  
    // 🔴 ECUACIONES (Rojos/Naranjas)
    "Ecuaciones Diferenciales": "239, 68, 68",
    "Differential Equations": "239, 68, 68",
  
    // 🟡 DISCRETAS (Amarillo/Amber)
    "Matemáticas Discretas": "245, 158, 11",
    "Discrete Mathematics": "245, 158, 11",
  
    // ⚪ OTROS (Gris Neutro)
    "Otros": "107, 114, 128",
    "Others": "107, 114, 128",
    "default": "107, 114, 128"
  };
  
  export function getSubjectColor(subjectName: string | undefined): string {
    if (!subjectName) return COLORS["default"];
    // Buscamos exacto, si no, devolvemos default
    return COLORS[subjectName] || COLORS["default"];
  }