import type { Lang } from './i18n';

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** 加上網站根路徑（儲存庫不叫 帳號.github.io 時會是 /儲存庫名） */
export function url(path = '/'): string {
  return base + (path.startsWith('/') ? path : '/' + path);
}

/** 依語言產生網址：中文在 /，英文在 /en/ */
export function langUrl(lang: Lang, path = '/'): string {
  if (lang === 'zh') return url(path);
  return url(path === '/' ? '/en/' : '/en' + path);
}
