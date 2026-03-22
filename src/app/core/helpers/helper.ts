export function centerLangBased( value: number, postion : string = '50%') {
  const lang = localStorage.getItem('lang');
  if (lang == 'ar') {
    return {
      xPercent: value,
      right: postion,
    };
  } else {
    return {
      xPercent: -1 * value,
      left: postion,
    };
  }
}
export function translate(value: number){
    const lang = localStorage.getItem('lang');
    return lang == 'en' ? value : -1 * value; 
} 