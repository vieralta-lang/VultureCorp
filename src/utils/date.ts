/**
 * Constrói um objeto Date de forma segura e compatível com todos os navegadores,
 * incluindo motores JavaScript mais antigos e o ecossistema Apple (Safari iOS e macOS).
 * Evita o bug de retornar "Invalid Date" ao realizar parsing de formatos de string como "YYYY-MM-DD".
 *
 * @param dateString String contendo a data (ex: "2026-09-20") ou objeto da data.
 * @returns Um objeto Date válido.
 */
export function createSafeDate(dateString: string | Date | number): Date {
  if (dateString instanceof Date) {
    return dateString;
  }
  if (typeof dateString === 'number') {
    return new Date(dateString);
  }

  // Previne problemas trocando hifens descritos como YYYY-MM-DD por barras YYYY/MM/DD
  // que o motor JavascriptCore (Safari) reconhece de maneira robusta.
  const formattedString = dateString.replace(/-/g, '/');
  return new Date(formattedString);
}

/**
 * Converte strings contendo datas ("YYYY-MM-DD") em um objeto Date local
 * decompondo manualmente os componentes para evitar efeitos de fuso horário.
 *
 * @param dateString String contendo a data (ex: "2026-09-20").
 * @returns Um objeto Date configurado localmente.
 */
export function parseDateManual(dateString: string): Date {
  const [year, month, day] = dateString.split('-').map(Number);
  // O construtor com números funciona universalmente e de modo resiliente em qualquer navegador.
  // Nota: O mês é indexado em base zero (0 = Janeiro, 11 = Dezembro).
  return new Date(year, month - 1, day);
}
