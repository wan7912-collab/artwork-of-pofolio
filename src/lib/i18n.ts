export type Lang = 'zh' | 'en';

export const htmlLang: Record<Lang, string> = { zh: 'zh-Hant-TW', en: 'en' };

export const ui = {
  zh: {
    works: '作品',
    about: '關於',
    contact: '聯絡',
    all: '全部',
    other: '其他作品',
    filter: '依系列篩選',
    exhibitions: '展歷',
    education: '學歷',
    year: '年份',
    medium: '媒材',
    size: '尺寸',
    back: '← 回到作品',
    email: '電子郵件',
    social: '社群',
    otherLang: 'EN',
    otherLangLabel: 'Switch to English',
    theme: '切換深淺色',
    close: '關閉',
    prev: '上一張',
    next: '下一張',
    enlarge: '檢視大圖',
    notFound: '找不到這個頁面',
    home: '回首頁',
    empty: '目前還沒有作品。',
  },
  en: {
    works: 'Works',
    about: 'About',
    contact: 'Contact',
    all: 'All',
    other: 'Other works',
    filter: 'Filter by series',
    exhibitions: 'Exhibitions',
    education: 'Education',
    year: 'Year',
    medium: 'Medium',
    size: 'Size',
    back: '← Back to works',
    email: 'Email',
    social: 'Social',
    otherLang: '中',
    otherLangLabel: '切換為中文',
    theme: 'Toggle light / dark',
    close: 'Close',
    prev: 'Previous',
    next: 'Next',
    enlarge: 'View larger',
    notFound: 'Page not found',
    home: 'Home',
    empty: 'No works yet.',
  },
} as const;

/** 英文頁優先用英文；英文沒填就退回中文 */
export function pick(lang: Lang, zh?: string | null, en?: string | null): string {
  if (lang === 'en' && en && en.trim()) return en;
  return zh ?? '';
}
