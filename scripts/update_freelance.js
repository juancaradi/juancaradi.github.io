import fs from 'node:fs';
import Papa from 'papaparse';

// 👇 URL CORRECTA (Termina en output=csv)
const SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSUEpac5uv12uBlung_JVODOYsjVSqVCEnetDmPf-88EkYXVz0mdG4h1S51A4gi_zwaCbl9E-yISLYn/pub?gid=1508942164&single=true&output=csv';

async function main() {
  console.log('🔄 Conectando con Google Sheets...');

  try {
    const response = await fetch(SHEET_URL);
    if (!response.ok) throw new Error(`Error al conectar: ${response.status} ${response.statusText}`);
    
    const csvText = await response.text();
    
    // Verificación rápida para asegurar que descargamos CSV y no HTML
    if (csvText.trim().startsWith('<!DOCTYPE html>')) {
        throw new Error('❌ La URL está devolviendo HTML en lugar de CSV. Revisa el enlace de publicación.');
    }

    console.log('📥 Datos descargados. Procesando...');

    // Parseamos el CSV a Objetos JSON
    const parsed = Papa.parse(csvText, {
      header: true,
      skipEmptyLines: true,
    });

    const rows = parsed.data;

    // Mapeamos los datos, filtrando filas vacías o sin ID
    const freelanceData = rows
      .filter(row => row.id && row.date) // Solo procesar si tiene ID y Fecha
      .map((row) => {
        
        // Parsear la columna de recursos (formato tool:nombre:url | tool:nombre:url)
        const rawResources = row.resources ? row.resources.split('|') : [];
        
        const resources = rawResources.map(res => {
          // Dividimos por ':' 
          const parts = res.split(':');
          
          // Parte 1: Tool (si está vacío, default)
          const tool = parts[0] ? parts[0].trim() : 'default';
          
          // Parte 2: Nombre (si está vacío, 'Recurso')
          const name = parts[1] ? parts[1].trim() : 'Recurso';
          
          // Parte 3: URL (reconstruimos por si la URL tenía ':' como https://...)
          let url = parts.slice(2).join(':').trim(); 
          
          // Limpieza de URL
          if (url === 'null' || url === '' || url.toLowerCase() === 'no') {
              url = null;
          }
          
          return { tool, name, url };
        });

        // Construir el objeto JSON final
        return {
          id: parseInt(row.id),
          date: row.date, // Asegúrate de que en Excel esté como AAAA-MM-DD
          subject: { es: row.subject_es, en: row.subject_en },
          type: { es: row.type_es, en: row.type_en },
          title: { es: row.title_es, en: row.title_en },
          description: { es: row.desc_es, en: row.desc_en },
          resources: resources
        };
    });

    // Guardar en el archivo
    const outputPath = './src/data/freelance.json';
    fs.writeFileSync(outputPath, JSON.stringify(freelanceData, null, 2));

    console.log(`✅ ¡Éxito! Se han actualizado ${freelanceData.length} proyectos en freelance.json`);

  } catch (error) {
    console.error('❌ Error actualizando los datos:', error);
  }
}

main();