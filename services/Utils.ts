/**
 * utils.ts
 * 
 * Additional functions and utilities.
 * @author Giuseppe Del Campo
 */


export interface cookiesContent {
  language: string | null,
  theme: boolean | null,
  palette: string | null
};

/**
 * This function checks the header language.
 * @param {string} lang header language
 * @returns {boolean} returns true if the language is italian, false otherwise.
 */
export const isNavigatorLanguageItalian = (lang: string): boolean => {
  if (lang === undefined) return true;
  const langKey = lang.split(",")[0];

  if (langKey === 'it') return true;
  return false;
};

/**
 * This function parses the header cookie string.
 * @param cookies header cookie string
 * @returns {cookiesContent} builded object
 */
export const parseCookies = (cookies: string): cookiesContent => {
  let result: cookiesContent = { language: "it", theme: false, palette: "a" };
  if (cookies === undefined) return result;

  let temp = cookies.replace(/\s/g, '');
  temp = temp.replace(/;/g, '&');

  const params = new URLSearchParams(temp);

  result = { language: params.get('language'), theme: params.get('theme') === "light" ? false : true, palette: params.get('palette') };

  return result;
};


/**
 * This function returns a professor name in "F. Lastname" format.
 * @param {string} firstName 
 * @param {string} lastName
 * @returns {string} professor name in F. Lastname format
 */
export const buildProfessorName = (firstName: string, lastName: string): string => {
  return `${firstName[0]}. ${lastName}`;
};


export const redirectToLink = (link: string): void => {
    window.open(link, '_blank');
};


export const addDays = (date: Date, days: number) : Date => {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};