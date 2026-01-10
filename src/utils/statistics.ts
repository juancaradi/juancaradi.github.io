import freelanceData from '../data/freelance.json';
import { defaultLang, type Lang, normalizeLang } from '../i18n/ui';

type YearStats = {
  total: number;
  topSubjects: { name: string; count: number; percentage: number }[];
  monthlyTrend: number[];
  maxMonthValue: number;
  topTypes: { name: string; count: number; percentage: number }[];
};

export function getYearStats(year: number, langInput: unknown = defaultLang): YearStats | null {
  const lang: Lang = normalizeLang(langInput);

  const data = freelanceData.filter(item => {
    if (!item.date) return false;
    const itemYear = Number(item.date.split('-')[0]);
    return itemYear === year;
  });

  const total = data.length;
  if (total === 0) return null;

  const readLocalized = <T extends Record<string, any>>(
    obj: T | undefined,
    key: Lang,
    fallback: string
  ) => {
    const v = obj?.[key] ?? obj?.[defaultLang];
    return (typeof v === 'string' && v.trim().length > 0) ? v : fallback;
  };

  // Materias
  const subjectsCount: Record<string, number> = {};
  for (const item of data) {
    const name = readLocalized(item.subject, lang, lang === 'en' ? 'Others' : 'Otros');
    subjectsCount[name] = (subjectsCount[name] || 0) + 1;
  }

  const topSubjects = Object.entries(subjectsCount)
    .map(([name, count]) => ({ name, count, percentage: Math.round((count / total) * 100) }))
    .sort((a, b) => b.count - a.count);

  // Evolución mensual
  const monthsCount = new Array(12).fill(0);
  for (const item of data) {
    const parts = item.date.split('-');
    if (parts.length > 1) {
      const monthIndex = Number(parts[1]) - 1;
      if (monthIndex >= 0 && monthIndex <= 11) monthsCount[monthIndex]++;
    }
  }
  const maxMonthValue = Math.max(...monthsCount, 1);

  // Tipos de servicio
  const typesCount: Record<string, number> = {};
  for (const item of data) {
    const name = readLocalized(item.type, lang, lang === 'en' ? 'General' : 'General');
    typesCount[name] = (typesCount[name] || 0) + 1;
  }

  const topTypes = Object.entries(typesCount)
    .map(([name, count]) => ({ name, count, percentage: Math.round((count / total) * 100) }))
    .sort((a, b) => b.count - a.count);

  return { total, topSubjects, monthlyTrend: monthsCount, maxMonthValue, topTypes };
}
